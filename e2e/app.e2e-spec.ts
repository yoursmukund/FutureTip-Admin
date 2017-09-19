import { FutureTipAdminPage } from './app.po';

describe('future-tip-admin App', () => {
  let page: FutureTipAdminPage;

  beforeEach(() => {
    page = new FutureTipAdminPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
