import { browser, by, element } from 'protractor';

import { DeepPage } from './deep.po';

export class AppPage {

  static async navigateTo() {
    await browser.get('/main');

    return new AppPage();
  }

  async getParagraphText() {
    return await element(by.css('app-root h1')).getText();
  }

  async isLinkVisible(text) {
    return (await this.getLink(text).isPresent());
  }

  getLink(text) {
    return element(by.cssContainingText('h2 a', text));
  }

  async redirectToDeepPage() {
    await this.getLink('Redirect to deep page').click();

    return DeepPage.getInstance();
  }
}
