{
  function initMap() {
    (map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 48.85, lng: 2.5 },
      zoom: 5,
      disableDefaultUI: true,
      scrollwheel: false,
      styles: [
        {
          featureType: "all",
          elementType: "labels.text.fill",
          stylers: [
            { saturation: 36 },
            { color: "#000000" },
            { lightness: 40 },
          ],
        },
        {
          featureType: "all",
          elementType: "labels.text.stroke",
          stylers: [
            { visibility: "off" },
            { color: "#000000" },
            { lightness: 16 },
          ],
        },
        {
          featureType: "all",
          elementType: "labels.icon",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "administrative",
          elementType: "geometry.fill",
          stylers: [{ color: "#000000" }, { lightness: 20 }],
        },
        {
          featureType: "administrative",
          elementType: "geometry.stroke",
          stylers: [{ color: "#000000" }, { lightness: 17 }, { weight: 1.2 }],
        },
        {
          featureType: "landscape",
          elementType: "geometry",
          stylers: [{ color: "#000000" }, { lightness: 20 }],
        },
        {
          featureType: "poi",
          elementType: "geometry",
          stylers: [{ color: "#000000" }, { lightness: 21 }],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.fill",
          stylers: [{ color: "#000000" }, { lightness: 17 }],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [{ color: "#000000" }, { lightness: 29 }, { weight: 0.2 }],
        },
        {
          featureType: "road.arterial",
          elementType: "geometry",
          stylers: [{ color: "#000000" }, { lightness: 18 }],
        },
        {
          featureType: "road.local",
          elementType: "geometry",
          stylers: [{ color: "#000000" }, { lightness: 16 }],
        },
        {
          featureType: "transit",
          elementType: "geometry",
          stylers: [{ color: "#000000" }, { lightness: 19 }],
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [{ color: "#000000" }, { lightness: 17 }],
        },
      ],
    })),
      (paris = new google.maps.Marker({
        position: { lat: 48.85, lng: 2.32 },
        map: map,
        animation: google.maps.Animation.DROP,
        icon: "images/dest/top.svg",
      })),
      (zurich = new google.maps.Marker({
        position: { lat: 47.33, lng: 8.52 },
        map: map,
        animation: google.maps.Animation.DROP,
        icon: "images/dest/topRight.svg",
      }));
  }
}
