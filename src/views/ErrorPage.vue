<template>
    <div class="flex flex-col items-center justify-center h-screen">
        <h1 class="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p class="text-lg mb-4">Oops! The page you're looking for does not exist.</p>
        <router-link to="/" class="text-blue-500 underline">Go Home</router-link>
    </div>
</template>

<script>
export default {
    name: 'NotFound',
}
</script>