<script setup lang="ts">
import { toRefs } from "vue";
import { vMaska } from "maska";
import { Authority } from "@/types";
import { AUTHORITIES } from "@/constants";
import { getAuthotiryByPoints } from "@/helpers";

const emit = defineEmits(["update:current_authority", "update:desired_authority", "update:current_authority_points"]);
const props = defineProps<{ current_authority: Authority | undefined; desired_authority: Authority | undefined; current_authority_points: number }>();
const { desired_authority, current_authority_points } = toRefs(props);

function handleCurrentAuthorityPoints(e: Event) {
    const target = e.target as HTMLInputElement;
    emit("update:current_authority_points", parseInt(target.value) || 0);
    emit("update:current_authority", getAuthotiryByPoints(parseInt(target.value) || 0));
}

function handleDesiredAuthority(e: Event) {
    const target = e.target as HTMLSelectElement;
    emit("update:desired_authority", JSON.parse(target.value));
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
                    v-bind:value="current_authority_points"
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
                    v-bind:value="JSON.stringify(desired_authority) || 'none'"
                    v-on:input="handleDesiredAuthority"
                    class="h-10 px-4 w-full grow rounded-lg placeholder-white/20 border border-white/10 text-white bg-transparent focus:border-primary-500 focus:ring-1 focus:ring-primary-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                >
                    <option value="none" selected disabled hidden>Selecione</option>
                    <option v-for="(auth, index) in AUTHORITIES" v-bind:key="index" v-bind:value="JSON.stringify(auth)" class="bg-slate-900 text-white hover:!bg-blue-500">
                        {{ auth.name.charAt(0).toUpperCase() + auth.name.slice(1) }}
                    </option>
                </select>
            </div>
        </div>
    </div>
</template>
