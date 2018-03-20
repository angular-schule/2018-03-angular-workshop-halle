import { $, $$ } from 'protractor';

export class GoogleResultsPage {

  getResults() {
    return $$('div.srg').get(0).$$('div.g');
  }
}
