import { Selector as $, t } from 'testcafe';
import basePage from './basePage';
import search from './searchModule';

const categoryPage = {
  url: 'index.php',
  women: $('[title="Women"]'),
  dresses: $('[title="Dresses"]'),
  tshirts: $('[title="T-shirts"]'),
  products: $('.product-container'),

  async getNumberOfProducts() {
    return await this.products.count;
  },

  async gotoCategory(id) {
    await this.goto(`?id_category=${id}&controller=category`)
  }
}
export default {...basePage, ...categoryPage}