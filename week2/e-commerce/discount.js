/*cart.js - Shopping cart operations
                          import { getProductById, checkStock } from './product.js';
                          
                          let cartItems = [];
                          
                          // TODO: Implement these functions
                          
                          export function addToCart(productId, quantity) {
                            // 1. Get product details
                            // 2. Check stock availability
                            // 3. Check if product already in cart
                            //    - If yes, update quantity
                            //    - If no, add new item
                            // 4. Return success/error message
                          }
                          
                          export function removeFromCart(productId) {
                            // Remove product from cart
                          }
                          
                          export function updateQuantity(productId, newQuantity) {
                            // Update quantity of product in cart
                            // Check stock before updating
                          }
                          
                          export function getCartItems() {
                            // Return all cart items with product details
                          }
                          
                          export function getCartTotal() {
                            // Calculate total price of all items in cart
                            // Return total
                          }
                          
                          export function clearCart() {
                            // Empty the cart
                          }*/
 import { getProductById, checkStock } from './product.js';

                          let cartItems = [];
                            export function addToCart(productId, quantity) {
                            let product = getProductById(productId);
                            if (!product) {
                              return { success: false, message: "Product not found" };
                            }
                            if (!checkStock(productId, quantity)) {
                              return { success: false, message: "Insufficient stock" };
                            }
                            const existingItem = cartItems.find(item => item.id === productId);
                            if (existingItem) {
                              existingItem.quantity += quantity;
                            } else {
                              cartItems.push({ ...product, quantity });
                            }
                            return { success: true, message: "Product added to cart" };
                          }
                            export function removeFromCart(productId) { 
                            cartItems = cartItems.filter(item => item.id !== productId);
                          }
                            export function updateQuantity(productId, newQuantity) {
                            let product = getProductById(productId);
                            if (!product) {
                              return { success: false, message: "Product not found" };
                            }
                            if (!checkStock(productId, newQuantity)) {
                              return { success: false, message: "Insufficient stock" };
                            }
                            const existingItem = cartItems.find(item => item.id === productId);
                            if (existingItem) {
                              existingItem.quantity = newQuantity;
                            }
                          } 
                            export function getCartItems() {
                            return cartItems.map(item => ({
                              id: item.id,
                              name: item.name,
                              price: item.price,
                              quantity: item.quantity
                            }));
                          }
                            export function getCartTotal() {
                            return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
                          }
                            export function clearCart() {  
                            cartItems = [];
                          }
                          