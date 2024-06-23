<template>
    <div class="relative text-center">
        <span class="leading-6 text-[#e60072] uppercase tracking-wider mb-4 block">{{ subtitle }}</span>
        <h2 class="text-2xl lg:text-4xl xl:text-5xl font-semibold text-[#050748] font-display">{{ title }}</h2>
    </div>
</template>

<script setup>
defineProps({
    title: String,
    subtitle: String,
})
</script>

<style lang="scss" scoped>

</style>