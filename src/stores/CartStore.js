import {ref} from 'vue'
import {defineStore} from 'pinia'
import {computed} from "@vue/runtime-core";

export const useCartStore = defineStore('cart', () => {
    const cart_items = ref([
        {id: 1, title: "Samsung Galaxy S21", price: 1000, quantity: 1, image: 'samsung-s21.jpg'},
        {id: 2, title: "Samsung Galaxy S21 Ultra", price: 1200, quantity: 1, image: 'samsung-s21-ultra.jpg'},
        {id: 3, title: "Samsung Galaxy S21 Plus", price: 1100, quantity: 1, image: 'samsung-s21-plus.jpg'},
    ]);

    const total = computed(() => {
        return cart_items.value.reduce((total, item) => {
            return total + (item.price * item.quantity)
        }, 0)
    });
    const total_quantity = computed(() => {
        return cart_items.value.reduce((total, item) => {
            return total + item.quantity
        }, 0)
    });


    function setCart(value) {
        cart_items.value = value;
    }

    return {cart_items, total, setCart, total_quantity}
})
