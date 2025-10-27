export default [
  // Aspect ratio utility
  [/^aspect-ratio-(\d+(?:\.\d+)?)$/, ([, d]) => ({ "aspect-ratio": d })],
];
