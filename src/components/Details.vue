<script setup lang="ts">
import { GALAY_ITEMS } from "@/constants";
import GalaItem from "@/components/shared/GalaItem.vue";
import CannonGoalItem from "@/components/shared/CannonGoalItem.vue";
import AuthorityItem from "@/components/shared/AuthorityItem.vue";
import global from "@/global";

const emit = defineEmits(["close"]);

const galaFireBall = GALAY_ITEMS["FireBall"];
const galaEletricBall = GALAY_ITEMS["EletricBall"];
const galaExplosiveBall = GALAY_ITEMS["ExplosiveBall"];
const galaGoldBall = GALAY_ITEMS["GoldBall"];
const galaDiamondKey = GALAY_ITEMS["DiamondKey"];

// const itemGoldBall = global.getInventoryItem("gold-ball");
const itemFireBall = global.getInventoryItem("fire-ball");
const itemEletricBall = global.getInventoryItem("eletric-ball");
const itemExplosiveBall = global.getInventoryItem("explosive-ball");
const itemGoldBall = global.getInventoryItem("gold-ball");
// const itemDiamondKey = global.getInventoryItem("diamond-key");

let dead = false;

const explosiveBallOption = global.getCannonGoalOption("explosive-ball");
const fireBallOption = global.getCannonGoalOption("fire-ball");
const goldBallOption = global.getCannonGoalOption("gold-ball");

const needed_authority = global.getNeededAuthorityPoints();
const total_fire_balls = itemFireBall.quantity + itemEletricBall.quantity * 2;

const points_with_explosive_balls = itemExplosiveBall.quantity * explosiveBallOption.points;
const remaining_authority_points_after_explosive = needed_authority - points_with_explosive_balls;

const points_with_fire_balls = total_fire_balls * fireBallOption.points;
const remaining_authority_points_after_fire = remaining_authority_points_after_explosive - points_with_fire_balls;

const new_keys_of_first_fire_balls = Math.floor(total_fire_balls / 15);
const remaining_fire_balls_for_diamond_keys = total_fire_balls - new_keys_of_first_fire_balls;

const points_with_gold_balls = itemGoldBall.quantity * goldBallOption.points;
const remaining_authority_points_after_gold = remaining_authority_points_after_fire - points_with_gold_balls;
</script>

