<script setup lang="ts">
import { ref } from "vue";
import InventoryItem from "./InventoryItem.vue";
import global from "@/global";
import TradeItem from "./TradeItem.vue";
import GoalItem from "./GoalItem.vue";

const open = ref<boolean>(false);
</script>

<template>
    <div>
        <!-- button -->
        <button type="button" class="fixed bottom-4 right-4 flex items-center justify-center bg-primary-500 hover:bg-primary-600 text-white h-12 w-12 rounded-full" v-on:click="open = true">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        </button>

        <!-- modal -->
        <div v-if="open" class="bg-slate-900 fixed top-0 left-0 h-screen w-screen overflow-y-scroll py-6">
            <div class="container mx-auto relative px-4">
                <button v-on:click="open = false" class="absolute top-0 right-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <!-- inventory -->
                <h2 class="text-2xl md:text-3xl font-bold pb-6">Inventário</h2>
                <div class="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    <InventoryItem v-for="(item, index) in global.getInventory()" v-bind:key="index" v-bind:item="item" />
                </div>

                <!-- trades -->
                <h2 class="text-2xl md:text-3xl font-bold py-6">Trocas</h2>
                <div class="w-full h-min grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    <TradeItem v-for="(item, index) in global.getTrades()" v-bind:key="index" v-bind:item="item" />
                </div>

                <!-- goals -->
                <h2 class="text-2xl md:text-3xl font-bold py-6">Objetivos</h2>
                <div class="w-full h-min grid grid-rows-3 gap-4">
                    <GoalItem v-for="(item, index) in global.getGoals()" v-bind:key="index" v-bind:item="item" />
                </div>
            </div>
        </div>
    </div>
</template>
