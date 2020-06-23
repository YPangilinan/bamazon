//require sql
var mysql = require('mysql');
//require inquirer
var inquirer = require('inquirer');
//establish connection to database
var connection = mysql.createConnection({

    host: "localhost",

    port: 3306,

    user: "root",

    password: "Cabuntucan1@",
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
            console.log("-----------------------------------");
          };
        });   
};
//prompt then asks ID of the product they would like to buy

//prompt to ask the quantity

//check if there is enough quantity, if not, log "insufficient quanitity", error unfulfilled order

//if enough quantity, update sql database to reflect new quantity

//show user the total cost