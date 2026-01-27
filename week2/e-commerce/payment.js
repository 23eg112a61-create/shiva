import { reduceStock } from './product.js';
import { getCartItems, getCartTotal, clearCart } from './cart.js';
import { applyDiscount } from './discount.js';  
// TODO: Implement these functions 
 export function processPayment(paymentMethod, couponCode = null) {
// 1. Get cart items and total
    const items = getCartItems();
    const subtotal = getCartTotal();
    let discount = 0;
    let total = subtotal;
    // 2. Apply discount if coupon provided
    if (couponCode) {
      discount = applyDiscount(subtotal, couponCode);
      total = subtotal - discount;
    }
    // 3. Validate payment method (card/upi/cod)
    const validMethods = ['card', 'upi', 'cod'];
    if (!validMethods.includes(paymentMethod)) {
      return {
        orderId: null,
        items: [],
        subtotal: 0,
        discount: 0,
        total: 0,
        paymentMethod: paymentMethod,
        status: 'failed',
        message: 'Invalid payment method'
      }
    }
    //4. Process payment (simulate)
    const paymentSuccess = true; // Simulate always success
    if (!paymentSuccess) {
      return {
        orderId: null, 
        items: [],
        subtotal: 0,
        discount: 0,
        total: 0,
        paymentMethod: paymentMethod,
        status: 'failed',
        message: 'Payment failed'
      }
    } 
    // 5. Reduce stock for all items
    items.forEach(item => {
      reduceStock(item.id, item.quantity);
    });
    // 6. Clear cart
    clearCart();
    // 7. Generate order summary
    const orderId = generateOrderId();
    return {
        orderId: orderId,
        items: items,
        subtotal: subtotal,
        discount: discount,
        total: total,
        paymentMethod: paymentMethod,
        status: 'success',
        message: 'Payment processed successfully'
      } 
  
                          }
                          
                          export function validatePaymentMethod(method) {
                            // Check if method is valid (card/upi/cod)
                            const validMethods = ['card', 'upi', 'cod'];
                            return validMethods.includes(method);
                          }
                          
                          function generateOrderId() {
                            // Generate random order ID 
                            const orderId = 'ORD' + Date.now();
                            return orderId;
                          }
