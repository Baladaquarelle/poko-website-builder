import { build as bunBuild, plugin as bunPlugin } from "bun";
import fglob from "fast-glob";
import { MINIFY } from "../../../../env.config.js";

export default async function (eleventyConfig, pluginOptions) {
  eleventyConfig.versionCheck(">=3.0.0-alpha.1");
  const { dir } = eleventyConfig;
  const { inputGlob = "_styles/*.css", outputDir = "assets/styles" } =
    pluginOptions || {};
  const outdir = `${dir.output}/${outputDir}`;

  let entrypoints = await fglob(`${dir.input}/${inputGlob}`);
  // Remove entrypoint files that start with an underscore
  entrypoints = entrypoints.filter(
    (entrypoint) => !entrypoint.split("/").pop().startsWith("_")
  );
  const externalCssFiles = entrypoints.map((entrypoint) => {
    const filename = entrypoint.split("/").pop();
    const localUrl = `${outputDir}/${filename}`;

    return {
      in: entrypoint,
      out: localUrl,
    };
  });
  const htmlExternalCssFiles = externalCssFiles
    .map((file) => `<link rel="stylesheet" href="/${file.out}">`)
    .join("\n");

  eleventyConfig.addGlobalData("htmlExternalCssFiles", htmlExternalCssFiles);

  if (Array.isArray(entrypoints) && typeof entrypoints[0] === "string") {
    await bunBuild({
      entrypoints,
      outdir,
      // naming: '[name].css',
      // naming: "index.css",
      // plugins: [cssTransformPlugin],
      minify: MINIFY,
      cssChunking: true,
    }).catch((e) => {
      console.error(e);
      throw e;
    });
  }

  // TODO: add global data for generated stylesheets urls ? (Should we account for drafts? Probably not as we can use underscores in file names?)
  // TODO: integrate global variables in the first stylesheet generated
  // TODO: if no stylesheet is generated, add a global data variable to be added to the main layout for global css variables
}
