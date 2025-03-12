<!-- ButtonText.vue -->
<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const route = useRouter();
const props = defineProps({
    text: {
        type: String,
        default: 'Button',
    },
    width: {
        type: String,
        default: '100px',
    },
    toRoute: {
        type: String,
        default:true
    }
});

onMounted(() => {
    console.log('Mounted', props.width);
});

const handleClick = (click) => {
    console.log('Button clicked');
    route.push(click);
}
</script>

<template>
    <button @click="handleClick(toRoute)"  :style="{width: props.width}" class="h-[38px] bg-green-500 text-white rounded-[4px]">
        {{ props.text }}
    </button>
</template>