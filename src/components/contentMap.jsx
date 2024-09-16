// Mapping of components to blogContent types
const contentMap = {};

const registerContentComponent = (key, component) => {
  contentMap[key] = component;
};

export { contentMap, registerContentComponent };
