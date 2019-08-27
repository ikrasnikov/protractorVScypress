import { $, browser } from 'protractor';

export class DeepPage {

  static async navigateTo() {
    await browser.get('/some-deep-page');

    return this.getInstance();
  }

  static getInstance() {
    return new DeepPage();
  }

  async clickNextPicture() {
    await $('button').click();
  }

  async clickBack() {
    await $('a').click();
  }

  async getPictureScr() {
    return await $('img[width="300"]').getAttribute('src');
  }
}
