import { reactive, watch } from "vue";
import { Authority, Inventory, InventoryItemID, State, InventoryItem, Trades, TradeItemID, Goals, CannonFireID, CannonGoalID, GoalItem, TradeItem, CannonGoalOption } from "./types";
import { AUTHORITIES, CANNON_GOALS } from "@/constants";

export class GlobalState {
    private state: State = reactive({
        desired_authority: AUTHORITIES.none,
        current_authority: AUTHORITIES.none,
        needed_authority: 0,
        inventory: {
            "gold-ball": {
                id: "gold-ball",
                gala_item_id: "GoldBall",
                quantity: 0,
            },
            "fire-ball": {
                id: "fire-ball",
                gala_item_id: "FireBall",
                quantity: 0,
            },
            "eletric-ball": {
                id: "eletric-ball",
                gala_item_id: "EletricBall",
                quantity: 0,
            },
            "explosive-ball": {
                id: "explosive-ball",
                gala_item_id: "ExplosiveBall",
                quantity: 0,
            },
            "diamond-key": {
                id: "diamond-key",
                gala_item_id: "DiamondKey",
                quantity: 0,
            },
        },
        trades: {
            "1-diamond-key": {
                id: "1-diamond-key",
                item_id: "DiamondKey",
                item_quantity: 1,
                trade_item_id: "FireBall",
                trade_quantity: 9,
            },
            "10-diamond-key": {
                id: "10-diamond-key",
                item_id: "DiamondKey",
                item_quantity: 10,
                trade_item_id: "FireBall",
                trade_quantity: 100,
            },
            "100-diamond-key": {
                id: "100-diamond-key",
                item_id: "DiamondKey",
                item_quantity: 100,
                trade_item_id: "FireBall",
                trade_quantity: 1100,
            },
        },
        goals: {
            "gold-ball": {
                id: "gold-ball",
                option: "gold-star",
                fire_item_id: "GoldBall",
            },
            "fire-ball": {
                id: "fire-ball",
                option: "silver-star",
                fire_item_id: "FireBall",
            },
            "explosive-ball": {
                id: "explosive-ball",
                option: "7-barrels",
                fire_item_id: "ExplosiveBall",
            },
        },
    });

    constructor() {
        this.loadFromLocalStorage();
        this.updateNeededAuthorityPoints();
        watch(this.state, () => this.saveInLocalStorage());
    }

    getCurrentAuthority(): Authority {
        return this.state.current_authority;
    }

    getDesiredAuthority(): Authority {
        return this.state.desired_authority;
    }

    getNeededPoints(): number {
        let need = this.state.desired_authority.points - this.state.current_authority.points;
        if (need < 0) need = 0;
        return need;
    }

    getNeededAuthorityPoints() {
        return this.state.needed_authority;
    }

    updateNeededAuthorityPoints() {
        const need_points = this.state.desired_authority.points - this.state.current_authority.points;
        this.state.needed_authority = need_points > 0 ? need_points : 0;
    }

    getGoal(id: CannonFireID): GoalItem {
        return this.state.goals[id];
    }

    getInventory(): Inventory {
        return this.state.inventory;
    }

    getTrades(): Trades {
        return this.state.trades;
    }

    getCannonGoalOption(id: CannonFireID): CannonGoalOption {
        return CANNON_GOALS[id].find((option) => option.id === this.state.goals[id].option) as CannonGoalOption;
    }

    getTradeItem(id: TradeItemID): TradeItem {
        return this.state.trades[id];
    }

    getGoals(): Goals {
        return this.state.goals;
    }

    getInventoryItem(id: InventoryItemID): InventoryItem {
        return this.state.inventory[id];
    }

    setGoalChoice(id: CannonFireID, optionId: CannonGoalID) {
        this.state.goals[id].option = optionId;
    }

    setCurrentAuthority(authority: Authority): void {
        this.state.current_authority = authority;
    }

    setDesiredAuthority(authority: Authority): void {
        this.state.desired_authority = authority;
    }

    setInventoryItemQuantity(id: InventoryItemID, quantity: number): void {
        this.state.inventory[id].quantity = quantity;
    }

    setTradeItemQuantity(id: TradeItemID, quantity: number): void {
        this.state.trades[id].trade_quantity = quantity;
    }

    saveInLocalStorage() {
        const data = JSON.stringify(this.state);
        localStorage.removeItem("galaxy-calculadora");
        localStorage.setItem("galaxy-calculadora", data);
    }

    loadFromLocalStorage() {
        const json = localStorage.getItem("galaxy-calculadora");
        if (!json) return;
        const data = JSON.parse(json) as State;

        this.state.inventory = data.inventory;
        this.state.trades = data.trades;
        this.state.goals = data.goals;
        this.state.current_authority = data.current_authority;
        this.state.desired_authority = data.desired_authority;
    }
}

const global: GlobalState = new GlobalState();

export default global;
