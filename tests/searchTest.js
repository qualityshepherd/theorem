import homePage from '../pages/homePage';
import { user } from '../data/roles';

fixture `Search`.beforeEach(async t => {
  await t.useRole(user);
  await homePage.goto();
});

test('should find results', async t => {
  await homePage.search.forText('dress');

  await t.expect(homePage.search.results.count).gt(0);
});

test('should display message when no results found', async t => {
  await homePage.search.forText('doesNotExist!!!!one!');

  await t.expect(homePage.search.noResultsMsg.visible).ok();
});
