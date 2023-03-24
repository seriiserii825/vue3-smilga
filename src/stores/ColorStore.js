import {ref} from 'vue'
import {defineStore} from 'pinia'
export const useColorStore = defineStore('color', () => {
    const color = ref('#68273D');
    function setColor(value) {
        color.value = value;
    }
    return {color, setColor}
})
