<template>
  <main class="container text-white">

    <div class="pt-4 mb-8 ">
      <Suspense>
        <CityList />
        <template #fallback>
          <p class="animate-pulse text-secondary">Loading. Please wait....</p>
        </template>
      </Suspense>
    </div>
  </main>
</template>

<script setup>
import CityList from '@/components/CityList.vue';


</script>
