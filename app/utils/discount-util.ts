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

export default processOrder