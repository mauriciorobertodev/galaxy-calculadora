<script setup lang="ts">
import { authorityInStars } from "@/helpers";
import Avatar from "@/components/shared/Avatar.vue";
import global from "@/global";
</script>

<template>
    <div class="space-y-4">
        <div class="grid grid-cols-2 gap-4">
            <div class="py-4 rounded-lg border border-dashed border-white/40 w-full flex flex-col items-center justify-center">
                <p class="text-center font-medium text-white/50 pt-2">Atual</p>
                <Avatar v-bind:authority="global.getCurrentAuthority()" class="mx-auto" />
                <p class="text-center font-medium text-white/50 pt-2">{{ global.getCurrentAuthority().name.charAt(0).toUpperCase() + global.getCurrentAuthority().name.slice(1) }}</p>
            </div>
            <div class="py-4 rounded-lg border border-dashed border-white/40 w-full">
                <p class="text-center font-medium text-white/50 pt-2">Desejado</p>
                <Avatar v-bind:authority="global.getDesiredAuthority()" class="mx-auto" />
                <p class="text-center font-medium text-white/50 pt-2">{{ global.getDesiredAuthority().name.charAt(0).toUpperCase() + global.getDesiredAuthority().name.slice(1) }}</p>
            </div>
        </div>

        <div class="border rounded-lg p-4 border-dashed border-white/40 flex flex-col items-center justify-center h-min">
            <p v-if="global.getNeededPoints() > 0" class="text-center font-medium pb-2 text-white/50">Autoridade faltante</p>
            <div v-if="global.getNeededPoints() > 0" class="flex-grow flex items-center justify-center">
                <div class="flex items-center justify-center gap-1 flex-wrap">
                    <img v-for="(star, index) in authorityInStars(global.getNeededPoints())" v-bind:key="index" v-bind:src="star" class="max-h-8" />
                </div>
            </div>
            <p v-if="global.getNeededPoints() <= 0" class="text-center font-medium text-white/50">Você já alcançou a autoridade desejada 😎</p>
            <p v-if="global.getNeededPoints() > 0" class="text-center font-medium pt-2 text-white/50">+ {{ global.getNeededPoints().toLocaleString("pt-BR") }} pontos</p>
        </div>
    </div>
</template>
