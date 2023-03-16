require(['gitbook', 'jQuery'], function(gitbook, $) {
  function init() {
    var homePageEl = document.querySelector('[data-level="1.1"] a');
    if (homePageEl) {
      if (!/index\.html$/.test(homePageEl.href)) {
        homePageEl.href = homePageEl.href + 'index.html';
      }
    }
    let homePageEls = document.querySelectorAll('[href="../"]');
    homePageEls.forEach(urlEl => {
      if (!/index\.html$/.test(urlEl.href)) {
        urlEl.href = urlEl.href + 'index.html';
      }
    })
  }
  var isFileLink = false;
  var preHtmlConfig = {}
  gitbook.events.bind('start', function (e, config) {
    if (config['pre-html']) {
      preHtmlConfig = config['pre-html']
    }
  });
  // page.change 拿不到 config 信息，需要在start事件中拿
  gitbook.events.bind('page.change', function () {
    isFileLink = preHtmlConfig['file-link'];
    if (isFileLink ) {
      init()
    }
  });
})