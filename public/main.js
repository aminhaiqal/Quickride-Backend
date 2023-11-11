if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
        const location = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };
        console.log(location);
    });
} else {
    console.log('Geolocation is not supported by this browser.');
}