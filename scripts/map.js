// Initializes the Google Map with a marker at Calgary, Alberta
function initMap() {
    var myLatLng = {lat: 51.049, lng: -114.066};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Calgary, Alberta'
    });
}

// Loads the Google Maps JavaScript API asynchronously
function loadGoogleMapsAPI() {
    var script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBK3z5D1Dq_z7JngOl2gNIsIu02DoLXzeg&callback=initMap';
    script.async = true; 
    document.head.appendChild(script);
}

window.onload = loadGoogleMapsAPI;
