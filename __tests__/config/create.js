import create from '../../src/config/create';

let defaults;
let latLonZoom;

beforeEach(() => {
  defaults = {
    dpi: 150,
    padding: 10,
    quality: 0.92,
    renderer: 'leaflet',
    tiles: 'OSM',
  };

  latLonZoom = {
    lat: 1,
    lon: 2,
    zoom: 3,
  };
});

test('creates with lat/lon/zoom and defaults', () => {
  expect(create(latLonZoom)).toEqual({
    ...defaults,
    view: {
      center: [1, 2],
      zoom: 3,
    },
  });
});

test('creates with geojson and defaults', () => {
  const args = {
    geojson: 'https://example.com/data.geojson',
  };

  expect(create(args)).toEqual({
    ...defaults,
    view: {
      geojson: 'https://example.com/data.geojson',
    },
  });
});

test('can override defaults', () => {
  const args = {
    ...latLonZoom,
    dpi: 300,
    padding: 1,
    quality: 0.5,
    renderer: 'static',
    tiles: 'basemap.at',
  };

  expect(create(args)).toEqual({
    dpi: 300,
    padding: 1,
    quality: 0.5,
    renderer: 'static',
    tiles: 'basemap.at',
    view: {
      center: [1, 2],
      zoom: 3,
    },
  });
});
