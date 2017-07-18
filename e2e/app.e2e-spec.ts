import { Ng4IntlMobileInputPage } from './app.po';

describe('ng4-intl-mobile-input App', () => {
  let page: Ng4IntlMobileInputPage;

  beforeEach(() => {
    page = new Ng4IntlMobileInputPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
