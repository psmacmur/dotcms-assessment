// Split the URL path into segments
const splitUrlPath = (url) => {
  // Remove leading and trailing slashes
  url = url.replace(/^\/|\/$/g, '');
  const segments = url.split('/');
  //   console.log(segments);
  return segments;
};
const base = '/dotcms-assessment'; // from vite.config.js, which isn't available at runtime

export { base, splitUrlPath };
