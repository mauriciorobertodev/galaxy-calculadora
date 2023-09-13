<script setup lang="ts">
import { toRefs } from "vue";
import { CANNON_RESULTS } from "@/constants";

const props = defineProps<{ points: number; placeholder_zero?: string }>();
const { points } = toRefs(props);
</script>

<template>
    <div class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div class="border rounded-lg border-white/30 divide-y divide-white/30" v-for="(goal, index) in CANNON_RESULTS" v-bind:key="index">
            <div class="flex gap-4 items-center p-4 justify-start">
                <div class="h-20 w-20 relative">
                    <img v-bind:src="goal.imgs.main" class="h-full w-full" />
                    <img v-bind:src="goal.imgs.sub" class="w-1/2 h-1/2 absolute bottom-0 right-0" />
                    <span v-if="goal.imgs.quantity > 1" class="absolute bottom-2 right-2 font-bold text-xl">{{ goal.imgs.quantity }}x</span>
                </div>
                <div>
                    <div class="text-2xl font-bold">{{ Math.ceil(points / goal.value).toLocaleString("pt-BR") }}</div>
                    <div class="text-white/70">Acertos.</div>
                </div>
            </div>
            <div class="p-4 text-sm text-gray-400 border-t">{{ goal.description }}</div>
        </div>
    </div>
</template>
