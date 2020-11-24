import { Selector as $, t } from 'testcafe';
import basePage from './basePage';
import search from './searchModule';

const homePage = {
  url: 'index.php',
  // add modules
  search,

  indexDiv: $('#index'),
  featuredProducts: $('#homefeatured li'),
  addToCartBtns: $('.ajax_add_to_cart_button'),

  async addFeaturedProductToCart(index = 0) {
    await t
      .hover(this.featuredProducts.nth(index))
      .click(this.addToCartBtns.nth(index))
  }
}
export default {...basePage, ...homePage}