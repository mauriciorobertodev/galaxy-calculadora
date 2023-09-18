export type AuthorityID = "None" | "Dad" | "Angel" | "God" | "Almighty" | "Mister" | "Legend" | "Premier" | "Guardian" | "Emperor" | "Sovereign" | "Protector" | "Immortal" | "Glorious";

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

export type Inventory = { [key in InventoryItemID]: InventoryItem };

export type GalaxyItemID = "FireBall" | "BlackBall" | "GoldBall" | "ExplosiveBall" | "EletricBall" | "DiamondKey";

export type GalaxyItem = {
    name: string;
    img: string;
};

export type InventoryItemID = Extract<GalaxyItemID, "FireBall" | "BlackBall" | "GoldBall" | "ExplosiveBall" | "EletricBall" | "DiamondKey">;

export type InventoryItem = {
    id: InventoryItemID;
    quantity: number;
};

export type State = {
    desired_authority: Authority;
    current_authority: Authority;
    needed_authority: number;
    inventory: Inventory;
    trades: Trades;
};

export type TradeItemID = "1DiamondKey" | "10DiamondKey" | "100DiamondKey";

export type TradeItem = {
    id: TradeItemID;
    item_id: GalaxyItemID;
    item_quantity: number;
    trade_item_id: GalaxyItemID;
    trade_quantity: number;
};

export type Trades = { [key in TradeItemID]: TradeItem };
