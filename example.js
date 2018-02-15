var map =
    L.map('my-map').setView([40.713435,-73.971291], 12);
    L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}.{ext}', {
  	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  	subdomains: 'abcd',
  	minZoom: 0,
  	maxZoom: 20,
  	ext: 'png'}).addTo(map);


$.getJSON(
  "assets/jobworkers.geojson",
  function(json) {
    geoLayer = L.geoJson(json, {
      style: function(feature) {
        var mag = feature.properties.id;
        if (id = 10) {
          return {
            color: "red"
          };
        } else if (mag = 11) {
          return {
            color: "green"
          };
        } else if (mag = 20) {
          return {
            color: "red"
          };
        } else {
          return {
            color: "green"
          };
        }
      },

      pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng, {
          radius: Math.round(feature.properties.mag) * 3
        });
      }
    }).addTo(map);
  }
);
