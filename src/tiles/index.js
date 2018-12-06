const tileConfigs = {
  OSM: {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors',
    pixelRatio: 1,
    subdomains: 'abc',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  },
  'basemap.at': {
    attribution: 'Data source: <a href="https://basemap.at" target="_blank">basemap.at</a>',
    pixelRatio: 2,
    subdomains: '1234',
    url: 'https://maps{s}.wien.gv.at/basemap/bmaphidpi/normal/google3857/{z}/{y}/{x}.jpeg',
  },
};

export default tileConfigs;
