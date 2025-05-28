export * from './coffeeTypesApi';
import { CoffeeTypesApi } from './coffeeTypesApi';
export * from './ordersApi';
import { OrdersApi } from './ordersApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor(public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [CoffeeTypesApi, OrdersApi];
