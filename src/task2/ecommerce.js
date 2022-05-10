////////////////////////////////////////////// Helper code, do not edit /////////////////////////////////////////
import { allIds, fetchOrderById } from "../api";

////////////////////////////////// Your code tasks is below //////////////////////////////////////////////////////

export const fetchAllOrders = async () => {
    const ids = allIds;
    // .....
    //   1. TODO: fetch all ids using the "fetchOrderById" and the given ids, make it work as efficient and clean as possible.
    let orders = allIds.map((id) => fetchOrderById(id));
    orders = await Promise.all(orders);
    return orders;
};

export const bucketOrdersByUsers = async () => {
    let ordersByUsers = {};
    //   2. TODO: using the function from section 1 you should now bucket the orders by user.
    // each key in the object (ordersByUsers) represents a userId and each value is an array of the orders of that user.
    const orders = await fetchAllOrders();
    orders.forEach((order) => {
        ordersByUsers[order.userId] = ordersByUsers[order.userId] ? [...ordersByUsers[order.userId], order] : [order]
    });
    return ordersByUsers;
};

export const getLast2WeeksOrders = async () => {
    //   3. TODO: fetch all Ids and return array with only the last 2 weeks orders. make it work as efficient and clean as possible.
    const date = new Date();
    const twoWeeksAgo = date - 1000 * 60 * 60 * 24 * 14;    
    const orders = await fetchAllOrders();
    const ordersLast2Weeks = orders.filter(order => order.timestamp > twoWeeksAgo)
    return ordersLast2Weeks
};

export const bucketOrdersByDate = async () => {
    let ordersByDate = {};
    //   4. TODO: using the function from section 3 bucket the orders by date.
    // each key in the object (ordersByDate) represents a day and each value is an array of the orders in that date.
    const orders = await fetchAllOrders();
    orders.forEach((order) => {
        const date = new Date(order.timestamp).toDateString()
        ordersByDate[date] = ordersByDate[date] ? [...ordersByDate[date], order] : [order]
    });
    return ordersByDate;
};

fetchAllOrders()
// .then(console.log);

bucketOrdersByUsers()
// .then(console.log);

getLast2WeeksOrders()
// .then(console.log);

bucketOrdersByDate()
// .then(console.log);

////////////////////////////////////////
