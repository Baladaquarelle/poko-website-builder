export function wrapper(content, attr) {
  const { wrapperTag } = attr || {};
  const tag = wrapperTag || "div";

  console.log({ attr, tag });
  return `<${tag}>

${content}

</${tag}>`;
}
