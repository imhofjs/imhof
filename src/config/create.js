import defaults from './defaults';

export default function create(args) {
  const view = {};

  if (args.geojson !== undefined) {
    view.geojson = args.geojson;
  } else {
    view.center = [args.lat, args.lon];
    view.zoom = args.zoom;
  }

  const config = {
    dpi: args.dpi,
    padding: args.padding,
    quality: args.quality,
    renderer: args.renderer,
    tiles: args.tiles,
    view,
  };
  return defaults(config);
}
