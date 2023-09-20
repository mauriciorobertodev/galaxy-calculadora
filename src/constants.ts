import { Authority, AuthorityID, CannonFireID, CannonGoalOption, GalaxyItem, GalaxyItemID, Star, StartID } from "./types";

export const AUTHORITIES: { [key in AuthorityID]: Authority } = {
    none: {
        id: "none",
        name: "",
        points: 0,
        aura: "",
    },
    Dad: {
        id: "Dad",
        name: "pai",
        points: 100,
        aura: "https://galaxy.mobstudio.ru/server_pics/aura/0_1_.png",
    },
    Angel: {
        id: "Angel",
        name: "anjo",
        points: 500,
        aura: "https://galaxy.mobstudio.ru/server_pics/aura/0_2_.png",
    },
    God: {
        id: "God",
        name: "deus",
        points: 1000,
        aura: "https://galaxy.mobstudio.ru/server_pics/aura/0_3_.png",
    },
    Almighty: {
        id: "Almighty",
        name: "todo-poderoso",
        points: 5000,
        aura: "https://galaxy.mobstudio.ru/server_pics/aura/0_4_.png",
    },
    Mister: {
        id: "Mister",
        name: "mister",
        points: 10000,
        aura: "https://galaxy.mobstudio.ru/server_pics/aura/0_5_.png",
    },
    Legend: {
        id: "Legend",
        name: "lenda",
        points: 50000,
        aura: "https://galaxy.mobstudio.ru/server_pics/aura/0_6_.png",
    },
    Premier: {
        id: "Premier",
        name: "premiê",
        points: 100000,
        aura: "https://galaxy.mobstudio.ru/server_pics/aura/0_7_.png",
    },
    Guardian: {
        id: "Guardian",
        name: "guardião",
        points: 500000,
        aura: "https://galaxy.mobstudio.ru/server_pics/aura/0_8_.png",
    },
    Emperor: {
        id: "Emperor",
        name: "imperador",
        points: 1000000,
        aura: "https://galaxy.mobstudio.ru/server_pics/aura/0_9_.png",
    },
    Sovereign: {
        id: "Sovereign",
        name: "soberano",
        points: 5000000,
        aura: "https://galaxy.mobstudio.ru/server_pics/aura/0_10_.png",
    },
    Protector: {
        id: "Protector",
        name: "protetor",
        points: 10000000,
        aura: "https://galaxy.mobstudio.ru/server_pics/aura/0_11_.png",
    },
    Immortal: {
        id: "Immortal",
        name: "imortal",
        points: 50000000,
        aura: "https://galaxy.mobstudio.ru/server_pics/aura/0_12_.png",
    },
    Glorious: {
        id: "Glorious",
        name: "glorioso",
        points: 100000000,
        aura: "https://galaxy.mobstudio.ru/server_pics/aura/0_13_.png",
    },
};

export const STARS: { [key in StartID]: Star } = {
    "1Point": {
        gala_item_id: "1Point",
        name: "1 ponto",
        points: 1,
    },
    "2Point": {
        gala_item_id: "2Point",
        name: "2 pontos",
        points: 2,
    },
    "3Point": {
        gala_item_id: "3Point",
        name: "3 pontos",
        points: 3,
    },
    "4Point": {
        gala_item_id: "4Point",
        name: "4 pontos",
        points: 4,
    },
    Bronze: {
        gala_item_id: "Bronze",
        name: "estrela de bronze",
        points: 5,
    },
    SmallGold: {
        gala_item_id: "SmallGold",
        name: "pequena estrela de ouro",
        points: 25,
    },
    Silver: {
        gala_item_id: "Silver",
        name: "estrela de prata",
        points: 75,
    },
    BigGold: {
        gala_item_id: "BigGold",
        name: "estrela grande de ouro",
        points: 375,
    },
    DiamondRed: {
        gala_item_id: "DiamondRed",
        name: "ruby vermelho",
        points: 1875,
    },
    DiamondBlue: {
        gala_item_id: "DiamondBlue",
        name: "ruby azul",
        points: 9375,
    },
    DiamondGreen: {
        gala_item_id: "DiamondGreen",
        name: "ruby verde",
        points: 46875,
    },
    DiamondLightBlue: {
        gala_item_id: "DiamondLightBlue",
        name: "ruby azul claro",
        points: 234375,
    },
    DiamondPurple: {
        gala_item_id: "DiamondPurple",
        name: "ruby roxo",
        points: 1171875,
    },
    DiamondYellow: {
        gala_item_id: "DiamondYellow",
        name: "ruby amarelo",
        points: 5859375,
    },
    DiamondBlack: {
        gala_item_id: "DiamondBlack",
        name: "ruby preto",
        points: 29296875,
    },
};

