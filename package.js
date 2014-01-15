Package.describe({
  summary: "Scrollable for Meteor"
});

Package.on_use(function (api) {
  'use strict';

  api.use('jqueryui', 'client');

  api.add_files('scrollable/jquery.scola.scrollable.js', 'client');
  api.add_files('mousewheel/jquery.mousewheel.js', 'client');
  api.add_files('resize/jquery.ba-resize.js', 'client');
});
