import homePage from '../pages/homePage';
import categoryPage from '../pages/categoryPage';

// FUTURE: get these mappings from an API?
const women = 3;
const dresses = 8;
const tshirts = 5;

fixture `Categories`.beforeEach(async t => {
  await homePage.goto();
});

test('should browse by women', async t => {
  await categoryPage.gotoCategory(women)

  await t.expect(await categoryPage.getNumberOfProducts()).gt(0);
});

test('should browse by dresses', async t => {
  await categoryPage.gotoCategory(dresses)

  await t.expect(await categoryPage.getNumberOfProducts()).gt(0);
});

test('should browse by t-shirts', async t => {
  await categoryPage.gotoCategory(tshirts)

  await t.expect(await categoryPage.getNumberOfProducts()).gt(0);
});