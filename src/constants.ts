import { Authority, CannonGoal, GalaxyItem, GalaxyItemID, Star } from "./types";

export const AUTHORITIES: Authority[] = [
    {
        id: "None",
        name: "-",
        points: 0,
        aura: "",
    },
    {
        id: "Dad",
        name: "pai",
        points: 100,
        aura: "https://galaxy.mobstudio.ru/server_pics/aura/0_1_.png",
    },
    {
        id: "Angel",
        name: "anjo",
        points: 500,
        aura: "https://galaxy.mobstudio.ru/server_pics/aura/0_2_.png",
    },
    {
        id: "God",
        name: "deus",
        points: 1000,
        aura: "https://galaxy.mobstudio.ru/server_pics/aura/0_3_.png",
    },
    {
        id: "Almighty",
        name: "todo-poderoso",
        points: 5000,
        aura: "https://galaxy.mobstudio.ru/server_pics/aura/0_4_.png",
    },
    {
        id: "Mister",
        name: "mister",
        points: 10000,
        aura: "https://galaxy.mobstudio.ru/server_pics/aura/0_5_.png",
    },
    {
        id: "Legend",
        name: "lenda",
        points: 50000,
        aura: "https://galaxy.mobstudio.ru/server_pics/aura/0_6_.png",
    },
    {
        id: "Premier",
        name: "premiê",
        points: 100000,
        aura: "https://galaxy.mobstudio.ru/server_pics/aura/0_7_.png",
    },
    {
        id: "Guardian",
        name: "guardião",
        points: 500000,
        aura: "https://galaxy.mobstudio.ru/server_pics/aura/0_8_.png",
    },
    {
        id: "Emperor",
        name: "imperador",
        points: 1000000,
        aura: "https://galaxy.mobstudio.ru/server_pics/aura/0_9_.png",
    },
    {
        id: "Sovereign",
        name: "soberano",
        points: 5000000,
        aura: "https://galaxy.mobstudio.ru/server_pics/aura/0_10_.png",
    },
    {
        id: "Protector",
        name: "protetor",
        points: 10000000,
        aura: "https://galaxy.mobstudio.ru/server_pics/aura/0_11_.png",
    },
    {
        id: "Immortal",
        name: "imortal",
        points: 50000000,
        aura: "https://galaxy.mobstudio.ru/server_pics/aura/0_12_.png",
    },
    {
        id: "Glorious",
        name: "glorioso",
        points: 100000000,
        aura: "https://galaxy.mobstudio.ru/server_pics/aura/0_13_.png",
    },
];

export const STARS: Star[] = [
    {
        id: "1Point",
        name: "1 ponto",
        points: 1,
        img: "https://galaxy.mobstudio.ru/server_pics/a4/01.png",
    },
    {
        id: "2Point",
        name: "2 pontos",
        points: 2,
        img: "https://galaxy.mobstudio.ru/server_pics/a4/02.png",
    },
    {
        id: "3Point",
        name: "3 pontos",
        points: 3,
        img: "https://galaxy.mobstudio.ru/server_pics/a4/03.png",
    },
    {
        id: "4Point",
        name: "4 pontos",
        points: 4,
        img: "https://galaxy.mobstudio.ru/server_pics/a4/04.png",
    },
    {
        id: "Bronze",
        name: "estrela de bronze",
        points: 5,
        img: "https://galaxy.mobstudio.ru/server_pics/a4/1.png",
    },
    {
        id: "SmallGold",
        name: "pequena estrela de ouro",
        points: 25,
        img: "https://galaxy.mobstudio.ru/server_pics/a4/2.png",
    },
    {
        id: "Silver",
        name: "estrela de prata",
        points: 75,
        img: "https://galaxy.mobstudio.ru/server_pics/a4/3.png",
    },
    {
        id: "BigGold",
        name: "estrela grande de ouro",
        points: 375,
        img: "https://galaxy.mobstudio.ru/server_pics/a4/4.png",
    },
    {
        id: "DiamondRed",
        name: "ruby vermelho",
        points: 1875,
        img: "https://galaxy.mobstudio.ru/server_pics/a4/5.png",
    },
    {
        id: "DiamondBlue",
        name: "ruby azul",
        points: 9375,
        img: "https://galaxy.mobstudio.ru/server_pics/a4/6.png",
    },
    {
        id: "DiamondGreen",
        name: "ruby verde",
        points: 46875,
        img: "https://galaxy.mobstudio.ru/server_pics/a4/7.png",
    },
    {
        id: "DiamondLightBlue",
        name: "ruby azul claro",
        points: 234375,
        img: "https://galaxy.mobstudio.ru/server_pics/a4/8.png",
    },
    {
        id: "DiamondPurple",
        name: "ruby roxo",
        points: 1171875,
        img: "https://galaxy.mobstudio.ru/server_pics/a4/9.png",
    },
    {
        id: "DiamondYellow",
        name: "ruby amarelo",
        points: 5859375,
        img: "https://galaxy.mobstudio.ru/server_pics/a4/10.png",
    },
    {
        id: "DiamondBlack",
        name: "ruby preto",
        points: 29296875,
        img: "https://galaxy.mobstudio.ru/server_pics/a4/11.png",
    },
];

