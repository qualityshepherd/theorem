import { Selector as $, t } from 'testcafe';
import basePage from './basePage';

/**
 * search can exist on multiple pages so we make it a module
 * that we can then require on multiple pages
 */
const searchModule = {
  box: $('#search_query_top'),
  searchBtn: $('.button-search'),
  results: $('.product-container'),
  noResultsMsg: $('.alert-warning'),

  /**
   * Search blog posts
   * @param  {string}
   */
  async forText(text) {
    await t
      .typeText(this.box, text)
      .click(this.searchBtn);
  }
}
export default {...basePage, ...searchModule}