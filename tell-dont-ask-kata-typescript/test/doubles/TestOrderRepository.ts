import OrderRepository from "../../src/repository/OrderRepository";
import Order from "../../src/domain/Order";

export default class TestOrderRepository implements OrderRepository {
    private _insertedOrder: Order | undefined = undefined;
    private _orders: Order[];

    constructor(){
        this._orders = [];
    }

    getById(id: number): Order | undefined{
        return this._orders.find(o => o.id == id);
    }

    save(order: Order): void {
        this._insertedOrder = order;
    }

    public getSavedOrder(): Order | undefined {
        return this._insertedOrder;
    }

    public addOrder(order: Order): void {
        this._orders.push(order)
    }
}