export const GALAY_ITEMS: { [key in GalaxyItemID]: GalaxyItem } = {
    FireBall: {
        name: "bala de fogo",
        img: "https://galaxy.mobstudio.ru/services/public/img/prizes/cb_fball_1_200.png",
        color: "#f97316",
    },
    BlackBall: {
        name: "bala preta",
        img: "https://galaxy.mobstudio.ru/services/public/img/prizes/cb_ball_200.png",
    },
    GoldBall: {
        name: "bala de ouro",
        img: "https://galaxy.mobstudio.ru/services/public/img/prizes/cb_gball_200.png",
        color: "#f59e0b",
    },
    ExplosiveBall: {
        name: "bala explosiva",
        img: "https://galaxy.mobstudio.ru/services/public/img/prizes/cb_xball_1_200.png",
        color: "#dc2626",
    },
    EletricBall: {
        name: "bola elétrica",
        img: "https://galaxy.mobstudio.ru/services/public/img/prizes/b_eball_1_200.png",
        color: "#a855f7",
    },
    DiamondKey: {
        name: "chave de diamante",
        img: "https://galaxy.mobstudio.ru/services/public/img/prizes/diamond_lockpick_200.png",
        color: "#3b82f6",
    },
    Barrel: {
        name: "barris",
        img: "https://galaxy.mobstudio.ru/server_pics/cn/b1_.png",
        color: "#854d0e",
    },

    "1Point": {
        name: "1 ponto",
        img: "https://galaxy.mobstudio.ru/server_pics/a4/01.png",
    },
    "2Point": {
        name: "2 pontos",
        img: "https://galaxy.mobstudio.ru/server_pics/a4/02.png",
    },
    "3Point": {
        name: "3 pontos",
        img: "https://galaxy.mobstudio.ru/server_pics/a4/03.png",
    },
    "4Point": {
        name: "4 pontos",
        img: "https://galaxy.mobstudio.ru/server_pics/a4/04.png",
    },
    Bronze: {
        name: "estrela de bronze",
        img: "https://galaxy.mobstudio.ru/server_pics/a4/1.png",
    },
    SmallGold: {
        name: "pequena estrela de ouro",
        img: "https://galaxy.mobstudio.ru/server_pics/a4/2.png",
    },
    Silver: {
        name: "estrela de prata",
        img: "https://galaxy.mobstudio.ru/server_pics/a4/3.png",
    },
    BigGold: {
        name: "estrela grande de ouro",
        img: "https://galaxy.mobstudio.ru/server_pics/a4/4.png",
    },
    DiamondRed: {
        name: "ruby vermelho",
        img: "https://galaxy.mobstudio.ru/server_pics/a4/5.png",
    },
    DiamondBlue: {
        name: "ruby azul",
        img: "https://galaxy.mobstudio.ru/server_pics/a4/6.png",
    },
    DiamondGreen: {
        name: "ruby verde",
        img: "https://galaxy.mobstudio.ru/server_pics/a4/7.png",
    },
    DiamondLightBlue: {
        name: "ruby azul claro",
        img: "https://galaxy.mobstudio.ru/server_pics/a4/8.png",
    },
    DiamondPurple: {
        name: "ruby roxo",
        img: "https://galaxy.mobstudio.ru/server_pics/a4/9.png",
    },
    DiamondYellow: {
        name: "ruby amarelo",
        img: "https://galaxy.mobstudio.ru/server_pics/a4/10.png",
    },
    DiamondBlack: {
        name: "ruby preto",
        img: "https://galaxy.mobstudio.ru/server_pics/a4/11.png",
    },
};

export const CANNON_GOALS: { [key in CannonFireID]: CannonGoalOption[] } = {
    "gold-ball": [
        {
            id: "gold-star",
            fire_item_id: "GoldBall",
            goal_item_ids: ["SmallGold"],
            quantity: 1,
            points: 25,
            description: "Bala de ouro acertando estrela pequena de ouro",
        },
        {
            id: "silver-star",
            fire_item_id: "GoldBall",
            goal_item_ids: ["Silver"],
            quantity: 1,
            points: 75,
            description: "Bala de ouro acertando estrela de prata",
        },
    ],
    "fire-ball": [
        {
            id: "silver-star",
            fire_item_id: "FireBall",
            goal_item_ids: ["Silver"],
            quantity: 1,
            points: 150,
            description: "Bala de fogo acertando estrela de prata",
        },
        {
            id: "silver-and-gold-star",
            fire_item_id: "FireBall",
            goal_item_ids: ["Silver", "SmallGold"],
            quantity: 1,
            points: 200,
            description: "Bala de fogo acertando estrela de prata e um estrela de ouro pequena",
        },
    ],
    "explosive-ball": [
        {
            id: "7-barrels",
            fire_item_id: "ExplosiveBall",
            goal_item_ids: ["Barrel"],
            quantity: 7,
            points: 450,
            description: "Bala explosiva acertando 7 barris válidos (comum)",
        },
        {
            id: "8-barrels",
            fire_item_id: "ExplosiveBall",
            goal_item_ids: ["Barrel"],
            quantity: 8,
            points: 500,
            description: "Bala explosiva acertando 8 barris válidos (médio)",
        },
        {
            id: "9-barrels",
            fire_item_id: "ExplosiveBall",
            goal_item_ids: ["Barrel"],
            quantity: 9,
            points: 550,
            description: "Bala explosiva acertando 9 barris válidos (raro)",
        },
    ],
};
