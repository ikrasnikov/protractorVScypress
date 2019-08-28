import DeepPage from "./deep";

class AppPage {

  static navigateTo() {
    cy.visit('/main');

    return this.getInstance();
  }

  static getInstance() {
    return new AppPage();
  }

  getParagraph() {
    return cy.get('app-root h1');
  }

  getLink(href) {
    if (href) {
      return cy.get(`h2 a[href="${href}"]`);
    }

    return cy.get('h2 a');
  }

  redirectToDeepPage() {
    this.getLink().contains('Redirect to deep page').click();

    return DeepPage.getInstance();
  }
}

export default AppPage;
