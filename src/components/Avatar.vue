<script setup lang="ts">
import { Authority } from "@/types";
import { toRefs } from "vue";

const props = defineProps<{ authority?: Authority }>();
const { authority } = toRefs(props);
</script>

<template>
    <div class="w-[164px] h-[164px]">
        <div class="relative flex items-center justify-center w-full h-full">
            <img v-if="authority" v-bind:src="authority.aura" alt="aura" class="absolute bottom-0 h-full" />
            <img src="https://galaxy.mobstudio.ru/server_pics/hb/b119_.png" alt="corpo" class="absolute bottom-0 object-contain w-[33.54%]" />
            <img src="https://galaxy.mobstudio.ru/server_pics/hb/117124_.png" alt="cabeça" class="absolute bottom-[29.27%] w-[31.71%]" />
        </div>
    </div>
</template>
