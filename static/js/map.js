// static/js/map.js
let map;
let infoWindow;
function initMap() {
    // Coordenadas del centro del estado de Guanajuato
    const guanajuato = { lat: 21.0186, lng: -101.2591 };

    map = new google.maps.Map(document.getElementById('mapid'), {
        center: guanajuato,
        zoom: 7, // El nivel de zoom puede ajustarse para mostrar todo el estado
        styles: customMapStyle // Aplica aquí tus estilos personalizados
    });
    infoWindow = new google.maps.InfoWindow;

    // Coloca un marcador en el centro de Guanajuato
    const marker = new google.maps.Marker({
        position: guanajuato,
        map: map,
        title: 'Guanajuato'
    });

    // Intenta geolocalizar al usuario, si deseas esta funcionalidad
    // ...
    // Resto de tu código de geolocalización
    // ...
    
}

const customMapStyle = [
    // Quita o comenta la regla que oculta todo
    /* {
        "featureType": "all",
        "stylers": [{ "visibility": "off" }]
    }, */
    // Asegúrate de que los elementos que quieras mostrar estén con "visibility": "on"
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            { "visibility": "on" },
            { "color": "#e3e3e3" } // Elige el color de fondo para la tierra
        ]
    },
    // Agrega tus estilos personalizados para carreteras y otros elementos aquí
];

function initMap() {
    // Coordenadas del centro del estado de Guanajuato
    const guanajuato = { lat: 21.0186, lng: -101.2591 };

    // Inicializa el mapa
    map = new google.maps.Map(document.getElementById('mapid'), {
        center: guanajuato,
        zoom: 7,
        styles: customMapStyle
    });

    // Geolocalización del usuario
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            const userLocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            map.setCenter(userLocation);
            new google.maps.Marker({
                position: userLocation,
                map: map,
                title: "Tu ubicación"
            });
        }, function () {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // El navegador no soporta Geolocalización
        handleLocationError(false, infoWindow, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                          'Error: Falló la geolocalización.' :
                          'Error: Tu navegador no soporta geolocalización.');
    infoWindow.open(map);
}