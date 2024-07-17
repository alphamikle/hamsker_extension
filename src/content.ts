import { copyTextToClipboard, delay } from './utils/tools';

async function main() {
  console.log('Hamsker waiting for you to click on "Play" button')
  await waitForClick();
}

async function waitForClick() {
  let authKey = '';
  let counter = 0;

  while (authKey === '') {
    const iframes = document.querySelectorAll('iframe');

    for (const iframe of iframes) {
      if (iframe.src.includes('query_id')) {
        authKey = iframe.src;
        await copyTextToClipboard(authKey);
        console.log('Auth key copied to the clipboard. You can paste in into the Hamsker app!', authKey);
        break;
      }
    }

    if (authKey === '') {
      console.log(`[${counter++}] Click on "Play" button to copy auth key into the clipboard`);
      await delay(800);
    }
  }
}

main().then();