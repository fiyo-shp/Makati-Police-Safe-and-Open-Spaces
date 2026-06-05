ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32651").setExtent([276445.081510, 1602984.665102, 298139.211231, 1613981.788172]);
var wms_layers = [];


        var lyr_Positronnolabelsretina_0 = new ol.layer.Tile({
            'title': 'Positron [no labels] (retina)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 4.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}@2x.png'
            })
        });
var format_MakatiBarangayBoundary_1 = new ol.format.GeoJSON();
var features_MakatiBarangayBoundary_1 = format_MakatiBarangayBoundary_1.readFeatures(json_MakatiBarangayBoundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32651'});
var jsonSource_MakatiBarangayBoundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MakatiBarangayBoundary_1.addFeatures(features_MakatiBarangayBoundary_1);
var lyr_MakatiBarangayBoundary_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MakatiBarangayBoundary_1, 
                style: style_MakatiBarangayBoundary_1,
                popuplayertitle: 'Makati Barangay Boundary',
                interactive: false,
                title: '<img src="styles/legend/MakatiBarangayBoundary_1.png" /> Makati Barangay Boundary'
            });
var format_SafeandOpenSpaces_2 = new ol.format.GeoJSON();
var features_SafeandOpenSpaces_2 = format_SafeandOpenSpaces_2.readFeatures(json_SafeandOpenSpaces_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32651'});
var jsonSource_SafeandOpenSpaces_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SafeandOpenSpaces_2.addFeatures(features_SafeandOpenSpaces_2);
var lyr_SafeandOpenSpaces_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SafeandOpenSpaces_2, 
                style: style_SafeandOpenSpaces_2,
                popuplayertitle: 'Safe and Open Spaces',
                interactive: true,
    title: 'Safe and Open Spaces<br />\
    <img src="styles/legend/SafeandOpenSpaces_2_0.png" /> Not Validated<br />\
    <img src="styles/legend/SafeandOpenSpaces_2_1.png" /> Validated<br />\
    <img src="styles/legend/SafeandOpenSpaces_2_2.png" /> <br />' });
var format_MakatiPoliceStationsandPrecincts_3 = new ol.format.GeoJSON();
var features_MakatiPoliceStationsandPrecincts_3 = format_MakatiPoliceStationsandPrecincts_3.readFeatures(json_MakatiPoliceStationsandPrecincts_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32651'});
var jsonSource_MakatiPoliceStationsandPrecincts_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MakatiPoliceStationsandPrecincts_3.addFeatures(features_MakatiPoliceStationsandPrecincts_3);
var lyr_MakatiPoliceStationsandPrecincts_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MakatiPoliceStationsandPrecincts_3, 
                style: style_MakatiPoliceStationsandPrecincts_3,
                popuplayertitle: 'Makati Police Stations and Precincts',
                interactive: true,
                title: '<img src="styles/legend/MakatiPoliceStationsandPrecincts_3.png" /> Makati Police Stations and Precincts'
            });

lyr_Positronnolabelsretina_0.setVisible(true);lyr_MakatiBarangayBoundary_1.setVisible(true);lyr_SafeandOpenSpaces_2.setVisible(true);lyr_MakatiPoliceStationsandPrecincts_3.setVisible(true);
var layersList = [lyr_Positronnolabelsretina_0,lyr_MakatiBarangayBoundary_1,lyr_SafeandOpenSpaces_2,lyr_MakatiPoliceStationsandPrecincts_3];
lyr_MakatiBarangayBoundary_1.set('fieldAliases', {'ADM4_EN': 'ADM4_EN', 'ADM4_PCODE': 'ADM4_PCODE', 'ADM4_REF': 'ADM4_REF', 'ADM3_EN': 'ADM3_EN', 'ADM3_PCODE': 'ADM3_PCODE', 'ADM2_EN': 'ADM2_EN', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'AREA_SQKM': 'AREA_SQKM', });
lyr_SafeandOpenSpaces_2.set('fieldAliases', {'brgy': 'brgy', 'city_mun': 'city_mun', 'quadrant': 'quadrant', 'validation': 'validation', 'area_sqm': 'area_sqm', 'sos_size': 'sos_size', 'sos_id': 'sos_id', });
lyr_MakatiPoliceStationsandPrecincts_3.set('fieldAliases', {'name': 'name', 'street': 'street', 'class': 'class', 'x_cent': 'x_cent', 'y_cent': 'y_cent', 'linkid': 'linkid', 'type': 'type', 'source': 'source', });
lyr_MakatiBarangayBoundary_1.set('fieldImages', {'ADM4_EN': 'TextEdit', 'ADM4_PCODE': 'TextEdit', 'ADM4_REF': 'TextEdit', 'ADM3_EN': 'TextEdit', 'ADM3_PCODE': 'TextEdit', 'ADM2_EN': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'AREA_SQKM': 'TextEdit', });
lyr_SafeandOpenSpaces_2.set('fieldImages', {'brgy': 'TextEdit', 'city_mun': 'TextEdit', 'quadrant': 'TextEdit', 'validation': 'TextEdit', 'area_sqm': 'TextEdit', 'sos_size': 'TextEdit', 'sos_id': 'TextEdit', });
lyr_MakatiPoliceStationsandPrecincts_3.set('fieldImages', {'name': 'TextEdit', 'street': 'TextEdit', 'class': 'TextEdit', 'x_cent': 'TextEdit', 'y_cent': 'TextEdit', 'linkid': 'Range', 'type': 'TextEdit', 'source': 'TextEdit', });
lyr_MakatiBarangayBoundary_1.set('fieldLabels', {'ADM4_EN': 'hidden field', 'ADM4_PCODE': 'no label', 'ADM4_REF': 'no label', 'ADM3_EN': 'no label', 'ADM3_PCODE': 'no label', 'ADM2_EN': 'no label', 'ADM2_PCODE': 'no label', 'ADM1_EN': 'no label', 'ADM1_PCODE': 'no label', 'ADM0_EN': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'AREA_SQKM': 'no label', });
lyr_SafeandOpenSpaces_2.set('fieldLabels', {'brgy': 'inline label - always visible', 'city_mun': 'hidden field', 'quadrant': 'hidden field', 'validation': 'inline label - always visible', 'area_sqm': 'inline label - always visible', 'sos_size': 'inline label - always visible', 'sos_id': 'hidden field', });
lyr_MakatiPoliceStationsandPrecincts_3.set('fieldLabels', {'name': 'inline label - always visible', 'street': 'inline label - always visible', 'class': 'inline label - visible with data', 'x_cent': 'hidden field', 'y_cent': 'hidden field', 'linkid': 'hidden field', 'type': 'hidden field', 'source': 'hidden field', });
lyr_MakatiPoliceStationsandPrecincts_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});