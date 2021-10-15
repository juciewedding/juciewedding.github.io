var center = SMap.Coords.fromWGS84(18.4928969, 49.7533989);
var m = new SMap(JAK.gel("map"), center, 13);
m.addDefaultLayer(SMap.DEF_BASE).enable();
m.addDefaultControls();

var layer = new SMap.Layer.Marker();
m.addLayer(layer);
layer.enable();

var options = {};
var marker = new SMap.Marker(center, "myMarker", options);
layer.addMarker(marker);