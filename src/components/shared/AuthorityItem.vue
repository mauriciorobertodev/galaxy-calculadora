<script setup lang="ts">
import { authorityInStars } from "@/helpers";
import { toRefs } from "vue";

const props = defineProps<{ points: number }>();
const { points } = toRefs(props);
const imgs = authorityInStars(points.value);
</script>

<template>
    <span class="mx-2 font-bold flex flex-wrap items-center justify-start">
        <img v-for="(img, index) in imgs" v-bind:key="index" v-bind:src="img" class="w-6" />

        <span class="text-white/50 break-words ml-2">
            <slot></slot>
        </span>
    </span>
</template>
