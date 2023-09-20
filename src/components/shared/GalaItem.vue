<script setup lang="ts">
import { GalaxyItem } from "@/types";
import { toRefs, useSlots } from "vue";

const slots = useSlots();

const props = defineProps<{ item: GalaxyItem; showName: boolean }>();
const { item, showName } = toRefs(props);
</script>

<template>
    <span class="flex items-center justify-center gap-2 mx-2 font-bold">
        <img v-bind:src="item.img" class="h-6 w-6" />
        <span v-if="showName" v-bind:style="`color: ${item.color};`">
            <p v-if="!slots" class="break-all">
                {{ item.name.charAt(0).toUpperCase() + item.name.slice(1) }}
            </p>
            <slot></slot>
        </span>
    </span>
</template>
