import { renderers } from '../renderer';
import tileConfigs from '../tiles';

const mandatoryCenterZoomArgs = {
  lon: Number,
  lat: Number,
  zoom: Number,
};
const enumArgs = {
  renderer: Object.keys(renderers),
  tiles: Object.keys(tileConfigs),
};
const optionalArgs = {
  dpi: Number,
  padding: Number,
  quality: Number,
};

class MissingArgument {
  constructor(name) {
    this.message = `Mandatory argument missing: ${name}`;
  }
}

class IllegalArgument {
  constructor(name, value) {
    this.message = `Illegal value for argument ${name}: ${value}`;
  }
}

function centerZoom(args) {
  const result = {};
  Object.entries(mandatoryCenterZoomArgs).forEach(([name, convert]) => {
    if (args[name]) {
      result[name] = convert(args[name]);
    } else {
      throw new MissingArgument(name);
    }
  });
  return result;
}

function view(args) {
  if (args.geojson) {
    return { geojson: args.geojson };
  }
  return centerZoom(args);
}

function enums(args) {
  const result = {};
  Object.entries(enumArgs).forEach(([name, values]) => {
    if (!args[name]) {
      return;
    }
    if (!values.includes(args[name])) {
      throw new IllegalArgument(name, args[name]);
    }
    result[name] = args[name];
  });
  return result;
}

function optional(args) {
  const result = {};
  Object.entries(optionalArgs).forEach(([name, convert]) => {
    if (args[name]) {
      result[name] = convert(args[name]);
    }
  });
  return result;
}

export default function parse(args) {
  return {
    ...view(args),
    ...enums(args),
    ...optional(args),
  };
}
