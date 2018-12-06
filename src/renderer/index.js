import attribution from './attribution';
import renderLeaflet from './leaflet';
import renderStatic from './static';
import renderStaticJpeg from './static-jpeg';
import tileConfigs from '../tiles';
import { setSheetPadding } from '../util/dom';

export const renderers = {
  leaflet: renderLeaflet,
  static: renderStatic,
  'static-jpeg': renderStaticJpeg,
};

export function render(config) {
  const tileConfig = tileConfigs[config.tiles];
  attribution(tileConfig.attribution);
  setSheetPadding(config.padding);
  const renderer = renderers[config.renderer];
  return renderer(tileConfig, config);
}
