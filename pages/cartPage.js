import { Selector as $, t } from 'testcafe';
import basePage from './basePage';

const cartPage = {
  url: 'index.php?controller=order',

  // the series of checkout buttons should probably be organized a bit better
  // to differentiate them and make them easier to reason about...
  standardCheckoutBtn: $('.standard-checkout'), // 1st proceed to checkout btn
  proceedTocheckoutBtn: $('[name="processAddress"]'), // step=1
  termsCheckbox: $('#cgv'), // order
  payByCheckBtn: $('.cheque'), // shipping
  confirmOrderBtn: $('#cart_navigation > button'), // payment
  orderSuccessMsg: $('.alert-success'), // profit!

  async checkout() {
    await this.standardCheckoutBtn.visible;
    await t
      .click(this.standardCheckoutBtn) // main cart page
      .click(this.proceedTocheckoutBtn) // step=1
      .click(this.termsCheckbox)
      .click(this.standardCheckoutBtn)
      .click(this.payByCheckBtn)
      .click(this.confirmOrderBtn)
  }
}
export default {...basePage, ...cartPage}




