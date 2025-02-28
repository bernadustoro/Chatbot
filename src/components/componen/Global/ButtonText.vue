<!-- ButtonText.vue -->
<script setup>
import { onMounted } from 'vue';

const props = defineProps({
    text: {
        type: String,
        default: 'Button',
    },
    width: {
        type: String,
        default: '100px',
    },
});

onMounted(() => {
    console.log('Mounted', props.width);
});
</script>

<template>
    <button :style="{width: props.width}" class="h-[38px] bg-green-500 text-white rounded-[4px]">
        {{ props.text }}
    </button>
</template>