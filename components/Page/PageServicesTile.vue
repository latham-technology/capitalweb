<template>
    <div class="tile">
        <ShapeSvg class="absolute top-0 right-0 text-[180px]" />

        <div class="relative flex flex-col items-center">
            <BrandingSvg :filled="true" class="text-[80px]" />

            <h4 class="mb-2 text-xl font-display text-[#050748] font-semibold">
                Logo & Branding Service
            </h4>

            <p class="text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                omnis corrupti sed animi consequatur quia nemo, veniam vero
                numquam iusto blanditiis impedit obcaecati quasi, velit libero
                excepturi dolorem. Facilis, vero.
            </p>

            <a href="" class="mt-7">
                Learn More
                <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
            </a>
        </div>
    </div>
</template>

<script setup>
import ShapeSvg from '~/assets/images/shape-7.svg'
import BrandingSvg from '~/assets/images/branding.svg'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

defineProps({
    icon: String,
})
</script>

<style lang="scss" scoped>
.tile {
    @apply relative overflow-hidden py-12 px-4 border border-[#d4f0ff] rounded-lg text-center bg-white;
    box-shadow: 0 3.4px 2.7px -30px rgba(0, 0, 0, 0.059),
        0 8.2px 8.9px -30px rgba(0, 0, 0, 0.071),
        0 25px 40px -30px rgba(0, 0, 0, 0.2);
}

.text-link {
    @apply color-[#6a6a8e] font-display inline-block px-1 overflow-hidden;
    transition: width 0.6s cubic-bezier(0.25, 0.8, 0.25, 1) 0s;

    &:after {
    }
}
</style>
