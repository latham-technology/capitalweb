<template>
    <section class="relative pt-32 pb-20 bg-gradient h-screen flex items-center justify-center">
        <img
            src="~/assets/images/hero-shapes.png"
            class="absolute top-0 left-0 bg-contain max-h-full"
            alt=""
        />

        <div class="relative">
            <div class="container mx-auto">
                <div
                    class="columns-1 lg:columns-2 gap-12 flex flex-col lg:flex-row"
                >
                    <div class="text-center lg:text-left flex-1 self-center">
                        <h1
                            class="text-[#050748] capitalize font-bold mb-9 text-4xl md:text-5xl xl:text-6xl leading-10 font-display"
                        >
                            {{ heading }}
                        </h1>

                        <p class="leading-7 mb-8 text-lg text-xl">{{ body }}</p>

                        <Button>
                            Get In Touch!

                            <FontAwesomeIcon
                                class="ml-1 text-xs animate-bounce-horiz"
                                icon="fa-solid fa-chevron-right"
                            />
                        </Button>
                    </div>

                    <div class="mt-7 lg:mt-0 flex-1">
                        <img
                            src="~/assets/images/hero-image.png"
                            class="relative rounded-lg max-w-full h-auto"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
defineProps({
    heading: {
        type: String,
        required: true,
    },

    body: {
        type: String,
        required: true,
    },
})
</script>

<style lang="scss">
.bg-gradient {
    background: #c7ecff;
    background: linear-gradient(to bottom, #c7ecff 0, #f9efff 100%);
}
</style>
