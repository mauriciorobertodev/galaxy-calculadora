<script setup lang="ts">
import { ref, toRefs } from "vue";
import { vMaska } from "maska";
import { TradeItem } from "@/types";
import { GALAY_ITEMS } from "@/constants";
import global from "@/global";

const props = defineProps<{ item: TradeItem }>();
const { item } = toRefs(props);

const galaItem = GALAY_ITEMS[item.value.item_id];
const galaTradeItem = GALAY_ITEMS[item.value.trade_item_id];
const quantity = ref<number>(item.value.trade_quantity ?? 0);

function handleQuantity(e: Event) {
    const target = e.target as HTMLInputElement;
    const value = parseInt(target.value) || 0;

    quantity.value = value;
    global.setTradeItemQuantity(item.value.id, value);
}
</script>

<template>
    <div class="border rounded-md border-white/10 grid grid-rows-[min-content_min-content]">
        <div class="w-full flex items-center justify-center py-4 relative">
            <div class="grid w-full grid-cols-[1fr_min-content_1fr] gap-2 items-center justify-center">
                <div class="flex items-center justify-center relative p-2">
                    <img v-bind:src="galaItem.img" class="w-14" />
                    <div class="absolute bottom-0 bg-white text-slate-700 p-1 rounded-full font-bold text-sm px-2">x{{ item.item_quantity.toLocaleString("pt-BR") }}</div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4 md:h-6 md:w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                </svg>
                <div class="flex items-center justify-center relative p-2">
                    <img v-bind:src="galaTradeItem.img" class="w-14" />
                    <div class="absolute bottom-0 bg-white text-slate-700 p-1 rounded-full font-bold text-sm px-2">x{{ item.trade_quantity.toLocaleString("pt-BR") }}</div>
                </div>
            </div>
        </div>

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
