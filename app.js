const fs = require("fs")
const yargs = require("yargs");
const {addOrder, listOrders, removeOrder} = require("./orders.js");

const myCommand = process.argv[2];

if (myCommand === "add") {
    console.log("Your order has been added!");
    addOrder(yargs.argv.order);

} else if (myCommand === "remove") {
    console.log("Your order has been removed")
    removeOrder(yargs.argv.order);

} else if (myCommand === "list") {
    console.log("The current orders are:")
    listOrders();
}