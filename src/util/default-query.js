export default function applyDefaultQuery() {
  if (!window.location.search) {
    window.location.search = 'lat=46.951083&lon=7.438639&zoom=15';
  }
}
