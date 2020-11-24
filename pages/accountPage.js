import { Selector as $, t } from 'testcafe';
import basePage from './basePage';

const accountPage = {
  url: 'index.php?controller=my-account',
  pageHeading: $('h1.page-heading')
}
export default {...basePage, ...accountPage}