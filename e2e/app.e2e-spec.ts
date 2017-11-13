import { ReleaseTheKrakenPage } from './app.po';

describe('release-the-kraken App', function() {
  let page: ReleaseTheKrakenPage;

  beforeEach(() => {
    page = new ReleaseTheKrakenPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
