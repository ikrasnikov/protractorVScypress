import { browser, by, element } from 'protractor';

import { DeepPage } from './deep.po';

export class AppPage {

  static async navigateTo() {
    await cy.visit('/main');

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

  async getNewTabUrl() {
    let firstTab;
    let currentUrl;

    await browser.getAllWindowHandles().then( async (res: string[]) => {
      await browser.switchTo().window(res[1]);
      firstTab = res[0];
      currentUrl = await browser.getCurrentUrl();
    });

    await browser.close();
    await browser.switchTo().window(firstTab);
    await browser.refresh();

    return currentUrl;
  }
}
