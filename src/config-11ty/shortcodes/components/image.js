import Image from "@11ty/eleventy-img";
import deepmerge from "deepmerge";
import { imageTransformOptions } from "../../plugins/imageTransform.js";
import { WORKING_DIR } from "../../../../env.config.js";

export async function image(args) {
  const {
    src: srcRaw,
    alt,
    aspectRatio,
    width,
    title,
    loading,
    decoding,
    sizes,
    wrapper,
    // imgAttrs,
    ...opts
  } = args;
  const wrapperTag = wrapper ? wrapper.split(" ")[0] : "";
  // TODO: compute sizes from widths
  // TODO: Allow defining a wrapping tag??
  const options = deepmerge.all(
    [
      imageTransformOptions,
      {
        returnType: "html",
        // ...(width && { width }),
        ...(width && { widths: [width] }),
        htmlOptions: {
          imgAttributes: {
            "eleventy:ignore": "",
            ...(alt && { alt }),
            ...(title && { title }),
            ...(loading && { loading }),
            ...(decoding && { decoding }),
            ...(sizes && { sizes }),
            ...(aspectRatio && { class: `aspect-ratio-${aspectRatio}` }),
          },
        },
      },
      opts,
    ],
    { arrayMerge: (destinationArray, sourceArray, options) => sourceArray }
  );

  if (!srcRaw) {
    return "<div>Please provide an image source</div>";
  }
  const src = `${WORKING_DIR}/${srcRaw}`.replace(/\/+/g, "/");
  const html = await Image(src, options);

  // return `<p>${html}</p>`;
  return wrapper ? `<${wrapper}>${html}</${wrapperTag}>` : html;
}
