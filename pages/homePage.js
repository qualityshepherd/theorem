import { Selector as $, t } from 'testcafe';
import basePage from './basePage';

const homePage = {
  url: 'index.php',
  indexDiv: $('#index')
}
export default {...basePage, ...homePage}