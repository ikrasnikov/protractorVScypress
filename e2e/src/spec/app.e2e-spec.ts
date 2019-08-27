import { browser } from 'protractor';

import { AppPage } from '../pages/main.po';
import { DeepPage } from '../pages/deep.po';

describe('demo tests by Protractor', () => {
  let page: AppPage;
  let deepPage: DeepPage;

  beforeAll(() => {
    browser.driver.manage().window().maximize();
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
    page = await AppPage.navigateTo();
    expect(page.isLinkVisible('Tour of Heroes')).toEqual(true);
    expect(page.isLinkVisible('CLI Documentation')).toEqual(true);
    expect(page.isLinkVisible('Angular blog')).toEqual(true);
    expect(page.isLinkVisible('Redirect to deep page')).toEqual(true);
  });

  it('check Tour of Heroes link', async () => {
    page.getLink('Tour of Heroes').click();
    const urlInNewTab = await page.getNewTabUrl();
    expect(urlInNewTab).toContain('https://angular.io/tutorial');
  });

  it('check CLI Documentation', async () => {
    browser.waitForAngularEnabled(false);
    page.getLink('CLI Documentation').click();
    const urlInNewTab = await page.getNewTabUrl();
    expect(urlInNewTab).toContain('https://github.com/angular/angular-cli/wiki');
    browser.waitForAngularEnabled(true);
  });

  it('check Angular blog', async () => {
    browser.waitForAngularEnabled(false);
    page.getLink('Angular blog').click();
    const urlInNewTab = await page.getNewTabUrl();
    expect(urlInNewTab).toContain('https://blog.angular.io/');
    browser.waitForAngularEnabled(true);
  });

  it('check Redirect to deep page', async () => {
    deepPage = await page.redirectToDeepPage();
    expect(browser.getCurrentUrl()).toContain('http://localhost:4200/some-deep-page');
  });

  it('check picture change button', async () => {
    await deepPage.clickNextPicture();
    expect(deepPage.getPictureScr()).toContain('one.svg');

    await deepPage.clickNextPicture();
    expect(deepPage.getPictureScr()).toContain('two.png');

    await deepPage.clickNextPicture();
    expect(deepPage.getPictureScr()).toContain('three.png');

    await deepPage.clickNextPicture();
    expect(deepPage.getPictureScr()).toContain('four.png');

    await deepPage.clickNextPicture();
    expect(deepPage.getPictureScr()).toContain('five.png');
  });

  it('check back button', async () => {
    await deepPage.clickBack();

    expect(browser.getCurrentUrl()).toContain('http://localhost:4200/main');
  });
});
