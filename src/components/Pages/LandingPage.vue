<script setup>
import ButtonText from '../componen/Global/ButtonText.vue';


</script>

<template>
    <div class="h-full w-full bg-middle flex justify-center items-center flex-col gap-2">
        <div class="flex flex-col w-[319px] items-center">
            <span class="text-white font-inter font-medium text-[15px]">Welcome to ChatGPT</span>
            <span class="text-white font-inter font-medium text-[15px]">Log in with your OpenAI account to continue</span>
        </div>
        <div class="flex flex-row gap-4">
            <ButtonText text="Log in" width="66px"/>
            <ButtonText text="Sign up" width="76px"/>
        </div>
    </div>
</template>