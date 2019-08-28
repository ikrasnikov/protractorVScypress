import AppPage from "../pages/main";

describe('demo tests by Cypress', () => {
  let page;
  let deepPage;

  let timeout = 500;

  const testUser1 = {
    firstName: 'Vasya',
    lastName: 'Petrov',
  };

  const testUser2 = {
    firstName: 'John',
    lastName: 'Cena',
  };

  beforeEach(() => {
    cy.wait(timeout)
  });

  it('check router redirect', () => {
    cy.visit('/');
    cy.url().should('include', 'http://localhost:4200/main');
  });

  it('should display welcome message', () => {
    page = AppPage.navigateTo();
    page.getParagraph().contains('Welcome to Protractor vs Cypress!');
  });

  it('should display four links', () => {
    page.getLink().contains('Tour of Heroes');
    page.getLink().contains('CLI Documentation');
    page.getLink().contains('Angular blog');
    page.getLink().contains('Redirect to deep page');
  });

  it('check Tour of Heroes link', () => {
    page.getLink('https://angular.io/tutorial').contains('Tour of Heroes');
  });

  it('check CLI Documentation', () => {
    page.getLink('https://github.com/angular/angular-cli/wiki').contains('CLI Documentation');
  });

  it('check Angular blog', () => {
    page.getLink('https://blog.angular.io/').contains('Angular blog');
  });

  it('check Redirect to deep page', () => {
    deepPage = page.redirectToDeepPage();
    cy.url().should('include','http://localhost:4200/some-deep-page');
  });

  it('check user form', () => {
    deepPage.enterFirstName(testUser1.firstName);
    deepPage.enterLastName(testUser1.lastName);
    deepPage.submitUserForm();
    deepPage.getUserData().contains( `${testUser1.firstName} ${testUser1.lastName}`);
    cy.wait(timeout);

    deepPage.enterFirstName(testUser2.firstName);
    deepPage.enterLastName(testUser2.lastName);
    deepPage.submitUserForm();
    deepPage.getUserData().contains(`${testUser2.firstName} ${testUser2.lastName}`);
  });

  it('check picture change button', () => {
    deepPage.clickNextPicture();
    deepPage.getPicture().should('have.attr', 'src').should('include','one');
    cy.wait(timeout);

    deepPage.clickNextPicture();
    deepPage.getPicture().should('have.attr', 'src').should('include','two');
    cy.wait(timeout);

    deepPage.clickNextPicture();
    deepPage.getPicture().should('have.attr', 'src').should('include','three');
    cy.wait(timeout);

    deepPage.clickNextPicture();
    deepPage.getPicture().should('have.attr', 'src').should('include','four');
    cy.wait(timeout);

    deepPage.clickNextPicture();
    deepPage.getPicture().should('have.attr', 'src').should('include','five');
    cy.wait(timeout);

    deepPage.clickNextPicture();
    deepPage.getPicture().should('have.attr', 'src').should('include','one');
  });

  it('check back button', () => {
    deepPage.clickBack();

    cy.url().should('include','http://localhost:4200/main');
  });
});
