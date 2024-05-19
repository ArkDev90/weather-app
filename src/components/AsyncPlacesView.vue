<template>
    <div class="flex flex-col items-center  ">
        <div class="w-auto md:w-1/2  overflow-hidden rounded-lg shadow-lg dark:bg-gray-50 dark:text-gray-800">
            <div class="p-4 relative">
                <h3 for="price" class="block text-sm font-medium leading-6 text-gray-900 pb-2"><b>Search Nearby</b></h3>
                <select v-model="categoryQuery" @change="getNearbyPlaces"
                    class="block w-full rounded-md py-1.5 pl-2 pr-20">
                    <option selected disabled value="">
                        Select Category
                    </option>
                    <option v-for="category in categoryList" :value="category.code">
                        {{ category.name }}
                    </option value="commercial.shopping_mall">


                </select>
            </div>

            <div class="p-4 mb-8 relative">
                <ol v-if="nearbyPlaces" class="divide-y divide-blue-200">
                    <p v-if="nearbyPlaces.length == 0" class=""><i>Nothing Found</i></p>
                    <li v-for="places in nearbyPlaces">
                        <a target="_blank"
                            :href="`https://www.google.com/maps/search/?api=1&query=${places.properties.lat}%2C${places.properties.lon}`">
                            <b>{{
                                places.properties.address_line1 }}</b>
                        </a>
                        <p>
                            {{
                                places.properties.suburb + ", " + places.properties.street + ", " +
                                places.properties.district }}</p>
                    </li>
                </ol>

                <p v-else class="animate-pulse">Loading Places...</p>
            </div>

        </div>

    </div>
</template>

<script setup>
import axios from '@/axios';
import { ref } from 'vue';
import { useRoute } from 'vue-router';


const route = useRoute();
const categoryQuery = ref("")


const cityData = ref([]);
const nearbyPlaces = ref([]);



const categoryList = [
    { "name": "Cafe", "code": "catering.cafe" },
    { "name": "Hospital", "code": "healthcare.hospital" },
    { "name": "Hotel", "code": "accommodation.hotel" },
    { "name": "Mall", "code": "commercial.shopping_mall" },
    { "name": "Museum", "code": "entertainment.museum" },
    { "name": "Restaurant", "code": "catering.restaurant" },
    { "name": "School", "code": "education.school" },
    { "name": "Zoo", "code": "entertainment.zoo" }];

const getCityDetails = async () => {

    cityData.value = await axios.get(`/geo?lat=${route.query.lat}&lon=${route.query.lon}`)
    return
}



await getCityDetails();



const getNearbyPlaces = async () => {

    nearbyPlaces.value = null;

    const placesData = await axios.get(`/places?cat=${categoryQuery.value}&id=${cityData.value.data.results[0].place_id}`)
    nearbyPlaces.value = placesData.data.features;
    return

}





</script>
