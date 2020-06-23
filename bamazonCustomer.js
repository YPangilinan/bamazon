//require sql
var mysql = require('mysql');
//require inquirer
var inquirer = require('inquirer');

//establish connection to database
var connection = mysql.createConnection({

    host: "localhost",

    port: 3306,

    user: "root",

    password: "",
    database: "bamazon"
});

connection.connect(function(err){
    if(err)throw err;
    console.log("connected as id " + connection.threadId);
    displayProducts();
});
//once the application is ran, it will display all the items to the user
function displayProducts(){
    console.log("CURRENT PRODUCTS IN INVENTORY\n");
    console.log("---------------------------");
    connection.query("SELECT * FROM products", function (err,res){
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log("ITEM ID: " +res[i].item_id + " | " + "ITEM: " + res[i].product_name + " | " + "PRICE: " + res[i].price);
            console.log("-----------------------------------\n");
          };
          //after showing the menu, begin prompt to user
          purchaseProduct(); 
    });  
};
//prompt then asks ID of the product they would like to buy & quantity
function purchaseProduct(){
    inquirer.prompt([{
        name: "id",
        type: "input",
        message: "Enter the ID of the item you would like to purchase: "
    },
    {
        name: "quantity",
        type: "input",
        message: "How many of this item would you like to purchase? "
    }
]).then(function(response){
    connection.query("SELECT * FROM products", function (err,res){
        if (err) throw err;
        var pickedItem= "";
        for (var i = 0; i < res.length; i++) {
            if(res[i].item_id == parseInt(response.id)){
                pickedItem = res[i];
            }
          }
        if(pickedItem.stock_quantity > parseInt(response.quantity)){
        connection.query("UPDATE products SET ? WHERE ?",
            [
                {
                    stock_quantity: pickedItem.stock_quantity -= parseInt(response.quantity)
                },
                {
                    item_id: pickedItem.item_id
                }
            ],
            function(error){
                if(error) throw error;
                console.log("Thank you for shopping at bamazon! Your total comes out to: $" + parseInt(response.quantity) * pickedItem.price);
                connection.end();
            } 
        );
        } else{
            console.log("So sorry! We do not have enough stock to cover your needs!");
            console.log("Please try again! We'd love for you to continue shopping with us!");
            console.log("--------------------------------\n");
            displayProducts();
        }; 
    }); 
});
};