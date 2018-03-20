import { GooglePage } from './google.po';
import { browser } from 'protractor';
import { GoogleResultsPage } from './google-results.po';

describe('Google', () => {

  let googleResults: GoogleResultsPage;

  beforeAll(() => {
    browser.waitForAngularEnabled(false);
  });

  beforeAll(() => {
    const google = new GooglePage();
    googleResults = google
      .navigateTo()
      .search('Kartoffel');
  });

  it('should have gesundheit as first result', () => {
    const headline = googleResults
      .getResults()
      .get(0)
      .$('h3 a')
      .getText();

      // browser.sleep(5000);

    expect(headline).toContain('gesundheit');

  });

  afterAll(() => {
    browser.waitForAngularEnabled(true);
  });
});
