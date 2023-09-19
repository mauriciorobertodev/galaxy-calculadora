<!-- <script setup lang="ts">
import { toRefs } from "vue";

import { GoalItem } from "@/types";
import { GALAY_ITEMS, GOAL_OPTIONS } from "@/constants";
import global from "@/global";
// import global from "@/global";

const props = defineProps<{ item: GoalItem }>();
const { item } = toRefs(props);

const galaItem = GALAY_ITEMS[item.value.item_id];
</script>

<template>
    <div class="items-center space-y-2 py-4">
        <div class="flex gap-4 items-center">
            <img v-bind:src="galaItem.img" class="w-8 h-8" />
            <div class="flex items-center justify-center h-12 font-semibold">{{ galaItem.name.charAt(0).toUpperCase() + galaItem.name.slice(1) }}</div>
        </div>

        <div class="flex gap-4">
            <button
                v-on:click="global.setGoalChoice(item.id, goal.id)"
                v-for="(goal, index) in GOAL_OPTIONS[item.id]"
                v-bind:key="index"
                v-bind:class="goal.id === global.getGoal(item.id).option ? 'bg-primary-500' : ''"
                class="h-20 w-20 border rounded-lg border-white/10 relative flex items-center justify-center hover:border-primary-500"
            >
                <img v-bind:src="GALAY_ITEMS[goal.goal_ids[0]].img" class="h-14 w-14" />
                <img v-if="goal.goal_ids[1]" v-bind:src="GALAY_ITEMS[goal.goal_ids[1]].img" class="absolute right-2 bottom-2 w-10 h-10" />
                <span v-if="goal.goal_quantity > 1" class="font-bold absolute text-2xl">x{{ goal.goal_quantity }}</span>
            </button>
        </div>
    </div>
</template> -->
