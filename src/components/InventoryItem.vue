<script setup lang="ts">
import { ref, toRefs } from "vue";
import { vMaska } from "maska";

import { InventoryItem } from "@/types";
import { GALAY_ITEMS } from "@/constants";
import global from "@/global";

const props = defineProps<{ item: InventoryItem }>();
const { item } = toRefs(props);

const galaItem = GALAY_ITEMS[item.value.gala_item_id];
const quantity = ref<number>(item.value.quantity);

function handleQuantity(e: Event) {
    const target = e.target as HTMLInputElement;
    const value = parseInt(target.value) || 0;

    quantity.value = value;
    global.setInventoryItemQuantity(item.value.id, value);
}
</script>

<template>
    <div class="border rounded-md border-white/10 grid grid-rows-[min-content_min-content]">
        <div class="w-full flex items-center justify-center py-4 relative">
            <img v-bind:src="galaItem.img" class="w-14" />
            <div class="absolute left-1/2 bottom-4 bg-white text-slate-700 p-1 rounded-full font-bold text-sm px-2">x{{ item.quantity }}</div>
        </div>
        <div class="flex items-center justify-center h-12 border-t border-white/10 font-semibold">{{ galaItem.name.charAt(0).toUpperCase() + galaItem.name.slice(1) }}</div>
        <div class="h-10 grid grid-cols-[1fr_1fr_1fr]">
            <button v-on:click="quantity--" class="h-10 bg-white/10 flex items-center justify-center hover:bg-primary-500 rounded-bl">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                </svg>
            </button>
            <input
                v-maska
                data-maska="###############"
                type="text"
                v-model="quantity"
                v-on:input="handleQuantity"
                class="h-10 px-4 w-full grow placeholder-white/20 text-center border border-white/10 text-white bg-transparent focus:border-primary-500 focus:ring-1 focus:ring-primary-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
            />
            <button v-on:click="quantity++" class="h-10 bg-white/10 flex items-center justify-center hover:bg-primary-500 rounded-br">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </button>
        </div>
    </div>
</template>
