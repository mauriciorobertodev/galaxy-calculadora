<script setup lang="ts">
import SelectAuthority from "@/components/SelectAuthority.vue";
import AuthorityShowcase from "@/components/AuthorityShowcase.vue";
import { Authority } from "@/types";
import Avatar from "@/components/Avatar.vue";
import CannonResults from "@/components/CannonResults.vue";
import { computed, ref } from "vue";

const desired_authority = ref<Authority | undefined>(undefined);
const current_authority = ref<Authority | undefined>(undefined);
const current_authority_points = ref<number>(0);

const needed_authority = computed(() => {
    let need = (desired_authority.value ? desired_authority.value.points : 0) - current_authority_points.value;
    if (need < 0) need = 0;
    return need;
});
</script>

<template>
    <div class="bg-slate-900 h-screen w-screen text-white p-4 overflow-y-auto">
        <div class="container space-y-8 mx-auto">
            <!-- select -->
            <SelectAuthority v-model:desired_authority="desired_authority" v-model:current_authority="current_authority" v-model:current_authority_points="current_authority_points" />

            <!-- showcase -->
            <div class="space-y-4">
                <div class="grid grid-cols-2 gap-4">
                    <div class="py-4 rounded-lg border border-dashed border-white/40 w-full flex flex-col items-center justify-center">
                        <p class="text-center font-medium text-white/50 pt-2">Atual</p>
                        <Avatar v-bind:authority="current_authority" class="mx-auto" />
                        <p class="text-center font-medium text-white/50 pt-2">{{ current_authority ? current_authority.name.charAt(0).toUpperCase() + current_authority.name.slice(1) : "-" }}</p>
                    </div>
                    <div class="py-4 rounded-lg border border-dashed border-white/40 w-full">
                        <p class="text-center font-medium text-white/50 pt-2">Desejado</p>
                        <Avatar v-bind:authority="desired_authority" class="mx-auto" />
                        <p class="text-center font-medium text-white/50 pt-2">{{ desired_authority ? desired_authority.name.charAt(0).toUpperCase() + desired_authority.name.slice(1) : "-" }}</p>
                    </div>
                </div>
                <AuthorityShowcase placeholder_zero="Você já alcançou a autoridade desejada" v-model:points="needed_authority" class="h-min md:h-auto" />
            </div>

            <!-- cannon -->
            <h1 class="text-2xl md:text-3xl font-bold">Canhão</h1>
            <CannonResults v-bind:points="needed_authority" />
        </div>
    </div>
</template>
