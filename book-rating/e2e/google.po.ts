import { browser, $ } from 'protractor';
import { GoogleResultsPage } from './google-results.po';

export class GooglePage {

  navigateTo() {
    browser.get('https://www.google.de');
    return this;
  }

  search(search: string) {
    const searchForm = $('form#tsf');
    searchForm.$('input#lst-ib').sendKeys(search);

    searchForm.submit();
    return new GoogleResultsPage();
  }
}
