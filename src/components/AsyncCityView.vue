<template>
    <div class="flex flex-col items-center  text-secondary py-12 ">
        <div class="w-auto md:w-1/2  overflow-hidden rounded-lg shadow-lg dark:bg-gray-50 dark:text-gray-800">
            <div class="flex items-end justify-end h-32 p-4 dark:bg-gray-500 bg-center bg-cover "
                :style="{ backgroundImage: `url('/cities/${weatherData.name}.jpg')` }">

                <h1 class=" px-2 py-1 tracking-widest  text-secondary dark:bg-gray-100 bg-opacity-75 rounded shadow-lg">
                    <p class="text-5xl uppercase">{{ weatherData.name }}</p>
                    <span>as of {{
                        new Date(weatherData.dt * 1000).toLocaleDateString(
                            "en-us",
                            {
                                weekday: "short",
                                day: "2-digit",
                                month: "long",
                            }
                        )
                    }}
                        {{
                            new Date(weatherData.dt * 1000).toLocaleTimeString(
                                "en-us",
                                {
                                    timeStyle: "short",
                                }
                            )
                        }}</span>
                </h1>
            </div>
            <div class="flex place-content-center p-4">
                <div class="flex place-content-center flex-col  gap-4 ">
                    <div class="flex  md:place-content-center justify-between">
                        <div class="flex gap-2">
                            <span class="text-8xl font-semibold text-secondary">{{ Math.round(weatherData.main.temp)
                                }}°</span>

                        </div>
                        <div class="  fill-current shrink-0rounded-lg">
                            <img class="w-[75px] h-auto"
                                :src="`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`">
                        </div>

                    </div>
                    <p class=" text-sm">Feels like {{ Math.round(weatherData.main.feels_like) + "° with " +
                        weatherData.weather[0].description }}
                    </p>
                </div>

            </div>

            <div
                class="flex md:place-content-center justify-between gap-8 p-4 border-t dark:text-gray-600 dark:border-gray-300">

                <div class="flex items-center space-x-1">
                    <span class="font-bold">{{ weatherData.main.humidity }}%</span>
                    <span class="text-sm"> Humidity</span>
                </div>
                <div class="flex items-center space-x-1">
                    <span class="font-bold">{{ weatherData.wind.speed }}</span>
                    <span class="text-sm">m/s winds</span>
                </div>

            </div>
        </div>




    </div>

    <hr class="border-white border-opacity-10 border w-full" />


</template>

<script setup>
import axios from '@/axios';
import { useRoute } from 'vue-router';



const route = useRoute();
const getWeatherData = async () => {

    const WeatherData = await axios.get(`/weather?lat=${route.query.lat}&lon=${route.query.lon}`)
    return WeatherData.data;

}



const weatherData = await getWeatherData();

</script>
