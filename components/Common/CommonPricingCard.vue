<template>
    <div class="border-2 border-[#FF1F8E] rounded-md bg-white p-7">
        <h2 class="absolute top-0 left-0 right-0 leading-10 font-display font-bold uppercase text-center bg-[#FF1F8E] text-white">{{ title }}</h2>

        <div class="p-7 flex flex-col items-center">
            <span class="mb-4 uppercase">{{ subtitle }}</span>
    
            <h3 class="price mb-8">{{ price }}</h3>

            <ul v-if="features" class="features">
                <li v-for="feature in features" :key="feature">
                    <FontAwesomeIcon icon="fas fa-circle-check" class="text-[#FF1F8E]" />

                    {{ feature }}
                </li>
            </ul>

            <Button class="mt-10">Contact Us</Button>
        </div>
    </div>
</template>

<script setup>
defineProps({
    title: String,
    subtitle: String,
    price: [String, Number],
    features: Array
})
</script>

<style lang="scss" scoped>
.price {
    @apply relative text-[#FF1F8E] text-6xl font-display -translate-x-2;

    &:before {
        @apply absolute -top-[10px] -left-[30px] text-6xl scale-50;
        content: '$';
    }

    &:after {
        @apply absolute -bottom-[15px] -right-[80px] scale-[.3];
        content: '/MO'
    }
}

.features {
    @apply relative pl-6 flex flex-col gap-3 text-lg;

    li {
        @apply flex items-center;

        svg {
            @apply absolute left-0;
        }
    }
}
</style>