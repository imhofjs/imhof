import leaflet from 'leaflet';
import createMapElement from './map-element';

function createMap(mapElement, { center, zoom }) {
  return leaflet.map(mapElement, {
    attributionControl: false,
    center,
    fadeAnimation: false,
    zoom,
    zoomControl: false,
  });
}

function createTileLayer({ subdomains, url }) {
  return leaflet.tileLayer(url, {
    maxZoom: Infinity,
    subdomains,
  });
}

async function getTrack(url) {
  const response = await fetch(url);
  const geojson = await response.json();
  return leaflet.geoJson(geojson);
}

async function setViewFromTrack(map, url) {
  const track = await getTrack(url);
  map.addLayer(track);
  map.fitBounds(track.getBounds());
}

async function setView(map, { geojson, center, zoom }) {
  if (geojson) {
    return setViewFromTrack(map, geojson);
  }
  return map.setView(center, zoom);
}

function onLoadPromise(tileLayer) {
  return new Promise((resolve) => {
    tileLayer.on('load', () => {
      resolve();
    });
  });
}

export default async function render(tileConfig, { dpi, view }) {
  const mapElement = createMapElement(dpi, tileConfig.pixelRatio);
  const map = createMap(mapElement, view);
  const tileLayer = createTileLayer(tileConfig).addTo(map);
  await setView(map, view);
  return onLoadPromise(tileLayer);
}
