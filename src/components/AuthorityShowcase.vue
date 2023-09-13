<script setup lang="ts">
import { authorityInStars } from "@/helpers";
import { computed, toRefs } from "vue";

const props = defineProps<{ points: number; placeholder_zero?: string }>();
const { points } = toRefs(props);
const stars = computed(() => authorityInStars(points.value));
</script>

<template>
    <div class="border rounded-lg p-4 border-dashed border-white/40 flex flex-col items-center justify-center h-min">
        <p v-if="points > 0" class="text-center font-medium pb-2 text-white/50">Autoridade faltante</p>
        <div v-if="points > 0" class="flex-grow flex items-center justify-center">
            <div class="flex items-center justify-center gap-1 flex-wrap">
                <img v-for="(star, index) in stars" v-bind:key="index" v-bind:src="star" class="max-h-8" />
            </div>
        </div>
        <p v-if="points <= 0 && placeholder_zero" class="text-center font-medium text-white/50">{{ placeholder_zero }} 😎</p>
        <p v-if="points > 0" class="text-center font-medium pt-2 text-white/50">+ {{ points.toLocaleString("pt-BR") }} pontos</p>
    </div>
</template>
