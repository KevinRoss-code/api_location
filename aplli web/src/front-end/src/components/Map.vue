<template>
  <h2>Garages de réparation à proximité</h2>
  <div v-if="!formSubmitted">
  <GMapMap :center="center" :zoom="15" map-type-id="terrain" style="@media (min-width: 300px) {
    width: 700px; height: 500px; margin-bottom: 10%; margin-top: 10%;" 
  }>
     <GMapMarker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" :draggable="true"
        @click="openMarker(m.id)" >
          <GMapInfoWindow
          :closeclick="true"
          @closeclick="openMarker(null)"
          :opened="openedMarkerID === m.id"
      >
        <div> {{ m.contextmenu }} </div>
      </GMapInfoWindow>
        </GMapMarker>
  </GMapMap>
</div>
</template>

<script>
const google = window.google;
const map = map;
  export default {
  data() {
    return {
      openedMarkerID: null,
      center: { lat: null, lng: null },
      markers: []
    };
  },computed: {
    google: () => google // also make it available in template, as `google`
  },
  props: {
    formSubmitted: {
      type: Boolean,
      required: true
    }
  },
  mounted() {
    navigator.geolocation.getCurrentPosition((position) => {
      const userLatLng = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      this.center = userLatLng

      // Rechercher les garages à proximité
      const service = new google.maps.places.PlacesService(map);
      service.nearbySearch(
        {
          location: { userLatLng },
          radius: 5000, // 5 km
          type: ["car_repair", "car_rental"], // type de lieu
        },
        (results, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            // Afficher les marqueurs sur la carte
            results.forEach((result) => {
              const marker = new google.maps.Marker({
                map,
                position: result.geometry.location,
                title: result.name,
              });
              return marker
            });
          }
        }
      );

      
    });
  },
  methods: {
    openMarker(id) {
       this.openedMarkerID = id
    },
  }
};
</script>

<style>
@media (min-width: 300px){
  h2{
  text-align: center;
  color: rgb(29, 3, 3);
  font-size: 1.5em;
  font-family: cursive;
}
}
</style>
