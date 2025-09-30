var wms_layers = [];


        var lyr_SATELITE_0 = new ol.layer.Tile({
            'title': 'SATELITE',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_NARANJOS_1 = new ol.format.GeoJSON();
var features_NARANJOS_1 = format_NARANJOS_1.readFeatures(json_NARANJOS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NARANJOS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NARANJOS_1.addFeatures(features_NARANJOS_1);
var lyr_NARANJOS_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NARANJOS_1, 
                style: style_NARANJOS_1,
                popuplayertitle: 'NARANJOS',
                interactive: true,
    title: 'NARANJOS<br />\
    <img src="styles/legend/NARANJOS_1_0.png" /> <br />\
    <img src="styles/legend/NARANJOS_1_1.png" /> <br />\
    <img src="styles/legend/NARANJOS_1_2.png" /> <br />' });
var group_PDF_CALLE_DIM = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'PDF_CALLE_DIM'});
var group_PDF_CALLE_TEXT = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'PDF_CALLE_TEXT'});
var group_PDF_LOTE = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'PDF_LOTE'});
var group_PDF_MAN_TEXT = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'PDF_MAN_TEXT'});
var group_PDF_PLAZAYEDIFPUBL = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'PDF_PLAZA Y EDIF PUBL'});
var group_PDF_POLIGONO = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'PDF_POLIGONO'});
var group_PDF_Text = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'PDF_Text'});
var group_PDF_UTM = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'PDF_UTM'});

lyr_SATELITE_0.setVisible(true);lyr_NARANJOS_1.setVisible(true);
var layersList = [lyr_SATELITE_0,lyr_NARANJOS_1];
lyr_NARANJOS_1.set('fieldAliases', {'ID': 'ID', 'ESTADO': 'ESTADO', });
lyr_NARANJOS_1.set('fieldImages', {'ID': 'TextEdit', 'ESTADO': 'TextEdit', });
lyr_NARANJOS_1.set('fieldLabels', {'ID': 'no label', 'ESTADO': 'no label', });
lyr_NARANJOS_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});