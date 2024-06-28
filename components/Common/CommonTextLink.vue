<template>
    <a href="" class="text-link">
        <slot>
            {{ text }}
        </slot>

        <FontAwesomeIcon class="ml-2 text-xs" icon="fa-solid fa-chevron-right" />
    </a>
</template>

<script setup>
defineProps({
    text: String
})
</script>

<style lang="scss" scoped>
.text-link {
    @apply relative text-[#6a6a8e] font-display inline-block px-[3px] overflow-hidden;
    transition: width 0.6s cubic-bezier(0.25, 0.8, 0.25, 1) 0s, color 0.5s;

    &:after {
        @apply w-0 h-[1px] bottom-0 absolute left-auto right-0 bg-current;
        transition: width 0.6s cubic-bezier(0.25, 0.8, 0.25, 1) 0s;
        content: '';
    }

    &:hover {
        @apply text-[#ff1f8e];

        &:after {
            @apply w-full left-0 right-auto;
        }
    }
}
</style>