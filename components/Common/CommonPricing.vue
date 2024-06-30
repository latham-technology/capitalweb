<template>
    <div class="py-40 bg-gradient-to-b from-[#FFEFF5] to-[#D6FFFC]">
        <div class="container mx-auto">
            <div class="pricing-cards">
                <CommonPricingCard
                    title="Standard"
                    subtitle="5 Pages"
                    price="300"
                    :features="[
                        'Unlimited Edits',
                        'Includes Hosting',
                        '24/7 Customer Service',
                        'Lifetime Updates',
                    ]"
                    class="lg:w-[300px]"
                />

                <CommonPricingCard
                    title="Standard"
                    subtitle="5 Pages"
                    price="300"
                    :features="[
                        'Unlimited Edits',
                        'Includes Hosting',
                        '24/7 Customer Service',
                        'Lifetime Updates',
                    ]"
                    class="lg:scale-[1.2] lg:mx-6 lg:shadow-[0_0_25px_-10px_#43B7FF]"
                />

                <CommonPricingCard
                    title="Standard"
                    subtitle="5 Pages"
                    price="300"
                    :features="[
                        'Unlimited Edits',
                        'Includes Hosting',
                        '24/7 Customer Service',
                        'Lifetime Updates',
                    ]"
                    class="lg:w-[300px]"
                />
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.pricing-cards {
    @apply flex flex-col lg:flex-row gap-10 lg:gap-0 lg:justify-center;
}
</style>