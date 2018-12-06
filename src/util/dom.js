export const CSS_PIXELS_PER_INCH = 96;

export function setSheetPadding(padding) {
  [...document.getElementsByClassName('sheet')].forEach((sheet) => {
    const { style } = sheet;
    style.padding = `${padding}mm`;

    // Compensate for page size that is off by 1mm, this is by design in paper-css to avoid extra
    // page breaks, see https://github.com/cognitom/paper-css/issues/31
    style.paddingBottom = `${padding - 1}mm`;
  });
}

export function showElementById(id) {
  const element = document.getElementById(id);
  element.style.display = 'block';
  return element;
}

export const windowLoad = new Promise((resolve) => {
  window.addEventListener('load', resolve);
});
