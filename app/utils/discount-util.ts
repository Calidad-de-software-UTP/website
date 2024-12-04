function processOrder(orderId: number, userId: number, discountCode: string): void {
    // Check if the user is eligible for a discount
    if (discountCode === "DISCOUNT10") {
        console.log(`User ${userId} gets a 10% discount on order ${orderId}.`);
    } else if (discountCode === "DISCOUNT20") {
        console.log(`User ${userId} gets a 20% discount on order ${orderId}.`);
    } else {
        console.log(`No discount for user ${userId} on order ${orderId}.`);
    }

    // Generate an invoice (fake logic)
    console.log(`Generating invoice for order ${orderId}.`);

    // Send a confirmation email
    console.log(`Sending confirmation email to user ${userId}.`);
}

function calculateDiscount10(price: number): number {
    const discount = price * 0.1;
    console.log(`Applying 10% discount: ${discount}`);
    return price - discount;
}

function calculateDiscount20(price: number): number {
    const discount = price * 0.2;
    console.log(`Applying 20% discount: ${discount}`);
    return price - discount;
}

function calculateFinalPrice(price: number, discountCode: string): number {
    if (discountCode === "DISCOUNT10") {
        return calculateDiscount10(price);
    } else if (discountCode === "DISCOUNT20") {
        return calculateDiscount20(price);
    } else {
        console.log("No discount applied.");
        return price;
    }
}


export {processOrder, calculateFinalPrice}