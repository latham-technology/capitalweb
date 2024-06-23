<template>
    <div>
        <p class="quote">
            <slot />
        </p>

        <div class="mt-7 mx-auto table lg:mx-0" v-if="user">
            <div class="flex gap-5">
                <div class="rounded-full overflow-hidden">
                    <img :src="user.image" alt="" />
                </div>

                <div class="self-center">
                    <h5 class="text-xl font-display text-[#050748] font-bold">
                        {{ user.name }}
                    </h5>
                    <p>{{ user.title }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    user: Object,
})
</script>

<style lang="scss" scoped>
.quote {
    @apply p-6 border-l-4 border-l-red-400 my-7 bg-[#FAFAFB] text-[#6a6a8e] font-display;
}
</style>
