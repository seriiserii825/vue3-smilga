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
        const id = value.id;
        const quantity = value.value;

        const idx = cart_items.value.findIndex(item => item.id === id);
        if (quantity > 0) {
            cart_items.value[idx].quantity += 1;
        } else {
            if (cart_items.value[idx].quantity !== 1) {
                cart_items.value[idx].quantity -= 1;
            }
        }
    }

    function removeItem(id){
       cart_items.value = cart_items.value.filter(item => item.id !== id);
    }

    return {cart_items, total, setCart, total_quantity, removeItem}
})
