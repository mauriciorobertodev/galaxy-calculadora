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
        <div class="container mx-auto py-6 relative w-full flex flex-col gap-8">
            <!-- select -->
            <SelectAuthority />

            <!-- showcase -->
            <AuthorityShowcase />

            <!-- cannon -->
            <CannonResults />

            <div class="grid-grid-cols-2">
                <!-- settings -->
                <Settings />
            </div>
        </div>
    </div>
</template>
