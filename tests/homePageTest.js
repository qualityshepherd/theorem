import homePage from '../pages/homePage';

fixture `Home Page`.beforeEach(async t => {
  await homePage.goto();
});

test('should display', async t => {
  await t.expect(homePage.indexDiv.visible).ok();
});

