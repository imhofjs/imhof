import renderStatic from './static';
import { showElementById } from '../util/dom';

function toJpeg(canvas, quality) {
  return new Promise((resolve) => {
    const container = showElementById('static-container');
    const image = new Image();
    container.replaceChild(image, canvas);
    image.onload = resolve;
    image.src = canvas.toDataURL('image/jpeg', quality);
  });
}


export default async function render(tileConfig, config) {
  const canvas = await renderStatic(tileConfig, config);
  return toJpeg(canvas, config.quality);
}
