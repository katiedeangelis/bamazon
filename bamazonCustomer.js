//Dependencies
var mysql = require("mysql");
var inquirer = require("inquirer");
require("console.table")

//Define and assign server connection variable
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "",
    database: "bamazonDB"
});

//Connect to the server, if there is an issue throw an error. If successful, run the inital search
connection.connect(function (err) {
    if (err) throw err;
    runSearch();
});

//Loop through the databse and display all products with ID, Department, Price, and Stock Quantity
function runSearch() {
    var query = "SELECT * FROM bamazonDB.products;";
    connection.query(query, function (err, res) {
        console.table("\x1b[33m", res);
        selectProduct();
    });
}

function selectProduct() {
    inquirer
        .prompt([
            //Prompt the user for the ID of the item they would like to purchase.
            {
                type: "input",
                message: "Enter the ID of the product you would like to purchase:",
                name: "id",
                validate: function (input) {
                    var id = parseInt(input);
                    if (id) {
                        // Pass the return value in the done callback
                        return true
                    }
                    // Pass the return value in the done callback
                    return "Please enter a valid numerical id."
                }
            }, {
                type: "input",
                message: "Enter the quantity of the product you would like to purchase:",
                name: "quant",
                validate: function (input) {
                    var quant = parseInt(input);
                    if (quant && quant > 0) {
                        // Pass the return value in the done callback
                        return true
                    }
                    // Pass the return value in the done callback
                    return "Please enter a valid numerical quantity greater than zero."
                }
            }
        ])
        .then(function (inquirerResponse) {
            var query = "SELECT * FROM bamazonDB.products WHERE id = " + inquirerResponse.id + ";";
            connection.query(query, function (err, res) {
                if (res.length > 0) {
                    var stockQuant = res[0].stock_quantity;
                    var requestQuant = inquirerResponse.quant;
                    var orderCost = res[0].price * requestQuant;
                    if (stockQuant >= requestQuant) {
                        stockQuant -= requestQuant
                        connection.query(
                            "UPDATE products SET ? WHERE ?", [{
                                    stock_quantity: stockQuant
                                },
                                {
                                    id: inquirerResponse.id
                                }
                            ],
                            function (err, res) {
                                console.log("\x1b[32m", "Your total comes to $" + orderCost + " Your order has been placed and the product updated. Thank you for shoping at Bamazon!")
                            }
                        );
                    } else {
                        console.error("\x1b[31m", "Insufficient stock quantity to fulfill order. Please select a different product/quantity.");
                        selectProduct();
                    }
                } else {
                    console.error("\x1b[31m", "That item does not exist. Please select a different id.");
                    selectProduct();
                }
            });
        });
}