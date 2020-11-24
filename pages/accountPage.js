import { Selector as $, t } from 'testcafe';
import basePage from './basePage';

const accountPage = {
  url: 'index.php?controller=my-account',
  myAccount: $('#my-account')
}
export default {...basePage, ...accountPage}