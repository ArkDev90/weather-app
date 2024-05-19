<template>
    <div class="grid sm:grid-cols-2  gap-4">
        <div v-for="city in cityData">
            <CityCard :city="city" />
        </div>
    </div>

</template>

<script setup>
import axios from '@/axios';

import CityCard from './CityCard.vue';
import { onMounted, ref } from 'vue';


const listCities = [
    { "name": "Tokyo", "lat": 35.6895, "lon": 139.6917 },
    { "name": "Yokohama", "lat": 35.4437, "lon": 139.6380 },
    { "name": "Kyoto", "lat": 35.021041, "lon": 135.7556075 },
    { "name": "Osaka", "lat": 34.6937, "lon": 135.5023 },
    { "name": "Sapporo", "lat": 43.0618, "lon": 141.3545 },
    { "name": "Nagoya", "lat": 35.1851045, "lon": 136.8998438 }];

const cityData = ref([]);

const getDetailsCities = async () => {
    const request = []
    listCities.forEach((city) => {
        request.push(axios.get(`/weather?lat=${city.lat}&lon=${city.lon}`));
    });
    cityData.value = await Promise.all(request);

}

await getDetailsCities();





</script>
