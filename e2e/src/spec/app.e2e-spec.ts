import { browser } from 'protractor';

import { AppPage } from '../pages/main.po';
import { DeepPage } from '../pages/deep.po';

describe('demo tests by Protractor', () => {
  let page: AppPage;
  let deepPage: DeepPage;

  const timeout = 500;
  const testUser1 = {
    firstName: 'Vasya',
    lastName: 'Petrov',
  };

  const testUser2 = {
    firstName: 'John',
    lastName: 'Cena',
  };


  beforeAll(() => {
    browser.driver.manage().window().maximize();
  });

  beforeEach(() => {
    browser.driver.sleep(timeout);
  });

  it('check router redirect', async () => {
    browser.get('/');
    expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/main');
  });

  it('should display welcome message', async () => {
    page = await AppPage.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to Protractor vs Cypress!');
  });

  it('should display four links', async () => {
    expect(page.isLinkVisible('Tour of Heroes')).toEqual(true);
    expect(page.isLinkVisible('CLI Documentation')).toEqual(true);
    expect(page.isLinkVisible('Angular blog')).toEqual(true);
    expect(page.isLinkVisible('Redirect to deep page')).toEqual(true);
  });

  it('check Tour of Heroes link', async () => {
    expect(page.getLink('Tour of Heroes').getAttribute('href')).toContain('https://angular.io/tutorial');
  });

  it('check CLI Documentation', async () => {
    expect(page.getLink('CLI Documentation').getAttribute('href')).toContain('https://github.com/angular/angular-cli/wiki');
  });

  it('check Angular blog', async () => {
    expect(page.getLink('Angular blog').getAttribute('href')).toContain('https://blog.angular.io/');
  });

  it('check Redirect to deep page', async () => {
    deepPage = await page.redirectToDeepPage();
    expect(browser.getCurrentUrl()).toContain('http://localhost:4200/some-deep-page');
  });

  it('check user form', async () => {
    await deepPage.enterFirstName(testUser1.firstName);
    await deepPage.enterLastName(testUser1.lastName);
    await deepPage.submitUserForm();
    expect(deepPage.getUserData()).toEqual(`${testUser1.firstName} ${testUser1.lastName}`);
    await browser.driver.sleep(timeout);

    await deepPage.enterFirstName(testUser2.firstName);
    await deepPage.enterLastName(testUser2.lastName);
    await deepPage.submitUserForm();
    expect(deepPage.getUserData()).toEqual(`${testUser2.firstName} ${testUser2.lastName}`);
  });

  it('check picture change button', async () => {
    await deepPage.clickNextPicture();
    expect(deepPage.getPictureScr()).toContain('one.svg');
    browser.driver.sleep(timeout);

    await deepPage.clickNextPicture();
    expect(deepPage.getPictureScr()).toContain('two.png');
    browser.driver.sleep(timeout);

    await deepPage.clickNextPicture();
    expect(deepPage.getPictureScr()).toContain('three.png');
    browser.driver.sleep(timeout);

    await deepPage.clickNextPicture();
    expect(deepPage.getPictureScr()).toContain('four.png');
    browser.driver.sleep(timeout);

    await deepPage.clickNextPicture();
    expect(deepPage.getPictureScr()).toContain('five.png');
    browser.driver.sleep(timeout);

    await deepPage.clickNextPicture();
    expect(deepPage.getPictureScr()).toContain('one.svg');
  });

  it('check back button', async () => {
    await deepPage.clickBack();

    expect(browser.getCurrentUrl()).toContain('http://localhost:4200/main');
  });
});
