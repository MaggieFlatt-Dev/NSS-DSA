// ==============================
// Exercise 1: Help Maya Add Multiple Orders
// ==============================
// Task: Create a function \`addOrders\` that helps Maya add multiple orders to her array
// The function should add: "Flat White", "Cold Brew", "Double Espresso"

function addOrders(orderList) {
  // Add the three orders to Maya's list
  // Return the updated array
  orderList.push("Flat White")
  orderList.push("Cold Brew")
  orderList.push("Double Espresso")
  return orderList
}

let mayasOrders = ["Latte", "Cappuccino"];
mayasOrders = addOrders(mayasOrders);
console.log("Maya's updated orders:", mayasOrders); // Should show all 5 orders

// ==============================
// Exercise 2: Handle Priority Orders During Rush
// ==============================
// Task: Help Maya insert two VIP orders at the front of her queue
// Insert "VIP: Affogato" and "VIP: Cortado" at positions 0 and 1

let rushQueue = ["Americano", "Latte", "Mocha", "Espresso"];
// Insert both VIP orders at the beginning
// Use splice to insert "VIP: Affogato" at index 0
// Then insert "VIP: Cortado" at index 1
rushQueue.splice(0, 0, "VIP: Affogato")
rushQueue.splice(1, 0, "VIP: Cortado")

console.log("Rush queue with VIP orders:", rushQueue);

// ==============================
// Exercise 3: Fix Multiple Order Mistakes
// ==============================
// Task: Maya made some mistakes! Help her fix them:
// 1. Remove the two incorrect orders at indices 2 and 3
// 2. Update the first order from "Latter" to "Latte"

let mistakeOrders = ["Large Latter", "Cappuccino", "Wrong Order 1", "Wrong Order 2", "Espresso"];
// Fix the typo in the first order
// Remove the two wrong orders (indices 2 and 3)
mistakeOrders[0] = "Large Latte";
mistakeOrders.splice(2, 2);

console.log("Fixed orders:", mistakeOrders);

// ==============================
// Exercise 4: Create an Efficient Order Processing System
// ==============================
// Task: Help Maya create a function that processes orders and shows progress
// The function should loop through all orders and print each one with its position

function processOrders(orders) {
  // Use a for...of loop or traditional for loop
  for (let i = 0; i < orders.length; i++) {
    let order = orders[i];
    const position = i + 1;
  // Print each order with format: "Making order X of Y: [order name]"
  // X is current index + 1, Y is total length
  console.log(`Making order ${position} of ${orders.length}: ${order}`)
  }
}

let afternoonOrders = ["Cappuccino", "Iced Latte", "Americano", "Mocha"];
processOrders(afternoonOrders);





//Lightning-Fast Operations (O(1) - Constant Time)

let orders = ["Latte", "Cappuccino", "Americano", "Mocha"];

// These are ALWAYS fast, regardless of array size:

// 1. Accessing by index - we know exactly where to look
let thirdOrder = orders[2]; // Always instant

// 2. Adding to the end - just append to the last position  
orders.push("Espresso"); // Always instant

// 3. Removing from the end - just remove the last element
let lastOrder = orders.pop(); // Always instant

// 4. Updating existing elements - direct replacement
orders[1] = "Large Cappuccino"; // Always instant

// 5. Getting the length - JavaScript keeps track of this
let totalOrders = orders.length; // Always instant



//Slower Operations (O(n) - Linear Time)

// These get slower as the array grows:

// 1. Inserting in the middle - must shift elements right
orders.splice(1, 0, "Priority Order"); // Slower with more orders

// 2. Removing from middle - must shift elements left  
orders.splice(2, 1); // Slower with more orders

// 3. Adding to the beginning - must shift everything right
orders.unshift("First Order"); // Slower with more orders

// 4. Removing from beginning - must shift everything left
orders.shift(); // Slower with more orders

// 5. Searching for a specific order - might need to check each one
let latteIndex = orders.indexOf("Latte"); // Slower with more orders



