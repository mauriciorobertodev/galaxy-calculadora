export type AuthorityID = "Dad" | "Angel" | "God" | "Almighty" | "Mister" | "Legend" | "Premier" | "Guardian" | "Emperor" | "Sovereign" | "Protector" | "Immortal" | "Glorious";

export type Authority = {
    id: AuthorityID;
    name: string;
    points: number;
    aura: string;
};

export type StartID = "1Point" | "2Point" | "3Point" | "4Point" | "Bronze" | "SmallGold" | "Silver" | "BigGold" | "DiamondRed" | "DiamondBlue" | "DiamondGreen" | "DiamondLightBlue" | "DiamondPurple" | "DiamondYellow" | "DiamondBlack";

export type Star = {
    id: StartID;
    name: string;
    points: number;
    img: string;
};

export type CannonGoalID = "GoldAndGold" | "GoldAndSilver" | "FireAndSilver" | "ExplosionAnd9Barrel" | "ExplosionAnd8Barrel" | "ExplosionAnd7Barrel";

export type CannonGoal = {
    id: CannonGoalID;
    imgs: {
        main: string;
        sub: string;
        quantity: number;
    };
    value: number;
    description: string;
};
