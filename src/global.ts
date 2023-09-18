import { reactive, watch } from "vue";
import { Authority, Inventory, InventoryItemID, State, InventoryItem, Trades, TradeItemID } from "./types";
import { AUTHORITIES } from "@/constants";

export class GlobalState {
    private state: State = reactive({
        desired_authority: { ...AUTHORITIES[0] },
        current_authority: { ...AUTHORITIES[0] },
        needed_authority: 0,
        inventory: {
            BlackBall: {
                id: "BlackBall",
                quantity: 0,
            },
            GoldBall: {
                id: "GoldBall",
                quantity: 0,
            },
            FireBall: {
                id: "FireBall",
                quantity: 0,
            },
            ExplosiveBall: {
                id: "ExplosiveBall",
                quantity: 0,
            },
            EletricBall: {
                id: "EletricBall",
                quantity: 0,
            },
            DiamondKey: {
                id: "DiamondKey",
                quantity: 0,
            },
        },
        trades: {
            "1DiamondKey": {
                id: "1DiamondKey",
                item_id: "DiamondKey",
                item_quantity: 1,
                trade_item_id: "FireBall",
                trade_quantity: 9,
            },
            "10DiamondKey": {
                id: "10DiamondKey",
                item_id: "DiamondKey",
                item_quantity: 10,
                trade_item_id: "FireBall",
                trade_quantity: 100,
            },
            "100DiamondKey": {
                id: "100DiamondKey",
                item_id: "DiamondKey",
                item_quantity: 100,
                trade_item_id: "FireBall",
                trade_quantity: 1100,
            },
        },
    });

    constructor() {
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

    getNeededAuthorityPoints(): number {
        return this.state.needed_authority;
    }

    getInventory(): Inventory {
        return this.state.inventory;
    }

    getTrades(): Trades {
        return this.state.trades;
    }

    getInventoryItem(id: InventoryItemID): InventoryItem {
        return this.state.inventory[id];
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
    }
}

const global: GlobalState = new GlobalState();

export default global;

global.loadFromLocalStorage();
