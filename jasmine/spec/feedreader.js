/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */

/*global allFeeds loadFeed:true*/
$((() => {
  /* This is our first test suite - a test suite just contains
   * a related set of tests. This suite is all about the RSS
   * feeds definitions, the allFeeds variable in our application.
   */
  xdescribe('RSS Feeds', () => {
    /* This is our first test - it tests to make sure that the
     * allFeeds variable has been defined and that it is not
     * empty. Experiment with this before you get started on
     * the rest of this project. What happens when you change
     * allFeeds in app.js to be an empty array and refresh the
     * page?
     */
    it('are defined', () => {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });

    it('all elements in allFeeds should have a url property', () => {
      allFeeds.forEach((feed) => {
        expect(feed.url).not.toBeUndefined();
        expect(feed.url).toEqual(jasmine.any(String));
      });
    });

    it('all elements in allFeeds should have a name property', () => {
      const expected = [
        'Udacity Blog',
        'CSS Tricks',
        'HTML5 Rocks',
        'Linear Digressions',
      ];
      allFeeds.forEach((feed, i) => {
        expect(feed.name).not.toBeUndefined();
        expect(feed.name).toBe(expected[i]);
      });
    });
  });

  xdescribe('The menu', () => {
    const menuIcon = $('.menu-icon-link')[0];

    it('should be hidden by default', () => {
      const menuHidden = $('body').hasClass('menu-hidden');

      expect(menuHidden).toBe(true);
    });

    it('should always have a menu icon', () => {
      expect(menuIcon).not.toBeUndefined();
    });

    it('should toggle when the menu icon is clicked', () => {
      menuIcon.click();
      expect($('body').hasClass('menu-hidden')).toBe(false);

      menuIcon.click();
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });
  });

  describe('Initial Entries', () => {
    beforeEach((done) => {
      loadFeed(0, done);
    });

    it('should have at least one .entry element within the .feed container after the feeds loaded', () => {
      const entryElements = $('.feed .entry');

      expect(entryElements.length).toBeGreaterThan(0);
    });

    it('should set the header title when asynchronous call is done', () => {
      const headerTitle = $('.header-title');

      expect(headerTitle.text()).toBe('Udacity Blog');
    });

    afterEach((done) => {
      loadFeed(0, done);
    });
  });

  xdescribe('New Feed Selection', () => {
    beforeEach((done) => {
      loadFeed(1, done);
    });

    it('should update content after new feeds selected and loaded', (done) => {
      const cssFeeds = $('.feed a.entry-link');

      loadFeed(2, done);

      const html5Feeds = $('.feed a.entry-link');
      expect(html5Feeds).not.toBe(cssFeeds);
    });

    afterEach((done) => {
      loadFeed(0, done);
    });
  });
})());
