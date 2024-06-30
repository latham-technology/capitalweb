<template>
    <footer>
        <div class="container mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div>
                    <h5 class="mb-6 font-display text-2xl font-medium mt-8 text-[#050748]">Contact Us</h5>
    
                    <ul class="flex flex-col gap-4">
                        <li class="flex gap-4">
                            <FontAwesomeIcon icon="fa-solid fa-envelope" class="relative top-1 text-xl" />
    
                            <div class="flex flex-col">
                                <p class="font-display text-lg font-semibold">Email</p>
                                <a href="mailto:info@capitalweb.design">info@capitalweb.design</a>
                            </div>
                        </li>

                        <li class="flex gap-4">
                            <FontAwesomeIcon icon="fa-phone-alt" class="relative top-1 text-xl rotate-90" />
    
                            <div class="flex flex-col">
                                <p class="font-display text-lg font-semibold">Phone</p>
                                <a href="tel:19162189476">+1 (916) 281-9476</a>
                            </div>
                        </li>
                    </ul>
                </div>

                <div>
                    <h5 class="mb-6 font-display text-2xl font-medium mt-8 text-[#050748]">Services</h5>
    
                    <ul class="flex flex-col gap-4">
                        <li>Web Design</li>
                        <li>Website Hosting</li>
                        <li>SEO Services</li>
                        <li>Content Creation</li>
                        <li>Logo Design</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="bg-[#F8F9FA] py-4 my-7">
            <div class="container mx-auto">
                <div class="flex justify-center gap-10 mx-auto text-2xl">
                    <NuxtLink to="#">
                        <FontAwesomeIcon icon="fab fa-twitter" />
                    </NuxtLink>

                    <NuxtLink to="#">
                        <FontAwesomeIcon icon="fab fa-facebook" />
                    </NuxtLink>

                    <NuxtLink to="#">
                        <FontAwesomeIcon icon="fab fa-instagram" />
                    </NuxtLink>

                    <NuxtLink to="#">
                        <FontAwesomeIcon icon="fab fa-linkedin" />
                    </NuxtLink>
                </div>
            </div>
        </div>

        <div class="container mx-auto">
            <p class="mx-auto pb-4 text-center">
                &copy; {{ (new Date()).getFullYear() }} Capital Web Design. All Rights Reserved
            </p>
        </div>
    </footer>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>