var map =
    L.map('my-map').setView([40.731389,-73.992748], 11);
    // L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}.{ext}', {
  	// attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  	// subdomains: 'abcd',
  	// minZoom: 0,
  	// maxZoom: 20,
  	// ext: 'png'}).addTo(map);

    L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_nolabels/{z}/{x}/{y}.png', {
    	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
    	subdomains: 'abcd',
    	maxZoom: 19,
    }).addTo(map);

var myRenderer = L.canvas({ padding: 0.5 });

//Finance
var financeArray = []  // empty array
finance_data.forEach(function(financeObject) {
  var latlon = [financeObject.Y, financeObject.X];
  var options = {
    renderer: myRenderer,
    radius: 2,
    stroke: false,
    fillColor: financeObject.color,
  };
financeArray.push(L.circleMarker(latlon, options))
  });

//Healthcare
var healthcareArray = []  // empty array
healthcare_data.forEach(function(healthcareObject) {
  var latlon = [healthcareObject.Y, healthcareObject.X];
  var options = {
    renderer: myRenderer,
    radius: 2,
    stroke: false,
    fillColor: healthcareObject.color,
  };
healthcareArray.push(L.circleMarker(latlon, options))
  });

  //Accomodation
  var accomodationArray = []  // empty array
  accomodation_data.forEach(function(accomodationObject) {
    var latlon = [accomodationObject.Y, accomodationObject.X];
    var options = {
      renderer: myRenderer,
      radius: 2,
      stroke: false,
      fillColor: accomodationObject.color,
    };
  accomodationArray.push(L.circleMarker(latlon, options))
    });

    //Education
    var educationArray = []  // empty array
    education_data.forEach(function(educationObject) {
      var latlon = [educationObject.Y, educationObject.X];
      var options = {
        renderer: myRenderer,
        radius: 2,
        stroke: false,
        fillColor: educationObject.color,
      };
    educationArray.push(L.circleMarker(latlon, options))
      });

var finance = LayerGroup = L.layerGroup(financeArray);
var healthcare = LayerGroup = L.layerGroup(healthcareArray).addTo(map);
var accomodation = LayerGroup = L.layerGroup(accomodationArray);
var education = LayerGroup = L.layerGroup(educationArray);

var Sectorslayer = {
  "Healthcare": healthcare,
  "Finance": finance,
  "Food Service and Accomodation": accomodation,
  "Education": education
};

L.control.layers(Sectorslayer,null,{collapsed:false}).addTo(map);
