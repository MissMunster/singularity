$('#mini-always-on-top').change((e) => {
  Emitter.fire('settings:set', {
    key: 'miniAlwaysOnTop',
    value: $(e.currentTarget).is(':checked'),
  });
});

if (Settings.get('miniAlwaysOnTop', false)) {
  $('#mini-always-on-top').attr('checked', 'checked');
} else {
  $('#mini-always-on-top').removeAttr('checked');
}

$('#mini-always-show-song-info').change((e) => {
  Emitter.fire('settings:set', {
    key: 'miniAlwaysShowSongInfo',
    value: $(e.currentTarget).is(':checked'),
  });
});

if (Settings.get('miniAlwaysShowSongInfo', false)) {
  $('#mini-always-show-song-info').attr('checked', 'checked');
} else {
  $('#mini-always-show-song-info').removeAttr('checked');
}
