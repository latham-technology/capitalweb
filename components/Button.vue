<template>
    <button class="button">
        <slot />

        <span class="circle" />
    </button>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.button {
    @apply font-display text-white text-center relative overflow-hidden inline-flex justify-center whitespace-nowrap items-center text-base leading-[56px] rounded-full px-8;

    background: #ffbd84;
    background: linear-gradient(to right, #ffbd84 0, #ff1f8e 100%);
    box-shadow: 0 10px 15px 0 rgba(175,0,87,.2);

    .circle {
        @apply absolute block;
        border-radius: 50%;
        width: 200px;
        height: 200px;
        top: -10%;
        right: -130px;
        color: #e60072;
        background: rgba(255,255,255,.2);
        transition: 1.2s cubic-bezier(.17, .85, .438, .99);
    }

    &:hover {
        .circle {
            transform: translate(-50px);
        }
    }
}
</style>