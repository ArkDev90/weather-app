<template>
    <div class="pt-4 mb-8 relative">
        <Suspense>
            <AsyncCityView />
            <template #fallback>
                <div class="flex flex-col items-center  text-secondary py-12 ">
                    <p class="animate-pulse text-secondary">Loading Weather. Please wait....</p>
                </div>

            </template>
        </Suspense>
        <Suspense>
            <AsyncPlacesView />
            <template #fallback>
                <div class="flex flex-col items-center  text-secondary py-12 ">
                    <p class="animate-pulse text-secondary">Loading Places. Please wait....</p>
                </div>

            </template>
        </Suspense>

    </div>
</template>

<script setup>
import AsyncCityView from '@/components/AsyncCityView.vue';

import AsyncPlacesView from '@/components/AsyncPlacesView.vue';


</script>
