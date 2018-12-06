import { CSS_PIXELS_PER_INCH, showElementById } from '../../util/dom';

export default function createMapElement(dpi, pixelRatio) {
  const scale = CSS_PIXELS_PER_INCH / dpi * pixelRatio;

  const container = showElementById('leaflet-container');
  container.style.transform = `scale(${scale})`;

  const mapElement = document.createElement('div');
  const mapElementScale = `${100 / scale}%`;
  mapElement.style.width = mapElementScale;
  mapElement.style.height = mapElementScale;

  container.appendChild(mapElement);

  return mapElement;
}
