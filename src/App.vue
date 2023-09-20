<script setup lang="ts">
import { onMounted } from "vue";
import global from "@/global";
import SelectAuthority from "@/components/SelectAuthority.vue";
import AuthorityShowcase from "@/components/AuthorityShowcase.vue";
import CannonResults from "@/components/CannonResults.vue";
import Settings from "@/components/Settings.vue";
onMounted(() => global.loadFromLocalStorage());
</script>

<template>
    <div class="bg-slate-900 h-screen w-screen text-white p-4 overflow-y-auto">
        <div class="container space-y-8 mx-auto py-6">
            <!-- select -->
            <SelectAuthority />

            <!-- showcase -->
            <AuthorityShowcase />

            <!-- cannon -->
            <CannonResults />

            <!-- settings -->
            <Settings />
        </div>
    </div>
</template>
