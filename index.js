function homeLocation(position) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showLocation1)
    }
}

function geoLocation(position) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showLocation2)

    }
}

function deg2rad(deg) {
    return deg * (Math.PI / 180);
}

function haversineDistance(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1); // deg2rad below
    var dLon = deg2rad(lon2 - lon1);
    var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c * 0.621371; // Distance in miles
    return d;
}

function showLocation1(position) {
    window.homelat = position.coords.latitude
    window.homelong = position.coords.longitude
    alert(`home position determined!: home latitude: ${homelat} home longitude: ${homelong}`)
}

function showLocation2(position) {
    window.newlat = position.coords.latitude
    window.newlong = position.coords.longitude
    alert(`position determined!: home latitude: ${homelat} home longitude ${homelong}`)
    var distance = haversineDistance(homelat, homelong, newlat, newlong);
    document.getElementById('geodisplay').innerHTML = `the distance from your home: ${distance}`;
}