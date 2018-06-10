//Custom last fm goodness to get one recent track
	$.getJSON("http://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=defsamm&api_key=5b801a66d1a34e73b6e563afc27ef06b&limit=2&nowplaying=false&format=json&callback=?", function(data) {
		var html = '';
		var counter = 1;
		$.each(data.recenttracks.track, function(i, item) {
			if(counter == 1) {
			html += 'Currently listening to: <span><a href="' + item.url + '" target="_blank">' + item.name + '</a> - ' + item.artist['#text'] + '</span>';
			}
			counter++
		});

		$('.listening-to').append(html);

	});