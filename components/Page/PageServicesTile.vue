<template>
    <div class="tile">
        
        <div class="relative py-12 px-4">
            <ShapeSvg class="absolute top-0 right-0 text-[180px]" />

            <div class="relative flex flex-col items-center">
                <BrandingSvg :filled="true" class="text-[80px]" />
                
    
                <h4 class="mb-2 text-xl font-display text-[#050748] font-semibold">
                    {{ title }}
                </h4>
    
                <p class="text-lg">
                    {{ body }}
                </p>
    
                <CommonTextLink v-if="linkTo" class="mt-7" :to="linkTo" :text="linkText" />
            </div>
        </div>
    </div>
</template>

<script setup>
import ShapeSvg from '~/assets/images/shape-7.svg'
import BrandingSvg from '~/assets/images/branding.svg'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

defineProps({
    icon: String,
    title: String,
    body: String,
    linkTo: String,
    linkText: {
        type: String,
        default: 'Learn More'
    }
})
</script>

<style lang="scss" scoped>
.tile {
    @apply overflow-hidden border border-[#d4f0ff] rounded-lg text-center bg-white;
    box-shadow: 0 3.4px 2.7px -30px rgba(0, 0, 0, 0.059),
        0 8.2px 8.9px -30px rgba(0, 0, 0, 0.071),
        0 25px 40px -30px rgba(0, 0, 0, 0.2);
}
</style>
