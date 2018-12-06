import tileConfigs from '../../src/tiles';
import mockMapElement from './mocks/map-element';

jest.doMock('../../src/renderer/leaflet/map-element', () => mockMapElement);

const { default: renderLeaflet } = require('../../src/renderer/leaflet');

let config;

beforeEach(() => {
  document.body.innerHTML = '<div id="leaflet-container"></div>';

  config = {
    dpi: 150,
    view: {
      center: [1, 2],
      zoom: 3,
    },
  };
});

function fakeLoadAllImages() {
  [...document.getElementsByTagName('img')].forEach((image) => {
    image.dispatchEvent(new Event('load'));
  });
}

test('renderLeaflet', async () => {
  setImmediate(fakeLoadAllImages);
  await renderLeaflet(tileConfigs.OSM, config);

  expect(document.body).toMatchSnapshot();
});
