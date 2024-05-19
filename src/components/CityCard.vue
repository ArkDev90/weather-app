<template>

    <div class="max-w-xs overflow-hidden rounded-lg shadow-lg dark:bg-gray-50 dark:text-gray-800 cursor-pointer"
        @click="cityDetails(city.data.coord.lat, city.data.coord.lon)">
        <div class="flex items-end justify-end h-32 p-4 dark:bg-gray-500 bg-center bg-cover "
            :style="{ backgroundImage: `url('${imageUrl}')` }">

            <p
                class="px-2 py-1 text-sm tracking-widest dark:text-gray-800 uppercase dark:bg-gray-100 bg-opacity-75 rounded shadow-lg">
                {{ city.data.name }}</p>
        </div>
        <div class="flex justify-between p-4">
            <div class="flex flex-col flex-1 gap-4">
                <div class="flex justify-between">
                    <div class="flex gap-2">
                        <span class="text-5xl font-semibold"> {{ Math.round(city.data.main.temp) }}°</span>

                    </div>
                    <div class="w-12 h-12 fill-current shrink-0 bg-sky-300 rounded-lg">
                        <img :src="iconUrl">
                    </div>
                </div>
                <p class="text-sm">Feels like {{ Math.round(city.data.main.feels_like) + "° with " +
                    city.data.weather[0].description }}

                </p>
            </div>
            <div class="text-sm leading-loose">
                <div class="flex items-center"></div>
            </div>
        </div>
        <div class="flex items-center justify-between gap-8 p-4 border-t dark:text-gray-600 dark:border-gray-300">
            <div class="flex items-center space-x-1">
                <span class="font-bold">{{ city.data.main.humidity }}%</span>
                <span class="text-sm"> Humidity</span>
            </div>
            <div class="flex items-center space-x-1">
                <span class="font-bold">{{ city.data.wind.speed }}</span>
                <span class="text-sm">m/s winds</span>
            </div>


        </div>
    </div>


</template>

<script setup>
import { useRouter } from 'vue-router';

defineProps({
    city: {
        type: Object,
        default: () => { },
    },
    iconUrl: {
        default: (props) => "https://openweathermap.org/img/wn/" + props.city.data.weather[0].icon + ".png",
        type: String
    },
    imageUrl: {
        default: (props) => "/cities/" + props.city.data.name + ".jpg",
        type: String
    },
})

const router = useRouter();
const cityDetails = (lat, lon) => {
    console.log(lat, lon);
    router.push({
        name: "city",
        query: {
            lat: lat,
            lon: lon
        }
    })
}
</script>