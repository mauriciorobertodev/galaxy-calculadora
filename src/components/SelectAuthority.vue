<script setup lang="ts">
import { vMaska } from "maska";
import { AUTHORITIES } from "@/constants";
import { getAuthotiryByPoints } from "@/helpers";
import global from "@/global";
import { Authority } from "@/types";
import { ref } from "vue";

const desired_authority = ref<string>(JSON.stringify(global.getDesiredAuthority()));
const current_authority = ref<string>(JSON.stringify(global.getCurrentAuthority()));

function handleCurrentAuthorityPoints(e: Event) {
    const target = e.target as HTMLInputElement;
    const points = parseInt(target.value) || 0;
    const authority = getAuthotiryByPoints(points);

    current_authority.value = points.toString();
    global.setCurrentAuthority({ ...authority, points });
}

function handleDesiredAuthority(e: Event) {
    const target = e.target as HTMLSelectElement;
    global.setDesiredAuthority({ ...(JSON.parse(target.value) as Authority) });
}
</script>

<template>
    <div class="w-full">
        <div class="flex flex-col md:flex-row gap-4">
            <!-- current authority -->
            <div class="w-full">
                <label for="current_authority" class="text-sm text-white/50 mb-1">Autoridade atual</label>
                <input
                    id="current_authority"
                    v-maska
                    data-maska="###############"
                    type="text"
                    placeholder="ex. 1432"
                    v-bind:value="current_authority"
                    v-on:input="handleCurrentAuthorityPoints"
                    class="h-10 px-4 w-full grow rounded-lg placeholder-white/20 border border-white/10 text-white bg-transparent focus:border-primary-500 focus:ring-1 focus:ring-primary-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                />
            </div>
            <!-- desired authority -->
            <div class="w-full">
                <label for="desired_authority" class="text-sm text-white/50 mb-1">Autoridade desejada</label>
                <select
                    id="desired_authority"
                    placeholder="ex. 1432"
                    v-bind:value="desired_authority"
                    v-on:input="handleDesiredAuthority"
                    class="h-10 px-4 w-full grow rounded-lg placeholder-white/20 border border-white/10 text-white bg-transparent focus:border-primary-500 focus:ring-1 focus:ring-primary-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                >
                    <option v-bind:value="JSON.stringify(AUTHORITIES[0])" selected disabled hidden>Selecione</option>
                    <template v-for="(auth, index) in AUTHORITIES">
                        <option v-if="auth.points > 0" v-bind:key="index" v-bind:value="JSON.stringify(auth)" class="bg-slate-900 text-white hover:!bg-blue-500">
                            {{ auth.name.charAt(0).toUpperCase() + auth.name.slice(1) }}
                        </option>
                    </template>
                </select>
            </div>
        </div>
    </div>
</template>
