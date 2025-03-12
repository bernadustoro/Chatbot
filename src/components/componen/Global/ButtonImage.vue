<script setup>
const props = defineProps({
    text: {
        type: String,
        default: 'Button',
    },
    img: {
        type: String,
        default: true,
    },
});
</script>

<template>
    <div class="w-[305px] h-[52px] border border-black rounded-[4px] flex items-center pl-[17.83px] gap-4">
        <div class="w-[20px] h-[20px]">
            <img :src="props.img" class="object-cover"/>
        </div>
        <span class="w-full h-full flex items-center text-black font-inter font-medium text-[15px]">{{ props.text }}</span>
    </div>
</template>