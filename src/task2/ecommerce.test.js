import { fetchOrderById, allIds } from "../api";
import { bucketOrdersByDate, bucketOrdersByUsers, fetchAllOrders, getLast2WeeksOrders } from "./ecommerce";

const ORDER_ID = "70ef599e5eca171b2bce84d1";
test("Ecommerce - fetchOrderById", async () => {
    let orders = await fetchOrderById(ORDER_ID);
    expect(orders).toBeTruthy();
});

test("Ecommerce - fetchAllOrders", async () => {
    const allOrders = await fetchAllOrders();
    expect(allOrders.length).toEqual(allIds.length)
});

test("Ecommerce - bucketOrdersByUsers", async () => {
    let allOrders = []
    const ordersByUsers = await bucketOrdersByUsers();
    for (const orders in ordersByUsers) {
        allOrders.push(...ordersByUsers[orders])
    }
    expect(allOrders.length).toEqual(allIds.length);
});

test("Ecommerce - getLast2WeeksOrders", async () => {
    const orders = await getLast2WeeksOrders();
    expect(orders.length).toBeLessThanOrEqual(allIds.length)
});

test("Ecommerce - bucketOrdersByDate", async () => {
    let allOrders = []
    const ordersByDate = await bucketOrdersByDate();
    for (const orders in ordersByDate) {
        allOrders.push(...ordersByDate[orders])
    }
    expect(allOrders.length).toEqual(allIds.length);
});