<template>
    <!-- modal -->
    <div class="bg-slate-900 fixed top-0 left-0 h-screen w-screen overflow-y-auto py-6 z-50">
        <div class="container mx-auto relative px-4 flex flex-col">
            <button v-on:click="emit('close')" class="absolute top-0 right-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <h2 class="text-xl font-semibold pb-4">Inventário</h2>
                    <div class="flex gap-2 md:gap-4">
                        <div v-for="(inventoryItem, index) in global.getInventory()" v-bind:key="index" class="relative h-20 w-20 border rounded-lg border-white/10 flex items-center justify-center">
                            <img v-bind:src="GALAY_ITEMS[inventoryItem.gala_item_id].img" class="h-14 w-14" />
                            <span class="text-sm bg-white rounded-full text-gray-900 absolute bottom-2 px-2 font-bold">x{{ inventoryItem.quantity }}</span>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 class="text-xl font-semibold pb-4">Objetivos</h2>
                    <div class="flex gap-2 md:gap-4">
                        <div v-for="(goalItem, goalId) in global.getGoals()" v-bind:key="goalId" class="relative h-20 w-20 border rounded-lg border-white/10 flex items-center justify-center">
                            <img v-bind:src="GALAY_ITEMS[goalItem.fire_item_id].img" class="h-14 w-14" />
                            <div class="absolute top-1/2 left-1/2">
                                <div class="relative">
                                    <img v-bind:src="GALAY_ITEMS[global.getCannonGoalOption(goalId).goal_item_ids[0]].img" class="h-8 w-8" />
                                    <img v-if="global.getCannonGoalOption(goalId).goal_item_ids[1]" v-bind:src="GALAY_ITEMS[global.getCannonGoalOption(goalId).goal_item_ids[1]].img" class="h-6 w-6 absolute top-1/3 left-1/3" />
                                    <span v-if="global.getCannonGoalOption(goalId).quantity > 1" class="h-6 w-6 absolute left-2.5 top-1.5 text-sm font-semibold"> x{{ global.getCannonGoalOption(goalId).quantity }} </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="pt-10 pb-6 space-y-2">
                <h2 class="text-2xl md:text-3xl font-bold">Detalhes</h2>
            </div>

            <div class="space-y-4">
                <!-- after explosive balls -->
                <div class="border rounded-lg p-4 border-white/10 flex gap-4 flex-col sm:flex-row sm:items-center">
                    <p class="flex items-center justify-start flex-wrap break-all">
                        Você precisa de
                        <AuthorityItem v-bind:points="needed_authority"> {{ needed_authority.toLocaleString("pt-BR") }} ponto(s)</AuthorityItem>
                    </p>
                </div>

                <!-- explosive balls -->
                <div v-if="itemExplosiveBall.quantity > 0 && !dead" class="border rounded-lg p-4 border-white/10 flex gap-4 flex-col sm:flex-row sm:items-center">
                    <img v-bind:src="galaExplosiveBall.img" class="h-8 w-8 md:h-12 md:w-12" />
                    <p class="flex items-center justify-start flex-wrap break-all">
                        Com suas
                        <GalaItem v-bind:item="galaExplosiveBall" v-bind:show-name="true">{{ itemExplosiveBall.quantity.toLocaleString("pt-BR") }} Bala(s) explosiva(s)</GalaItem>
                        mirando em
                        <CannonGoalItem v-bind:item="global.getCannonGoalOption('explosive-ball')">{{ global.getCannonGoalOption("explosive-ball").quantity.toLocaleString("pt-BR") }} Barris válidos </CannonGoalItem>
                        você irá conseguir +
                        <AuthorityItem v-bind:points="points_with_explosive_balls"> {{ points_with_explosive_balls.toLocaleString("pt-BR") }} ponto(s) </AuthorityItem>
                    </p>
                </div>

                <!-- after explosive balls -->
                <div v-if="itemExplosiveBall.quantity > 0 && !dead" class="border rounded-lg p-4 border-white/10 flex gap-4 flex-col sm:flex-row sm:items-center">
                    <p class="flex items-center justify-start flex-wrap break-all">
                        Você ainda irá precisar de mais
                        <AuthorityItem v-bind:points="remaining_authority_points_after_explosive"> {{ remaining_authority_points_after_explosive.toLocaleString("pt-BR") }} ponto(s)</AuthorityItem>
                    </p>
                </div>

                <!-- eletric balls -->
                <div v-if="itemEletricBall.quantity > 0 && !dead" class="border rounded-lg p-4 border-white/10 flex gap-4 flex-col sm:flex-row sm:items-center">
                    <img v-bind:src="galaEletricBall.img" class="h-8 w-8 md:h-12 md:w-12" />
                    <p class="flex items-center justify-start flex-wrap break-all">
                        Com sua(s)
                        <GalaItem v-bind:item="galaEletricBall" v-bind:show-name="true">{{ itemEletricBall.quantity }} Bola(s) elétrica(s)</GalaItem>
                        você irá conseguir +
                        <GalaItem v-bind:item="galaFireBall" v-bind:show-name="true">{{ itemEletricBall.quantity * 2 }} Bala(s) de fogo</GalaItem>
                        totalizando
                        <GalaItem v-bind:item="galaFireBall" v-bind:show-name="true">{{ total_fire_balls }} Bala(s) de fogo</GalaItem>
                    </p>
                </div>

                <!-- fire balls -->
                <div v-if="itemFireBall.quantity > 0 && !dead" class="border rounded-lg p-4 border-white/10 flex gap-4 flex-col sm:flex-row sm:items-center">
                    <img v-bind:src="galaFireBall.img" class="h-8 w-8 md:h-12 md:w-12" />
                    <p class="flex items-center justify-start flex-wrap break-all">
                        Com suas
                        <GalaItem v-bind:item="galaFireBall" v-bind:show-name="true">{{ total_fire_balls.toLocaleString("pt-BR") }} Bala(s) de fogo</GalaItem>
                        mirando em
                        <CannonGoalItem v-bind:item="fireBallOption">{{ fireBallOption.quantity.toLocaleString("pt-BR") }} {{ fireBallOption.goal_item_ids.length > 1 ? "Estrela de prata e 1 de ouro" : "Estrela de prata" }} </CannonGoalItem>
                        você irá conseguir +
                        <AuthorityItem v-bind:points="points_with_fire_balls"> {{ points_with_fire_balls.toLocaleString("pt-BR") }} ponto(s) </AuthorityItem>
                        <span v-if="new_keys_of_first_fire_balls > 0">e irá conseguir +</span>
                        <GalaItem v-if="new_keys_of_first_fire_balls > 0" v-bind:show-name="true" v-bind:item="galaDiamondKey">{{ new_keys_of_first_fire_balls.toLocaleString("pt-BR") }} Chave(s) de diamante</GalaItem>
                        <span v-if="new_keys_of_first_fire_balls > 0">na conquista</span>
                    </p>
                </div>

                <!-- after fire balls -->
                <div v-if="itemFireBall.quantity > 0 && !dead" class="border rounded-lg p-4 border-white/10 flex gap-4 flex-col sm:flex-row sm:items-center">
                    <p class="flex items-center justify-start flex-wrap break-all">
                        Você ainda irá precisar de mais
                        <AuthorityItem v-bind:points="remaining_authority_points_after_fire"> {{ remaining_authority_points_after_fire.toLocaleString("pt-BR") }} ponto(s)</AuthorityItem>
                    </p>
                </div>

                <!-- gold balls -->
                <div v-if="itemGoldBall.quantity > 0 && !dead" class="border rounded-lg p-4 border-white/10 flex gap-4 flex-col sm:flex-row sm:items-center">
                    <img v-bind:src="galaGoldBall.img" class="h-8 w-8 md:h-12 md:w-12" />
                    <p class="flex items-center justify-start flex-wrap break-all">
                        Com suas
                        <GalaItem v-bind:item="galaGoldBall" v-bind:show-name="true">{{ itemGoldBall.quantity.toLocaleString("pt-BR") }} Bala(s) de ouro</GalaItem>
                        mirando em
                        <CannonGoalItem v-bind:item="goldBallOption">{{ goldBallOption.quantity.toLocaleString("pt-BR") }} {{ goldBallOption.points < 75 ? "Estrela de prata" : "Estrela de ouro" }} </CannonGoalItem>
                        você irá conseguir +
                        <AuthorityItem v-bind:points="points_with_gold_balls"> {{ points_with_gold_balls.toLocaleString("pt-BR") }} ponto(s) </AuthorityItem>
                    </p>
                </div>

                <!-- after gold balls -->
                <div v-if="itemGoldBall.quantity > 0 && !dead" class="border rounded-lg p-4 border-white/10 flex gap-4 flex-col sm:flex-row sm:items-center">
                    <p class="flex items-center justify-start flex-wrap break-all">
                        Você ainda irá precisar de mais
                        <AuthorityItem v-bind:points="remaining_authority_points_after_gold"> {{ remaining_authority_points_after_gold.toLocaleString("pt-BR") }} ponto(s)</AuthorityItem>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