// Efficient approach for busy periods
function efficientOrderHandling() {
    let orders = [];
    
    // Fast operations - use these during rush hour
    orders.push("Order 1");        // O(1) - instant
    orders.push("Order 2");        // O(1) - instant  
    orders.push("Order 3");        // O(1) - instant
    
    let nextOrder = orders[0];     // O(1) - instant access
    let completed = orders.pop();   // O(1) - instant removal
    
    return orders;
}

// Less efficient approach - avoid during busy times
function slowOrderHandling() {
    let orders = ["Order 1", "Order 2", "Order 3"];
    
    // Slow operations - these get worse with more orders
    orders.unshift("Priority");     // O(n) - shifts everything
    orders.splice(1, 0, "Insert"); // O(n) - shifts many elements
    orders.shift();                 // O(n) - shifts everything left
    
    return orders;
}

// Maya's Order class - represents a single coffee order
class Order {
    constructor(type, table, isRush = false) {
        this.type = type;
        this.table = table;
        this.isRush = isRush;
        this.timestamp = new Date();
    }
    
    serve() {
        const rushIndicator = this.isRush ? "🚨 RUSH" : "";
        console.log(`Serving ${this.type} to table ${this.table} ${rushIndicator}`);
    }
    
    getWaitTime() {
        return Date.now() - this.timestamp.getTime();
    }
}

// Maya's CoffeeShop class - manages all orders efficiently
class CoffeeShop {
    constructor(name) {
        this.name = name;
        this.orders = []; // Our trusty array!
        this.completedOrders = [];
    }
    
    // Add new order (always fast - O(1))
    takeOrder(type, table, isRush = false) {
        const order = new Order(type, table, isRush);
        
        if (isRush) {
            // Priority orders go to the front (O(n) but rare)
            this.orders.unshift(order);
            console.log(`🚨 Priority order added: ${type} for table ${table}`);
        } else {
            // Regular orders go to the end (O(1) - fast!)
            this.orders.push(order);
            console.log(`Order added: ${type} for table ${table}`);
        }
    }
    
    // Process next order (fast - O(1))
    serveNextOrder() {
        if (this.orders.length === 0) {
            console.log("No orders to serve!");
            return null;
        }
        
        // Serve the first order in line
        const order = this.orders.shift(); // O(n) but necessary for FIFO
        order.serve();
        this.completedOrders.push(order);
        
        return order;
    }
    
    // Check current queue status (fast - O(1))
    getQueueStatus() {
        return {
            pending: this.orders.length,
            completed: this.completedOrders.length,
            nextOrder: this.orders[0] || null
        };
    }
    
    // Process all orders efficiently (O(n))
    processAllOrders() {
        console.log(`\n🏪 ${this.name} - Processing all orders...`);
        
        while (this.orders.length > 0) {
            this.serveNextOrder();
        }
        
        console.log(`✅ All orders completed! Total served: ${this.completedOrders.length}`);
    }
    
    // Show current orders (O(n) for display)
    displayQueue() {
        console.log(`\n📋 Current Queue at ${this.name}:`);
        
        if (this.orders.length === 0) {
            console.log("  No pending orders");
            return;
        }
        
        this.orders.forEach((order, index) => {
            const position = index + 1;
            const rushFlag = order.isRush ? "🚨" : "  ";
            console.log(`  ${position}. ${rushFlag} ${order.type} (Table ${order.table})`);
        });
    }
}

// Create Maya's coffee shop
const mayasShop = new CoffeeShop("The Daily Grind");

// Simulate a busy morning
console.log("🌅 Morning rush begins!");

// Regular orders come in
mayasShop.takeOrder("Cappuccino", 2);
mayasShop.takeOrder("Latte", 1);
mayasShop.takeOrder("Americano", 4);

// Show the queue
mayasShop.displayQueue();

// A rush order comes in!
mayasShop.takeOrder("Double Espresso", 3, true);

// Show updated queue
mayasShop.displayQueue();

// Process some orders
mayasShop.serveNextOrder();
mayasShop.serveNextOrder();

// Check status
console.log("Status:", mayasShop.getQueueStatus());

// Process remaining orders
mayasShop.processAllOrders();