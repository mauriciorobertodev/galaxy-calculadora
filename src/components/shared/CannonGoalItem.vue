<script setup lang="ts">
import { GALAY_ITEMS } from "@/constants";
import { CannonGoalOption } from "@/types";
import { toRefs } from "vue";

const props = defineProps<{ item: CannonGoalOption }>();
const { item } = toRefs(props);
</script>

<template>
    <span class="flex items-center justify-center gap-2 mx-2 font-bold flex-wrap">
        <span class="relative flex items-center justify-center">
            <img v-bind:src="GALAY_ITEMS[item.goal_item_ids[0]].img" class="h-6 w-6" />
            <img v-if="item.goal_item_ids[1]" v-bind:src="GALAY_ITEMS[item.goal_item_ids[1]].img" class="h-4 w-4 absolute bottom-0 right-0" />
            <span v-if="item.quantity > 1" class="text-xs absolute">x{{ item.quantity }}</span>
        </span>
        <span v-bind:style="`color: ${GALAY_ITEMS[item.goal_item_ids[0]].color};`" class="break-all">
            <slot class="break-all"></slot>
        </span>
    </span>
</template>
