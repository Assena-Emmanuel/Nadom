<template>
    <div id="map-main">
        <GoogleMap
            api-key=""
            style="width: 100%; height: 100%"
            :center="center"
            :zoom="15"
            >
            <Marker :options="{ position: center }" />
        </GoogleMap>
    </div>
</template>

<script setup>

import { GoogleMap, Marker } from 'vue3-google-map'
const center = { lat: 48.866024, lng: 2.340041 }

</script>
