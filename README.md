# Udacity Nanodegree FeedReader

> 课程梗概：测试是一项重要的技能。有些开发人员使用 TDD 来进行日常开发，以保证软件质量。无论你的公司是否使用 TDD 进行开发，测试都是一项重要的技能。在这个项目中，你将学到如何使用 jasmine 来进行事件测试和 DOM 操作的测试等。

## 如何启动项目

 * 很简单，访问 [http://linesh.tw/frontend-nanodegree-feedreader][] 即可。或者：
 * 将项目下载到本地，并通过 `npm install -g http-server && http-server -c-1 -o` 在浏览器中启动本项目。这样做，你需要[先安装一个全局的 npm][Installing npm]

## Tasking list

Review the Feed Reader Testing [Project Rubric](https://review.udacity.com/#!/projects/3442558598/rubric).

1. [x] Take the JavaScript Testing [course](https://www.udacity.com/course/ud549)
2. [x] Download the [required project assets](http://github.com/udacity/frontend-nanodegree-feedreader).
3. [x] Review the functionality of the application within your browser.
4. [x] Explore the application's HTML (**./index.html**), CSS (**./css/style.css**) and JavaScript (**./js/app.js**) to gain an understanding of how it works.
5. [x] Explore the Jasmine spec file in **./jasmine/spec/feedreader.js** and review the [Jasmine documentation](http://jasmine.github.io).
6. [x] Edit the `allFeeds` variable in **./js/app.js** to make the provided test fail and see how Jasmine visualizes this failure in your application.
7. [x] Return the `allFeeds` variable to a passing state.
8. [x] Write a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
9. [x] Write a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
10. [x] Write a new test suite named `"The menu"`.
11. [x] Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
12. [x] Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
13. [x] Write a test suite named `"Initial Entries"`.
14. [x] Write a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
15. [x] Write a test suite named `"New Feed Selection"`.
16. [x] Write a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.
17. [x] No test should be dependent on the results of another.
18. [x] Callbacks should be used to ensure that feeds are loaded before they are tested.
19. [x] Implement error handling for undefined variables and out-of-bound array access.
20. [x] When complete - all of your tests should pass.
21. [x] Write a README file detailing all steps required to successfully run the application. If you have added additional tests (for Udacious Test Coverage),  provide documentation for what these future features are and what the tests are checking for.

---

[http://linesh.tw/frontend-nanodegree-feedreader]: http://linesh.tw/frontend-nanodegree-feedreader
[Installing npm]: https://nodejs.org/en/download/package-manager/