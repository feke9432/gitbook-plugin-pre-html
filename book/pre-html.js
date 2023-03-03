require(['gitbook', 'jQuery'], function(gitbook, $) {
  function init() {
    var homePageEl = document.querySelector('[data-level="1.1"] a');
    if (homePageEl) {
      homePageEl.href = homePageEl.href + 'index.html';
    }
  }
  var isFileLink = false;
  gitbook.events.bind('start', function (e, config) {
    isFileLink = config['pre-html']['file-link'];
    if (isFileLink) {
      init()
    }
  });
  gitbook.events.bind('page.change', function () {
    if (isFileLink) {
      init()
    }
  });
})