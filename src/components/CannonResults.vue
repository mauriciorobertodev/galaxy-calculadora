<script setup lang="ts">
import { CANNON_GOALS, GALAY_ITEMS } from "@/constants";
import global from "@/global";
</script>

<template>
    <h1 class="text-2xl md:text-3xl font-bold">Canhão</h1>
    <div class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div v-bind:key="i" v-for="(cannon_goal_options, i) in CANNON_GOALS" class="grid grid-rows-3 gap-4">
            <div class="border rounded-lg border-white/30 divide-y divide-white/30" v-for="option in cannon_goal_options" v-bind:key="option.id">
                <div class="flex gap-4 items-center p-4 justify-start">
                    <div class="h-20 w-20 relative">
                        <img v-bind:src="GALAY_ITEMS[option.fire_item_id].img" class="h-full w-full" />
                        <img v-bind:src="GALAY_ITEMS[option.goal_item_ids[0]].img" class="w-1/2 h-1/2 absolute bottom-0 right-0" />
                        <img v-if="option.goal_item_ids[1]" v-bind:src="GALAY_ITEMS[option.goal_item_ids[1]].img" class="w-1/3 h-1/3 absolute bottom-0 right-0" />
                        <span v-if="option.quantity > 1" class="absolute bottom-2 right-2 font-bold text-xl">{{ option.quantity }}x</span>
                    </div>
                    <div>
                        <div class="text-2xl font-bold">{{ Math.ceil(global.getNeededPoints() / option.points).toLocaleString("pt-BR") }}</div>
                        <div class="text-white/70">Acertos.</div>
                    </div>
                </div>
                <div class="p-4 text-sm text-gray-400 border-t">{{ option.description }}</div>
            </div>
        </div>
    </div>
</template>
