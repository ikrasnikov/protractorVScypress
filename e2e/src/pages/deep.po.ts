import { $ } from 'protractor';

export class DeepPage {

  static getInstance() {
    return new DeepPage();
  }

  async clickNextPicture() {
    await $('button.picture-button').click();
  }

  async clickBack() {
    await $('a').click();
  }

  async getPictureScr() {
    return await $('img[width="300"]').getAttribute('src');
  }

  async enterFirstName(text) {
    await this.setInputValue(text, 'First name');
  }

  async enterLastName(text) {
    await this.setInputValue(text, 'Last name');
  }

  async setInputValue(text, placeholder) {
    const inputElement = await this.getUserFormInput(placeholder);
    await inputElement.clear();
    await inputElement.sendKeys(text);
  }

  async getUserFormInput(placeholder) {
    return $(`input[placeholder="${placeholder}"]`);
  }

  async submitUserForm() {
    return $('button.user-submit').click();
  }

  async getUserData() {
    return $('div.user').getText();
  }
}
