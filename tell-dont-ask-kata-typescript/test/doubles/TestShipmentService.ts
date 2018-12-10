import Order from "../../src/domain/Order";
import ShipmentService from "../../src/service/ShipmentService";

export default class TestShipmentService implements ShipmentService {
    private _shippedOrder?: Order = undefined;

    ship(order: Order): void {
        this._shippedOrder = order;
    }

    public getShippedOrder(): Order | undefined{
        return this._shippedOrder;
    }
}
