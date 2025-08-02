export function wrapper(content, attr) {
  const { tag = "div", __keywords, ...attrs } = attr || {};

  return `<${tag} ${Object.entries(attrs)
    .map(([key, value]) => `${key}="${value}"`)
    .join(" ")}>

${content}

</${tag}>`;
}
