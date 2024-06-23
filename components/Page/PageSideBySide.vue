<template>
    <section class="bg-dot relative py-24 overflow-hidden">
        <div
            class="container mx-auto columns-1 lg:columns-2 gap-12 flex flex-col lg:flex-row justify-center items-center"
        >
            <div class="flex-1">
                <img src="https://placehold.co/570x420" alt="" />
            </div>

            <div class="text-center lg:text-left flex-1">
                <CommonHeading title="What We Do" class="!mb-8" />
                <p class="text-lg">
                    We specialize in small business web design and development
                    for clients anywhere in the US. Every line of code is
                    written by hand to ensure the best performance, which helps
                    bring in more customers to your site and bring more revenue
                    to your business.
                </p>

                <CommonQuote
                    :user="{
                        image: 'https://placehold.co/80x80',
                        name: 'Matt Latham',
                        title: 'Owner/Developer',
                    }"
                >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Ratione, consectetur ad ut, dolorem officia eaque magnam
                    dolores asperiores at sit tempora itaque aliquid praesentium
                    dolorum, eius accusamus distinctio nostrum. Ad.
                </CommonQuote>
            </div>
        </div>
    </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.bg-dot {
    &::after {
        @apply absolute w-full h-full top-0;
        content: '';
        background: url(~/assets/images/bg-dot.png);
    }
}
</style>
