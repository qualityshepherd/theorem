import accountPage from '../pages/accountPage';
import { user } from '../data/roles';

fixture `Sign In`;

test('should sign into Automation Practice', async t => {
  await t
    .useRole(user)
    .expect(accountPage.pageHeading.exists).ok();
});
