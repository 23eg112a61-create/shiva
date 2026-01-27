// cart.js - Shopping cart operations
import { getProductById, checkStock } from './product.js';

let cartItems = [];

/**
 * Add product to cart
 */
export function addToCart(productId, quantity) {
  const product = getProductById(productId);
  if (!product) {
    return { success: false, message: 'Product not found' };
  }

  if (!checkStock(productId, quantity)) {
    return { success: false, message: 'Insufficient stock available' };
  }

  const existingItem = cartItems.find(item => item.product.id === productId);

  if (existingItem) {
    const newQuantity = existingItem.quantity + quantity;
    if (!checkStock(productId, newQuantity)) {
      return { success: false, message: 'Not enough stock to update quantity' };
    }
    existingItem.quantity = newQuantity;
  } else {
    cartItems.push({ product, quantity });
  }

  return { success: true, message: 'Product added to cart successfully' };
}

/**
 * Remove product from cart
 */
export function removeFromCart(productId) {
  const index = cartItems.findIndex(item => item.product.id === productId);
  if (index === -1) {
    return { success: false, message: 'Product not found in cart' };
  }
  cartItems.splice(index, 1);
  return { success: true, message: 'Product removed from cart' };
}

/**
 * Update quantity of product in cart
 */
export function updateQuantity(productId, newQuantity) {
  const item = cartItems.find(item => item.product.id === productId);
  if (!item) {
    return { success: false, message: 'Product not found in cart' };
  }

  if (!checkStock(productId, newQuantity)) {
    return { success: false, message: 'Insufficient stock available' };
  }

  item.quantity = newQuantity;
  return { success: true, message: 'Quantity updated successfully' };
}

/**
 * Get all cart items
 */
export function getCartItems() {
  return cartItems.map(item => ({
    id: item.product.id,
    name: item.product.name,
    price: item.product.price,
    quantity: item.quantity,
    total: item.product.price * item.quantity
  }));
}

/**
 * Get cart total price
 */
export function getCartTotal() {
  return cartItems.reduce((total, item) => {
    return total + item.product.price * item.quantity;
  }, 0);
}

/**
 * Clear the cart
 */
export function clearCart() {
  cartItems = [];
  return { success: true, message: 'Cart cleared successfully' };
}