export const CANNON_RESULTS: CannonGoal[] = [
    {
        id: "GoldAndGold",
        value: 25,
        description: "Bala de ouro acertando estrela pequena de ouro",
        imgs: {
            main: "https://galaxy.mobstudio.ru/services/public/img/prizes/cb_gball_200.png",
            sub: "https://galaxy.mobstudio.ru/server_pics/a4/2.png",
            quantity: 1,
        },
    },
    {
        id: "GoldAndSilver",
        value: 75,
        description: "Bala de ouro acertando estrela de prata",
        imgs: {
            main: "https://galaxy.mobstudio.ru/services/public/img/prizes/cb_gball_200.png",
            sub: "https://galaxy.mobstudio.ru/server_pics/a4/3.png",
            quantity: 1,
        },
    },
    {
        id: "FireAndSilver",
        value: 150,
        description: "Bala de fogo acertando estrela de prata",
        imgs: {
            main: "https://galaxy.mobstudio.ru/services/public/img/prizes/cb_fball_1_200.png",
            sub: "https://galaxy.mobstudio.ru/server_pics/a4/3.png",
            quantity: 1,
        },
    },
    {
        id: "ExplosionAnd7Barrel",
        value: 450,
        description: "Bala explosiva acertando 7 barris válidos (comum)",
        imgs: {
            main: "https://galaxy.mobstudio.ru/services/public/img/prizes/cb_xball_1_200.png",
            sub: "https://galaxy.mobstudio.ru/server_pics/cn/b1_.png",
            quantity: 7,
        },
    },
    {
        id: "ExplosionAnd7Barrel",
        value: 500,
        description: "Bala explosiva acertando 8 barris válidos (médio)",
        imgs: {
            main: "https://galaxy.mobstudio.ru/services/public/img/prizes/cb_xball_1_200.png",
            sub: "https://galaxy.mobstudio.ru/server_pics/cn/b1_.png",
            quantity: 8,
        },
    },
    {
        id: "ExplosionAnd7Barrel",
        value: 550,
        description: "Bala explosiva acertando 9 barris válidos (raro)",
        imgs: {
            main: "https://galaxy.mobstudio.ru/services/public/img/prizes/cb_xball_1_200.png",
            sub: "https://galaxy.mobstudio.ru/server_pics/cn/b1_.png",
            quantity: 9,
        },
    },
];

export const GALAY_ITEMS: { [key in GalaxyItemID]: GalaxyItem } = {
    FireBall: {
        name: "baata",
        img: "batata",
    },
    BlackBall: {
        name: "baata",
        img: "batata",
    },
    GoldBall: {
        name: "baata",
        img: "batata",
    },
    ExplosiveBall: {
        name: "baata",
        img: "batata",
    },
    EletricBall: {
        name: "baata",
        img: "batata",
    },
    DiamondKey: {
        name: "baata",
        img: "batata",
    },
};
