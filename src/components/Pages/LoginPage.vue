<script setup>
import { ref } from "vue";
import VueRecaptcha from "vue3-recaptcha2";
import logo from "../../assets/image/ChatGPT Logo.png";
import ButtonText from "../componen/Global/ButtonText.vue";
import ButtonImage from "../componen/Global/ButtonImage.vue";
import googleLogo from "@/assets/image/Google Logo.png";

const siteKey = "6LefH-UqAAAAAIm_Epm7Eh3Ce0oqckf9NpIDyXTY";
const captchaResponse = ref(null);

const verifyCaptcha = (token) => {
  captchaResponse.value = token;
  console.log("Verified:", token);
};
</script>

<template>
  <div class="">
    <div class="text-black pt-[32px] flex justify-center">
        <img :src="logo" alt="" class="filter invert">
    </div>
    <div class="flex justify-center mt-[50px] mb-[32px]">
      <span class="text-black font-inter font-bold text-[31px] leading-[27px]">Welcome back</span>
    </div>
    <div class="flex flex-col items-center justify-center">
        <div class="flex flex-col gap-4">
            <div class="relative">
                <input
                    type="text"
                    id="email"
                    class="peer w-full border-2 border-gray-300 rounded-md px-3 pt-5 pb-3 text-lg text-base focus:outline-none focus:border-green-500"
                    placeholder=" "
                />
                <label
                    for="email"
                    class="absolute left-3 top-4 text-gray-400 text-lg peer-placeholder-shown:top-1/2 peer-placeholder-shown:translate-y-[-50%] peer-placeholder-shown:text-base transition-all peer-focus:top-0 peer-focus:bg-white peer-focus:text-green-500 peer-focus:text-sm peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:text-green-500 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:mt-[-9px]"
                >
                    Email address*
                </label>
            </div>
            <div>
                <VueRecaptcha
                    :sitekey="siteKey"
                    @verify="verifyCaptcha"
                    size="normal"
                />
            </div>
        </div>
    </div>
    <div class="flex justify-center mt-[32px]">
        <ButtonText text="Continue" width="305px"/>
    </div>
    <div class="flex justify-center mt-[16px]">
        <div class="w-[305px] h-[20px] flex justify-center gap-2">
            <span class="font-inter font-normal text-[14px] leading-[27px] text-black">Don’t have an account?</span>
            <span class="text-green-500 font-inter font-normal text-[14px] leading-[27px]">Sign up</span>
        </div>
    </div>
    <div class="flex justify-center mt-[16px]">
        <div class="w-[305px] relative h-[27px] flex items-center justify-center">
            <div class="absolute w-full border-t-2 border-[#C3C8CF]"></div>
            <div class="bg-white text-black w-[40px] h-[20px] z-10 flex items-center justify-center text-[12px] font-inter leading-[27px]">OR</div>
        </div>
    </div>
    <div class="flex justify-center mt-[32px]">
        <ButtonImage :img="googleLogo" text="Continue with Google"/>
    </div>
  </div>
</template>
