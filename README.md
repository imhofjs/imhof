# imhof

Render map tiles to pdf in the browser with arbitrary resolution.

## Demo

- [Simple demo](https://imhofjs.github.io/?geojson=https://rzoller.ch/data/switzerland.geojson)
  in the browser
- [HiDPI demo](https://imhofjs.github.io/?lat=48.2&lon=16.366&zoom=15&tiles=basemap.at&dpi=300)
  using [basemap.at](https://basemap.at/index_en.html) HiDPI tiles
- [PDF download demo](https://imhof.herokuapp.com/?geojson=https://rzoller.ch/data/switzerland.geojson)
  using Headless Chrome on Heroku

## Usage

`https://imhofjs.github.io/[?options]`

For example

[`https://imhofjs.github.io/?lat=46.951083&lon=7.438639&zoom=15
`](https://imhofjs.github.io/?lat=46.951083&lon=7.438639&zoom=15)

The following options are available:

| Option   | Value (default)                                                       |
| -------- | --------------------------------------------------------------------- |
| lat      | Latitude, -90 to 90                                                   |
| lon      | Longitude, -180 to 180                                                |
| zoom     | 0 to maxZoom (depends on tiles)                                       |
| geojson  | URL pointing to a [GeoJSON](https://tools.ietf.org/html/rfc7946) file |
| renderer | [leaflet, static, static-jpeg] (leaflet)                              |
| tiles    | [OSM, basemap.at] (OSM)                                               |
| dpi      | Map resolution in dots per inch (150)                                 |
| padding  | Padding in mm (10)                                                    |
| quality  | Image quality for static-jpeg renderer (0.92)                         |

## Name

This project is named after the Swiss cartographer
[Eduard Imhof](https://en.wikipedia.org/wiki/Eduard_Imhof).

## License

This project is licensed under the MIT license, see the LICENSE file.

## See Also

- [static-map](https://www.npmjs.com/package/@rz0/static-map)
- [leaflet-image](https://github.com/mapbox/leaflet-image)
- [BigMap 2](http://bigmap.osmz.ru/)
- Static map API of
  [Mapbox](https://www.mapbox.com/help/static-api-playground/) (account required, limited to 2560x2560 pixels)
- HiDPI tiles of
  [Thunderforest](https://www.thunderforest.com/docs/map-tiles-api/#retina-tiles),
  [Mapbox](https://www.mapbox.com/api-documentation/#retina),
  and [MapTiler](https://cloud.maptiler.com/maps/)
  (accounts required)
