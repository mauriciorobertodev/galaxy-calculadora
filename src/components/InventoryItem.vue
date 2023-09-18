<script setup lang="ts">
// import { toRefs } from "vue";
import { vMaska } from "maska";
// import { Inventory } from "@/types";
import global from "@/global";

// const props = defineProps<{ inventory: Inventory }>();
</script>

<template>
    <div class="border rounded-md border-white/10 grid grid-rows-[min-content_min-content]">
        <div class="w-full flex items-center justify-center py-4">
            <img v-for="item in global.getInventory()" v-bind:src="item." class="w-20" />
        </div>
        <div class="h-10 grid grid-cols-[1fr_1fr_1fr]">
            <button class="h-10 bg-white/10 flex items-center justify-center hover:bg-primary-500 rounded-bl">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                </svg>
            </button>
            <input
                v-maska
                data-maska="###############"
                type="text"
                value="0"
                class="h-10 px-4 w-full grow placeholder-white/20 text-center border border-white/10 text-white bg-transparent focus:border-primary-500 focus:ring-1 focus:ring-primary-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
            />
            <button class="h-10 bg-white/10 flex items-center justify-center hover:bg-primary-500 rounded-br">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </button>
        </div>
    </div>
</template>
