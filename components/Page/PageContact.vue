<template>
    <section class="py-14 lg:py-20 xl:py-28 bg-gradient-to-b from-[#D6FFFC] to-[#FFEFF5]">
        <div class="container mx-auto bg-white/55 rounded-lg p-7">
            <CommonHeading
                subtitle="Contact Now"
                title="Have a Question? Write Us a Message"
            />
    
            <form class="flex flex-col gap-4">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <CommonInput label="Full Name" />
                    <CommonInput label="Email Address" type="email" />
                    <CommonInput label="Phone Number" mask="(###) ###-####" type="tel" />
                    <CommonInput label="Subject" />
                </div>
    
                <CommonInput label="Message" type="textarea" />

                <Button>
                    Submit

                    <FontAwesomeIcon
                        class="ml-1 text-xs"
                        icon="fa-solid fa-chevron-right"
                    />
                </Button>

                <div class="text-sm mx-auto">
                    <FontAwesomeIcon
                        icon="fa-solid fa-lock"
                    />

                    We hate spam, and we respect your privacy.
                </div>
            </form>
        </div>
    </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>