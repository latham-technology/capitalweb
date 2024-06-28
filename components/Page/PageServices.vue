<template>
    <section class="relative py-24">
        <div class="bg-image" />

        <div class="relative container mx-auto flex flex-col justify-center">
            <CommonHeading
                title="Our Design and Development Process"
                subtitle="How we do it"
            />

            <div class="gap-y-7 gap-x-4 relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-baseline">
                <PageServicesTile
                    title="Logo & Branding Service"
                    icon="~/assets/images/branding.svg"
                    link-to="#"
                    body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                    omnis corrupti sed animi consequatur quia nemo, veniam vero
                    numquam iusto blanditiis impedit obcaecati quasi, velit libero
                    excepturi dolorem. Facilis, vero." />
                <PageServicesTile
                    link-to="#"
                    title="Logo & Branding Service"
                    icon="~/assets/images/branding.svg"
                    body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                    omnis corrupti sed animi consequatur quia nemo, veniam vero
                    numquam iusto blanditiis impedit obcaecati quasi, velit libero
                    excepturi dolorem. Facilis, vero." />
                <PageServicesTile
                    link-to="#"
                    title="Logo & Branding Service"
                    icon="~/assets/images/branding.svg"
                    body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                    omnis corrupti sed animi consequatur quia nemo, veniam vero
                    numquam iusto blanditiis impedit obcaecati quasi, velit libero
                    excepturi dolorem. Facilis, vero." />
                <PageServicesTile
                    link-to="#"
                    title="Logo & Branding Service"
                    icon="~/assets/images/branding.svg"
                    body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                    omnis corrupti sed animi consequatur quia nemo, veniam vero
                    numquam iusto blanditiis impedit obcaecati quasi, velit libero
                    excepturi dolorem. Facilis, vero." />
            </div>
        </div>

        <div class="cta mt-16 text-center">
            <div class="inline-flex flex-col lg:flex-row gap-7 items-center">
                <p class="text-2xl md:text-3xl text-[#050748]">
                    Hire a <span class="font-bold">Dedicated Developer</span>
                </p>

                <Button>
                    Hire Now
                
                    <FontAwesomeIcon
                        class="ml-1 text-xs"
                        icon="fa-solid fa-chevron-right"
                    />
                </Button>
            </div>
        </div>
    </section>
</template>

<script setup>
defineProps({
    decoration: String,
    decorationPosition: {
        type: String,
        validator: (value) => ['left', 'right'].includes(value.toLowerCase()),
        default: 'left',
    }
})
</script>

<style lang="scss" scoped>
.bg-image {
    @apply absolute bg-[#d7f0fd] top-0 left-0 h-[400px] w-full bg-repeat bg-contain;
    background-image: url('/images/bg-dot-shape.png');
    background-position: center top;

    img {
        @apply w-full;
    }
}

.decoration {
    @apply absolute bottom-0;

    &--left {
        @apply left-0;
    }

    &--right {
        @apply right-0;
    }
}

:deep(.tile) {
    &:first-child {
        &:before {
            background: url('/images/shape-1.svg');
            @apply bg-auto absolute h-[150px] w-[150px] bg-no-repeat -left-[40px] -bottom-[60px] -z-[1];
            content: '';
        }
    }

    &:last-child {
        &:after {
            background: url('/images/shape-2.svg');
            @apply bg-auto absolute h-[150px] w-[150px] bg-no-repeat -right-[40px] -bottom-[60px] -z-[1];
            content: '';
        }
    }
}
</style>
