import obfuscateEmail from "../../utils/emailObfuscate.js";

// Produce obfuscated email link
export function emailLink(email, rawParams) {
  const params =
    typeof rawParams === "string" ? { text: rawParams } : rawParams || {};
  let { text, subject, body, cc, bcc, ...attrs } = params;
  // Use it like so: {{ "hello@mookai.be" | emailLink({ subject: "Subject", body: "Body", cc: "CC", bcc: "BCC", class: "my-class"}) }}
  const { element } = obfuscateEmail(email, {
    text,
    subject,
    body,
    cc,
    bcc,
    ...attrs,
  });

  return this.env.filters.safe(element);
}
