function isObject(item) {
  return (item && typeof item === 'object' && !Array.isArray(item));
}

function mergeDefaults(config, defaultConfig) {
  if (isObject(config)) {
    if (!defaultConfig) {
      return config;
    }
    const mergedConfig = {};
    Object.entries(config).forEach(([key, value]) => {
      mergedConfig[key] = mergeDefaults(value, defaultConfig[key]);
    });
    return {
      ...defaultConfig,
      ...mergedConfig,
    };
  }
  if (config === undefined) {
    return defaultConfig;
  }
  return config;
}

const defaultConfig = {
  dpi: 150,
  padding: 10,
  quality: 0.92,
  renderer: 'leaflet',
  tiles: 'OSM',
};

export default function defaults(config) {
  return mergeDefaults(config, defaultConfig);
}
