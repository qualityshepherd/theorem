import homePage from '../pages/homePage';
import cartPage from '../pages/cartPage';
import { user } from '../data/roles';

fixture `Checkout`.beforeEach(async t => {
  await t.useRole(user);
  await homePage.goto();
});

test('should check out successfully', async t => {
  await homePage.addFeaturedProductToCart();
  await cartPage.goto();
  await cartPage.checkout();

  // FUTURE: make assert more robust... eg. verify order ID?
  await t.expect(cartPage.orderSuccessMsg.visible).ok();
});
