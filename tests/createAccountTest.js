import authenticationPage from '../pages/authenticationPage';
import accountPage from '../pages/accountPage';
import * as data from '../data/jabber';

fixture `Create Account`.beforeEach(async t => {
  await authenticationPage.goto();
});

test('should create a new account', async t => {
  await authenticationPage.createAccount(data.email);
  await authenticationPage.addAccountInfo(data);

  await t.expect(accountPage.myAccount.visible).ok();
});

