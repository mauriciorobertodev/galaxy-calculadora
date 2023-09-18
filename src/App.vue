<script setup lang="ts">
import SelectAuthority from "@/components/SelectAuthority.vue";
import AuthorityShowcase from "@/components/AuthorityShowcase.vue";
import CannonResults from "@/components/CannonResults.vue";
import Settings from "@/components/Settings.vue";
</script>

<template>
    <div class="bg-slate-900 h-screen w-screen text-white p-4 overflow-y-auto">
        <div class="container space-y-8 mx-auto">
            <!-- select -->
            <SelectAuthority />

            <!-- showcase -->
            <AuthorityShowcase class="h-min md:h-auto" />

            <!-- cannon -->
            <CannonResults />

            <!-- settings -->
            <Settings />
        </div>
    </div>
</template>
