import { MagentoHeadlessPage } from './app.po';

describe('magento-headless App', () => {
  let page: MagentoHeadlessPage;

  beforeEach(() => {
    page = new MagentoHeadlessPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
