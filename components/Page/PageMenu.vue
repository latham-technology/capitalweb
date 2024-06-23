<template>
    <header class="header">
        <div class="container mx-auto">
            <div class="w-full flex items-center justify-between">
                <div class="leading-[85px]">Capital Web Design</div>

                <div class="flex justify-end items-center">
                    <ul></ul>

                    <ul class="flex gap-2 items-center justify-end">
                        <li>
                            <button class="quote-button">
                                <FontAwesomeIcon icon="fa-solid fa-phone-alt" class="rotate-90" />
                            </button>
                        </li>

                        <li>
                            <button class="w-9 min-h-12 flex flex-col justify-center items-stretch gap-2">
                                <span class="block h-1 bg-[#050748]"></span>
                                <span class="block h-1 bg-[#050748]"></span>
                                <span class="block h-1 bg-[#050748]"></span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.header {
    @apply flex items-center fixed top-0 right-0 left-0;
    z-index: 99999;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.quote-button {
    @apply w-12 h-12 items-center justify-center text-white inline-flex rounded-full;
    background: #f92c8b;
    background: linear-gradient(to right, #f92c8b 0%,#b02cd6 100%);
    box-shadow: 0 10px 15px 0px rgba(175, 0, 202, .2);
}

.hamburger {
    @apply w-9 min-h-12;
}
</style>