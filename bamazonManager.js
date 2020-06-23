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
    displayMenu();
});

function displayMenu(){
    inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'See the following menu options',
            choices: ['View Products for Sale', 'View Low Inventory', 'Add to Inventory', 'Add New Product', 'Exit']
        }
    ]).then(function(response){
        if(response.menu == 'View Products for Sale'){
          displayProducts();
        }
        else if(response.menu == 'View Low Inventory'){
            lowInventory();
        }
        else if(response.menu =='Add to Inventory'){
            addInventory();
        }
        else if(response.menu == 'Add New Product'){
            addProduct();
        }
        else if(response.menu == 'Exit'){
            connection.end();
        }
        else{
            console.log("Invalid Choice!");
            displayMenu();
        }
    });
};

//retrieve current inventory
function displayProducts(){
    console.log("CURRENT PRODUCTS IN INVENTORY\n");
    console.log("---------------------------");
    connection.query("SELECT * FROM products", function (err,res){
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log("ITEM ID: " +res[i].item_id + " | " + "ITEM: " + res[i].product_name + " | " + "PRICE: " + res[i].price + " | " + "QUANTITY: " + res[i].stock_quantity) ;
            console.log("-----------------------------------\n");
          };
        }); 
      connection.end();   
};

//function to display inventory that is less than or equal to 5
function lowInventory(){
    connection.query("SELECT * FROM products WHERE stock_quantity <= 5", function(err,res){
        if(err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log("ITEM ID: " +res[i].item_id + " | " + "ITEM: " + res[i].product_name + " | " + "PRICE: " + res[i].price + " | " + "QUANTITY: " + res[i].stock_quantity);
            console.log("-----------------------------------\n");
          };
    });
    connection.end();
};

//function to add to the stock quantity of a current product
function addInventory(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'id',
            message: 'Please Enter the Item ID to add to their Stock Quantity'
        },
        {
            type: 'input',
            name: 'quantity',
            message: 'How much more would you like to add?'   
        }
    ]).then(function(response){
        connection.query("SELECT * FROM products", function(err, res) {
            if (err) throw err;
            var chosenItem="";
            for (var i = 0; i < res.length; i++) {
                if (res[i].item_id == parseInt(response.id)) {
                chosenItem = res[i];
                }
            }
            
            //update the quantity for selected item id
            connection.query("UPDATE products SET ? WHERE ?",
                [
                    {
                    stock_quantity: chosenItem.stock_quantity += parseInt(response.quantity)
                    },
                    {
                    item_id: chosenItem.item_id
                    }
                ],
                function(err) {
                    if (err) throw err;
                    //show message that certain product and its quantity has been updated in the inventory.
                    console.log("Added "+ response.quantity + " " + chosenItem.product_name + " to the inventory.");
                    connection.end();
                }
                );
        });
    });
};


//function to add product to inventory
function addProduct(){
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Item Name: "
        },
        {
            type: "input",
            name: "department",
            message: "Item Department: "
        },
        {
            type: "input",
            name: "price",
            message: "Item Price: "
        },
        {
            type: "input",
            name: "quantity",
            message: "Item Quantity: "
        }
        
    ]).then(function(result){
        console.log("Adding your item to the inventory...\n");
        connection.query(
         "INSERT INTO products SET ?",
         {
             product_name: result.name,
             department_name: result.department,
             price: result.price,
             stock_quantity: result.quantity
         },
         function(err,res){
            if(err)throw err;
            console.log(res + "item added... \n");
         }   
         
        );
        connection.end();
    });
};

