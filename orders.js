const fs = require("fs")

const addOrder = (myOrder) => {
    const allOrders = loadOrders();
    allOrders.push({CoffeOrder: myOrders});
    saveOrder(allOrders);
}

const removeOrder = (deletedOrder) => {
    const allOrders = loadOrders();

    const ordersToKeep = allOrders.filter((order) => {
        return order.Order !== deletedOrder
    })
    saveOrder(ordersToKeep);
}

const saveOrder = (orders) => {
    const notesJSON = JSON.stringify(orders);
    fs.writeFileSync("orders.json", notesJSON);
}

const listOrders = () => {
    const allOrders = loadOrders();

    allOrders.map((orders) => {
        console.log(orders.CoffeOrder)
    })
}

const loadOrders= () => {
    try {
        const dataBuffer = fs.readFileSync("orders.json")
        const ordersJSON = dataBuffer.toString();
        return JSON.parse(ordersJSON);

    } catch (e) {
        return [];
    }
}

module.exports = {
    addOrder,
    loadOrders,
    listOrders,
    removeNote,
}