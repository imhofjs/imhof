import parse from '../../src/arguments/parse';

let view;

beforeEach(() => {
  view = {
    lat: '1',
    lon: '2',
    zoom: '3',
  };
});

test('parses view', () => {
  expect(parse(view)).toEqual({
    lat: 1,
    lon: 2,
    zoom: 3,
  });
});

test('throws on missing view', () => {
  expect(() => {
    parse({});
  }).toThrow();
});

test('parses geojson', () => {
  const args = { geojson: 'example.geojson' };
  expect(parse(args)).toEqual({ geojson: 'example.geojson' });
});

test('parses renderer, tiles', () => {
  const args = {
    ...view,
    renderer: 'static',
    tiles: 'basemap.at',
  };

  const { renderer, tiles } = parse(args);

  expect(renderer).toBe('static');
  expect(tiles).toBe('basemap.at');
});

test('throws on illegal renderer', () => {
  const args = {
    ...view,
    renderer: 'illegal value',
  };

  expect(() => {
    parse(args);
  }).toThrow();
});

test('parses dpi, padding, quality', () => {
  const args = {
    ...view,
    dpi: '300',
    padding: '20',
    quality: '0.5',
  };

  const { dpi, padding, quality } = parse(args);

  expect(dpi).toBe(300);
  expect(padding).toBe(20);
  expect(quality).toBe(0.5);
});
