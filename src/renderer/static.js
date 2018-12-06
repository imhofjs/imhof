import StaticMap from '@rz0/static-map';
import { CSS_PIXELS_PER_INCH, showElementById } from '../util/dom';

function createCanvas(dpi) {
  const container = showElementById('static-container');

  const [width, height] = [
    container.clientWidth,
    container.clientHeight,
  ].map((pixels) => {
    const inches = pixels / CSS_PIXELS_PER_INCH;
    const dots = inches * dpi;
    return dots;
  });

  const canvas = document.createElement('canvas');
  container.appendChild(canvas);
  canvas.width = width;
  canvas.height = height;

  return canvas;
}

function tileUrls({ subdomains, url }) {
  return subdomains.split('').map(subdomain => (
    url.replace(/{s}/g, subdomain)
  ));
}

function staticMapInstance(tileConfig) {
  return new StaticMap(tileUrls(tileConfig), {
    size: 256 * tileConfig.pixelRatio,
  });
}

function createMap(staticMap, canvas, { center: [lat, lon], zoom }) {
  return new Promise((resolve) => {
    staticMap.getMap(canvas, lon, lat, zoom, () => {
      resolve(canvas);
    });
  });
}

export default function render(tileConfig, { dpi, view }) {
  const canvas = createCanvas(dpi);
  const staticMap = staticMapInstance(tileConfig);
  return createMap(staticMap, canvas, view);
}
