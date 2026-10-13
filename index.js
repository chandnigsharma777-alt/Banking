let customerId = "C101";
let amount = 6000;
let category = "Premium";
let location = "Local";

let discount = 0;
let deliveryCharge = 0;

category = category.toLowerCase();
location = location.toLowerCase();

if (category === "premium") {
    discount = amount * 0.15;
} else if (category === "regular") {
    discount = amount * 0.05;
}

if (amount > 5000) {
    discount += 500;
}

if (discount > amount * 0.20) {
    discount = amount * 0.20;
}

if (amount >= 3000) {
    deliveryCharge = 0;
} else if (location === "local") {
    deliveryCharge = 50;
} else if (location === "city") {
    deliveryCharge = 100;
} else if (location === "other") {
    deliveryCharge = 150;
}

let finalAmount = amount - discount + deliveryCharge;

console.log("===== ORDER SUMMARY =====");
console.log("Customer ID: " + customerId);
console.log("Customer Category: " + category);
console.log("Original Order Amount: Rs. " + amount.toFixed(2));
console.log("Discount Amount: Rs. " + discount.toFixed(2));
console.log("Delivery Charge: Rs. " + deliveryCharge.toFixed(2));
console.log("Final Payable Amount: Rs. " + finalAmount.toFixed(2));