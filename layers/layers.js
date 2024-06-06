var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BiosolidsDrytons_1 = new ol.format.GeoJSON();
var features_BiosolidsDrytons_1 = format_BiosolidsDrytons_1.readFeatures(json_BiosolidsDrytons_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BiosolidsDrytons_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BiosolidsDrytons_1.addFeatures(features_BiosolidsDrytons_1);
var lyr_BiosolidsDrytons_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BiosolidsDrytons_1, 
                style: style_BiosolidsDrytons_1,
                popuplayertitle: "Biosolids (Dry tons)",
                interactive: true,
    title: 'Biosolids (Dry tons)<br />\
    <img src="styles/legend/BiosolidsDrytons_1_0.png" /> 8 - 40<br />\
    <img src="styles/legend/BiosolidsDrytons_1_1.png" /> 40 - 70<br />\
    <img src="styles/legend/BiosolidsDrytons_1_2.png" /> 70 - 116<br />\
    <img src="styles/legend/BiosolidsDrytons_1_3.png" /> 116 - 201<br />\
    <img src="styles/legend/BiosolidsDrytons_1_4.png" /> 201 - 3487<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_BiosolidsDrytons_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_BiosolidsDrytons_1];
lyr_BiosolidsDrytons_1.set('fieldAliases', {'NAME': 'NAME', 'Biosolids': 'Biosolids', });
lyr_BiosolidsDrytons_1.set('fieldImages', {'NAME': 'TextEdit', 'Biosolids': 'TextEdit', });
lyr_BiosolidsDrytons_1.set('fieldLabels', {'NAME': 'inline label - visible with data', 'Biosolids': 'inline label - visible with data', });
lyr_BiosolidsDrytons_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});