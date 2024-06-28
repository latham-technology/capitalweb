<template>
    <label :for="id">
        <span class="sr-only">{{ props.label }}</span>

        <template v-if="props.type === 'textarea'">
            <textarea v-if="mask" v-mask="mask" :placeholder="props.label"></textarea>
            <textarea v-else :placeholder="props.label"></textarea>
        </template>
        
        <template v-else>
            <input v-if="mask" :id="id" v-mask="mask" :type="props.type" :placeholder="props.label" />
            <input v-else :id="id" :type="props.type" :placeholder="props.label" />
        </template>

    </label>
</template>

<script setup>
const props = defineProps({
    id: String,
    type: {
        type: String,
        default: 'text',
    },
    label: {
        type: String,
        required: true,
    },
    mask: String,
})

const id = ref(props.id)
const vMask = ref()

if (props.mask) {
    const { mask } = await import('vue-the-mask')
    vMask.value = mask
}


if (!id.value) {
    id.value = simpleHash(props.label)
}
</script>

<style lang="scss" scoped>
input, textarea {
    @apply w-full text-[#172B43] text-base outline-none bg-white border-0 rounded-[4px] border-b-2 border-solid border-b-[#E6E6E6];
    @apply transition-colors;

    &:focus {
        @apply border-b-[#FF1F8E];
    }
}

input {
    @apply w-full h-[50px] px-4;

}

textarea {
    @apply h-full p-4;
}
</style>