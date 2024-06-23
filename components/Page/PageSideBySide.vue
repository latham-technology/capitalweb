<template>
    <section class="bg-dot relative py-24 overflow-hidden">

    </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.bg-dot {
    &::after {
        @apply absolute w-full h-full top-0;
        content: '';
        background: url(~/assets/images/bg-dot.png);
    }
}
</style>