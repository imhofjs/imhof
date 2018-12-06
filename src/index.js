import 'babel-polyfill';

import applyDefaultQuery from './util/default-query';
import { windowLoad } from './util/dom';
import getValidArgs from './arguments';
import createConfig from './config';
import { render } from './renderer';

async function run() {
  applyDefaultQuery();

  const args = getValidArgs();

  if (args) {
    const config = createConfig(args);
    await render(config);
  }

  // html-pdf-chrome event detection works only after the load event
  // see https://github.com/westy92/html-pdf-chrome/issues/137
  await windowLoad;
  window.htmlPdfDone = true;
}

run();
