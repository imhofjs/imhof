const chromeLauncher = require('chrome-launcher');
const htmlPdf = require('html-pdf-chrome');
const path = require('path');
const querystring = require('querystring');

const baseUrl = `file://${path.resolve(__dirname, '../dist/index.html')}`;

async function withChrome(task) {
  const chromeFlags = [
    '--headless',
    '--disable-gpu',
  ];
  const chrome = await chromeLauncher.launch({ chromeFlags });
  await task(chrome.port);
  await chrome.kill();
}

async function createPdf(chromePort, filename, config) {
  const timeMessage = `Create ${filename}`;
  console.time(timeMessage);
  const options = {
    completionTrigger: new htmlPdf.CompletionTrigger.Variable('htmlPdfDone', 20000),
    port: chromePort,
    printOptions: {
      preferCSSPageSize: true,
      printBackground: true,
    },
  };
  const url = `${baseUrl}?${querystring.stringify(config)}`;
  const pdf = await htmlPdf.create(url, options);
  await pdf.toFile(filename);
  console.timeEnd(timeMessage);
}

withChrome(chromePort => createPdf(
  chromePort, 'map.pdf', {
    geojson: 'https://karavia.ch/data/switzerland.geojson',
  },
));
