/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
  /* This is our first test suite - a test suite just contains
   * a related set of tests. This suite is all about the RSS
   * feeds definitions, the allFeeds variable in our application.
   */
  describe('RSS Feeds', function () {
    /* This is our first test - it tests to make sure that the
     * allFeeds variable has been defined and that it is not
     * empty. Experiment with this before you get started on
     * the rest of this project. What happens when you change
     * allFeeds in app.js to be an empty array and refresh the
     * page?
     */
    it('are defined', function () {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });

    it('all elements in allFeeds should have a url property', () => {
      const expected = [
        'http://blog.udacity.com/feed',
        'http://feeds.feedburner.com/CssTricks',
        'http://feeds.feedburner.com/html5rocks',
        'http://feeds.feedburner.com/udacity-linear-digressions'
      ];
      allFeeds.forEach((feed, i) => {
        expect(feed.url).not.toBeUndefined();
        expect(feed.url).toBe(expected[i]);
      });
    });

    it('all elements in allFeeds should have a name property', () => {
      const expected = [
        'Udacity Blog',
        'CSS Tricks',
        'HTML5 Rocks',
        'Linear Digressions'
      ];
      allFeeds.forEach((feed, i) => {
        expect(feed.name).not.toBeUndefined();
        expect(feed.name).toBe(expected[i]);
      })
    })
  });

  // TODO: [Linesh][5/25/17] Update somewhere of customizing todolist in WebStorm. online editor: http://regexr.com/
  // TODO: [Linesh][5/25/17] not a good thing that test actually affects production code
  // TODO: [Linesh][5/25/17] add Udacity eslint configuration so that it can be reused anywhere in the project and reviews
  describe('The menu', () => {
    it('should be hidden by default', () => {
      const menuHidden = $('body').hasClass('menu-hidden');

      expect(menuHidden).toBe(true);
    });

    it('should appear when the menu icon is clicked', (done) => {
      const menuIcon = $('.menu-icon-link')[0];

      menuIcon.click();
      expect($('body').hasClass('menu-hidden')).toBe(false);

      menuIcon.click();
      expect($('body').hasClass('menu-hidden')).toBe(true);

      done();
    })
  })

  // TODO: [Linesh][5/25/17] no dependency injection, all data are prepared inside the production code, which is not good for testing
  describe('Initial Entries', () => {
    beforeEach((done) => {
      loadFeed(0, done)
    })

    // TODO: [Linesh][5/25/17] figure out why done() should be called inside both beforeEach and after expectation
    it('should have at least a single .entry element within the .feed container', (done) => {
      const feedContainer = $('.feed');
      const entryElements = feedContainer.children('.entry-link');

      expect(entryElements.length).toBeGreaterThan(0);
      done()
    });

    it('should set the header title when asynchronous call is done', (done) => {
      const headerTitle = $('.header-title');

      expect(headerTitle).not.toBeUndefined();
      expect(headerTitle.text()).toBe('Udacity Blog');
      done()
    })
  })

  describe('New Feed Selection', () => {

  })

  /* TODO: Write a test that ensures when a new feed is loaded
   * by the loadFeed function that the content actually changes.
   * Remember, loadFeed() is asynchronous.
   */
}());
