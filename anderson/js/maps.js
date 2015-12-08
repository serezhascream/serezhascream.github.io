$(function () {
    var maps = {
        moscow: {
            centerX: 55.76,
            centerY: 37.64,
            zoom: 12,
            cafes: {
                coordX: 55.76,
                coordY: 37.64,
                bal_hint: 'Кафе1',
                bal_content: 'Описание кафе'
            }
        }
    }
    ymaps.ready(init);
    var myMap,
        myPlacemark,
        myPlacemark1,
        myPlacemark2,
        myPlacemark3,
        myPlacemark4;

    function init(){  
        myMap = new ymaps.Map("map", {
            center: [55.76, 37.64],
            zoom: 11
        });

        myPlacemark = new ymaps.Placemark([55.76, 37.64], { 
            hintContent: 'Кафе1', 
            balloonContent: 'С игровой' 
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/baloon_playroom.png',
            iconImageSize: [35, 45],
        });

        myPlacemark1 = new ymaps.Placemark([55.84623922518057,37.544502057617194], { 
            hintContent: 'Кафе2', 
            balloonContent: 'С игровой' 
        }, {
            iconLayout: 'default#imageWi',
            iconImageHref: 'img/baloon_store.png',
            iconImageSize: [35, 45],
        });

        myPlacemark2 = new ymaps.Placemark([55.785056987885454,37.519096173828125], { 
            hintContent: 'Кафе3', 
            balloonContent: 'С игровой' 
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/baloon_candyshop.png',
            iconImageSize: [35, 45],
        });

        myPlacemark3 = new ymaps.Placemark([55.69964664562112,37.579864301269545], { 
            hintContent: 'Кафе4', 
            balloonContent: 'С игровой' 
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/baloon_store.png',
            iconImageSize: [35, 45],
        });

        myPlacemark4 = new ymaps.Placemark([55.749250110745365,37.58982066113282], { 
            hintContent: 'Кафе5', 
            balloonContent: 'С игровой' 
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/baloon_playroom.png',
            iconImageSize: [35, 45],
        });

        myMap.geoObjects.add(myPlacemark);
        myMap.geoObjects.add(myPlacemark1);
        myMap.geoObjects.add(myPlacemark2);
        myMap.geoObjects.add(myPlacemark3);
        myMap.geoObjects.add(myPlacemark4);
    }
});