setupMap();

function setupMap(){
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2tpbnQ5NCIsImEiOiJjazY5YTVxMjgwN3cxM2xrOWF2aWRwaGg3In0.Mp4PaB4tMi6N78gE4WtyKw';

    var map = new mapboxgl.Map({
      container: "map",
      style: 'mapbox://styles/skint94/ck6975vzs1znl1iqhs3xo2b43',
      center: [-0.12764, 51.503396],
      zoom: 15,
      boxZoom: true,
      positionOptions: {
        enableHighAccuracy: true,
    }
  });


  map.addControl(new mapboxgl.NavigationControl({
    showCompass: true,
    showZoom: true
  }), "top-right");

  var marker = new mapboxgl.Marker()
  .setLngLat([-0.12764, 51.503396])
  .addTo(map);
}