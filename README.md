# bamazon

### Bamazon Overview
Bamazon is your Amazon-like storefront from the command line! This app uses Node, MySQL, and NPM packages like Inquirer to bring that experience to you! This application contains two different interfaces. One for the customer, and one for the managers.

### How was this app created?
Bamazon was created using Node.JS & MySQL and utilizes the following NPM packages:
* [Inquirer](https://www.npmjs.com/package/inquirer)
* [MySQL](https://www.npmjs.com/package/mysql)
* [MySQL Workbench](https://dev.mysql.com/downloads/workbench/)

### Before You Run this App
In order to run this application, you should have the MySQL database and workbench already downloaded onto your machine. If you dont, please visit the link above to download it. Once you have it installed, you will be able to clone this repository and create the *Bamazon* database using the SQL file on the respository. But before you can begin shopping, open the **bamazonCustomer.js** file in the terminal and make sure you complete the following steps: 

	npm init
	npm install mysql --save
	npm install inquirer --save
	node bamazonCustomer.js

Then the app is ready to use and you can begin using the customer interface!

### The Customer Interface
The customer interface will allow the user to view the current inventory of the items in the store. The app will display the Item ID, Name, and also the price. The user is able to purchase any of the items in the inventory by inputting the ID of the item, and also the quantity of that specific item. If the item is available in the quantity that they require, the order will be fulfilled and show the user their total price and will update the exisiting quantity in the SQL database. If there is not enough product available, the user will be displayed the items again and prompted to modify their quantity.

**DEMO:** If you would like to see the cusomter interface in action, [click here](https://youtu.be/r19Qf_GcRtw)

### The Manager Interface

Because you have already installed the packages, just open up the **bamazonManager.js** file in the terminal and type the following:

	node bamazonManager.js

The manager interface provides different options and will display the following menu:

	? See the following menu options: (Use arrow keys)
	❯ View Products for Sale 
	  View Low Inventory 
	  Add to Inventory 
	  Add New Product
    
* **View Products for Sale:** This option will list every available item: the item IDs, names, prices, and quantities.
* **View Low Inventory:** This will display all the items with a stock quantity count lower than or equal to five.
* **Add to Inventory:** The app will display a prompt that will let the manager add to the count of any item currently in inventory.
* **Add New Product:** This will allow a manager to add an entirely new product to the inventory.

**DEMO:** If you would like to see the manager interface in action, [click here](https://youtu.be/Bnhduh8PYFw)

	  
