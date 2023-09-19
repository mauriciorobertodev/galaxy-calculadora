// galaxy items
export type GalaxyItemID =
    | "FireBall"
    | "BlackBall"
    | "GoldBall"
    | "ExplosiveBall"
    | "EletricBall"
    | "DiamondKey"
    | "Barrel"
    | "1Point"
    | "2Point"
    | "3Point"
    | "4Point"
    | "Bronze"
    | "SmallGold"
    | "Silver"
    | "BigGold"
    | "DiamondRed"
    | "DiamondBlue"
    | "DiamondGreen"
    | "DiamondLightBlue"
    | "DiamondPurple"
    | "DiamondYellow"
    | "DiamondBlack";

export type GalaxyItem = {
    name: string;
    img: string;
};

// authorities
export type AuthorityID = "none" | "Dad" | "Angel" | "God" | "Almighty" | "Mister" | "Legend" | "Premier" | "Guardian" | "Emperor" | "Sovereign" | "Protector" | "Immortal" | "Glorious";

export type Authority = {
    id: AuthorityID;
    name: string;
    points: number;
    aura: string;
};

// stars
export type StartID = "1Point" | "2Point" | "3Point" | "4Point" | "Bronze" | "SmallGold" | "Silver" | "BigGold" | "DiamondRed" | "DiamondBlue" | "DiamondGreen" | "DiamondLightBlue" | "DiamondPurple" | "DiamondYellow" | "DiamondBlack";

export type Star = {
    name: string;
    points: number;
    gala_item_id: GalaxyItemID;
};

// cannon goals
export type CannonFireID = "gold-ball" | "fire-ball" | "explosive-ball";

export type CannonGoalID = "gold-star" | "silver-star" | "silver-and-gold-star" | "7-barrels" | "8-barrels" | "9-barrels";

export type CannonGoalOption = {
    id: CannonGoalID;
    fire_item_id: GalaxyItemID;
    goal_item_ids: GalaxyItemID[];
    quantity: number;
    points: number;
    description: string;
};

// inventory
export type InventoryItemID = "fire-ball" | "gold-ball" | "explosive-ball" | "eletric-ball" | "diamond-key";

export type InventoryItem = {
    gala_item_id: GalaxyItemID;
    quantity: number;
};

export type Inventory = { [key in InventoryItemID]: InventoryItem };

// trade
export type TradeItemID = "1-diamond-key" | "10-diamond-key" | "100-diamond-key";

export type TradeItem = {
    item_id: GalaxyItemID;
    item_quantity: number;
    trade_item_id: GalaxyItemID;
    trade_quantity: number;
};

export type Trades = { [key in TradeItemID]: TradeItem };

// goals
export type Goals = { [key in CannonFireID]: { fire_item_id: GalaxyItemID; option: CannonGoalID } };

// state
export type State = {
    desired_authority: Authority;
    current_authority: Authority;
    needed_authority: number;
    inventory: Inventory;
    trades: Trades;
    goals: Goals;
};
