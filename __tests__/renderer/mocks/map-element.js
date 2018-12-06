import createMapElementImpl from '../../../src/renderer/leaflet/map-element';

export default function createMapElement(dpi, pixelRatio) {
  const mapElement = createMapElementImpl(dpi, pixelRatio);
  Object.defineProperty(mapElement, 'clientWidth', { value: 112 });
  Object.defineProperty(mapElement, 'clientHeight', { value: 163 });
  return mapElement;
}
