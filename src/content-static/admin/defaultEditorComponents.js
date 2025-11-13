export const wrapperBis = {
  id: "wrapperBis",
  label: "Wrapper Bis",
  icon: "lunch_dining",
  fields: [
    {
      name: "content",
      label: "Content",
      widget: "markdown",
      required: false,
    },
    {
      name: "wrapperTag",
      label: "Wrapper Tag",
      required: false,
      widget: "select",
      options: [
        { value: "div", label: "div" },
        { value: "section", label: "section" },
        { value: "article", label: "article" },
        { value: "aside", label: "aside" },
        { value: "header", label: "header" },
        { value: "footer", label: "footer" },
        { value: "main", label: "main" },
        { value: "nav", label: "nav" },
        { value: "figure", label: "figure" },
        { value: "figcaption", label: "figcaption" },
        { value: "details", label: "details" },
        { value: "summary", label: "summary" },
        { value: "dialog", label: "dialog" },
      ],
    },
    {
      name: "wrapperAttrs",
      label: "Wrapper Attributes",
      widget: "string",
      required: false,
    },
  ],
  pattern:
    /^{%\s*wrapperBis\s*([^>]*?)\s*%}\s*([\S\s]*?)\s*{%\s*endwrapperBis\s*%}$/ms,
  fromBlock: function (match) {
    // console.log({ match });
    const propsRaw = match[1];
    // const inlineContent = match[2];
    const content = match[2];
    const wrapperTag = propsRaw.match(/tag="(.*?)"(,\s*)?/)?.[1];
    const wrapperAttrs = propsRaw.replace(/tag="(.*?)"(,\s*)?/g, "");

    // Convert from inline to multiline for editing
    // const multilineContent = inlineToMultiline(inlineContent);
    return {
      //content: multilineContent,
      content,
      wrapperTag,
      wrapperAttrs,
    };
  },
  toBlock: function (data) {
    const { content, wrapperTag = "div", wrapperAttrs = "" } = data;
    // Convert from multiline to inline for storage
    // const inlineContent = multilineToInline(content);

    // TODO: improve parsing here to make sure we output properly formatted attributes list
    // {% wrapper tag="div", class="any number of classes", id="any" %}
    // Probable separators: ` `, `,`, `, `
    // But we need to avoid splitting spaces in between quotes (like in `class`)
    const tagAttrs = wrapperAttrs;

    return `{% wrapperBis tag="${wrapperTag}"${
      tagAttrs ? `, ${tagAttrs}` : ""
    } %}
${content}
{% endwrapperBis %}`;
  },
  toPreview: function (data) {
    return `TEST`;
  },
};

// export default function () {
//   CMS.registerEditorComponent({
//     id: "wrapperBis",
//     label: "Wrapper Bis",
//     icon: "lunch_dining",
//     fields: [
//       {
//         name: "content",
//         label: "Content",
//         widget: "markdown",
//         required: false,
//       },
//       {
//         name: "wrapperTag",
//         label: "Wrapper Tag",
//         required: false,
//         widget: "select",
//         options: [
//           { value: "div", label: "div" },
//           { value: "section", label: "section" },
//           { value: "article", label: "article" },
//           { value: "aside", label: "aside" },
//           { value: "header", label: "header" },
//           { value: "footer", label: "footer" },
//           { value: "main", label: "main" },
//           { value: "nav", label: "nav" },
//           { value: "figure", label: "figure" },
//           { value: "figcaption", label: "figcaption" },
//           { value: "details", label: "details" },
//           { value: "summary", label: "summary" },
//           { value: "dialog", label: "dialog" },
//         ],
//       },
//       {
//         name: "wrapperAttrs",
//         label: "Wrapper Attributes",
//         widget: "string",
//         required: false,
//       },
//     ],
//     pattern:
//       /^{%\s*wrapperBis\s*([^>]*?)\s*%}\s*([\S\s]*?)\s*{%\s*endwrapperBis\s*%}$/ms,
//     fromBlock: function (match) {
//       // console.log({ match });
//       const propsRaw = match[1];
//       // const inlineContent = match[2];
//       const content = match[2];
//       const wrapperTag = propsRaw.match(/tag="(.*?)"(,\s*)?/)?.[1];
//       const wrapperAttrs = propsRaw.replace(/tag="(.*?)"(,\s*)?/g, "");

//       // Convert from inline to multiline for editing
//       // const multilineContent = inlineToMultiline(inlineContent);
//       return {
//         //content: multilineContent,
//         content,
//         wrapperTag,
//         wrapperAttrs,
//       };
//     },
//     toBlock: function (data) {
//       const { content, wrapperTag = "div", wrapperAttrs = "" } = data;
//       // Convert from multiline to inline for storage
//       // const inlineContent = multilineToInline(content);

//       // TODO: improve parsing here to make sure we output properly formatted attributes list
//       // {% wrapper tag="div", class="any number of classes", id="any" %}
//       // Probable separators: ` `, `,`, `, `
//       // But we need to avoid splitting spaces in between quotes (like in `class`)
//       const tagAttrs = wrapperAttrs;

//       return `{% wrapperBis tag="${wrapperTag}"${
//         tagAttrs ? `, ${tagAttrs}` : ""
//       } %}
// ${content}
// {% endwrapperBis %}`;
//     },
//     toPreview: function (data) {
//       return `TEST`;
//     },
//   });
// }
