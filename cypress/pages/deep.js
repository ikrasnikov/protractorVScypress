class DeepPage {

  static navigateTo() {
    cy.visit('/some-deep-page');

    return this.getInstance();
  }

  static getInstance() {
    return new DeepPage();
  }

  clickNextPicture() {
    cy.get('button.picture-button').click();
  }

  clickBack() {
    cy.get('a').click();
  }

  getPicture() {
    return cy.get('img[width="300"]');
  }

  enterFirstName(text) {
    this.setInputValue(text, 'First name');
  }

  enterLastName(text) {
    this.setInputValue(text, 'Last name');
  }

  setInputValue(text, placeholder) {
    const inputElement = this.getUserFormInput(placeholder);
    inputElement.clear();
    inputElement.type(text);
  }

  getUserFormInput(placeholder) {
    return cy.get(`input[placeholder="${placeholder}"]`);
  }

  submitUserForm() {
    return cy.get('button.user-submit').click();
  }

  getUserData() {
    return cy.get('div.user');
  }
}

export default DeepPage;
