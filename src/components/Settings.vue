<script setup lang="ts">
import InventoryItem from "./InventoryItem.vue";
import global from "@/global";
import TradeItem from "./TradeItem.vue";
import GoalItem from "./GoalItem.vue";

const emit = defineEmits(["close"]);
</script>

<template>
    <!-- modal -->
    <div class="bg-slate-900 fixed top-0 left-0 h-screen w-screen overflow-y-auto py-6 z-50">
        <div class="container mx-auto relative px-4 flex flex-col gap-8">
            <button v-on:click="emit('close')" class="absolute top-0 right-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <!-- inventory -->
            <div>
                <div class="pb-6 space-y-2">
                    <h2 class="text-2xl md:text-3xl font-bold">Inventário</h2>
                    <p class="text-white/50">
                        Coloque a quantidade que você tem dos items abaixo. Serão usados para calcular a autoridade que você já tem jogando esses items, em especial a <span class="text-purple-500 font-semibold"> Bola Elétrica </span> que será usada considerando que você irá usa-la para pegar 2 balas
                        de fogo
                    </p>
                </div>
                <div class="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    <InventoryItem v-for="(item, index) in global.getInventory()" v-bind:key="index" v-bind:item="item" />
                </div>
            </div>

            <!-- trades -->
            <div>
                <div class="py-6 space-y-2">
                    <h2 class="text-2xl md:text-3xl font-bold">Trocas</h2>
                    <p class="text-white/50">Defina a quantidade de fires que estão trocando atualmente entre os usuários.</p>
                </div>
                <div class="w-full h-min grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    <TradeItem v-for="(item, index) in global.getTrades()" v-bind:key="index" v-bind:item="item" />
                </div>
            </div>

            <!-- goals -->
            <div>
                <div class="py-6 space-y-2">
                    <h2 class="text-2xl md:text-3xl font-bold">Objetivos</h2>
                    <p class="text-white/50">
                        Defina o objetivo de cada tipo de bala de canhão., por exemplo se você definir em <span class="text-orange-500 font-semibold">Bala de fogo </span> um <span class="text-white font-semibold"> Estrela de Prata </span> significa que com as bala de fogo que você tem atualmente
                        você irá sempre jogar pegando sempre uma estrela de prata.
                    </p>
                </div>
                <div class="w-full h-min grid grid-rows-3 gap-4">
                    <GoalItem v-for="(item, index) in global.getGoals()" v-bind:key="index" v-bind:item="item" />
                </div>
            </div>
        </div>
    </div>
</template>
