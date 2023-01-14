import {ref} from 'vue'
import {defineStore} from 'pinia'

export const useCodePopupStore = defineStore('codePopup', () => {
    const use_value = ref('');
    const use_code = ref('');
    const is_visible_popup = ref(false)

    function showPopup() {
        is_visible_popup.value = true;
    }

    function hidePopup() {
        is_visible_popup.value = false;
        use_value.value = '';
        use_code.value = '';
    }

    function setUseValue(value) {
        use_value.value = value;
    }

    function setCodeValue(value) {
        use_code.value = value;
    }

    return {is_visible_popup, showPopup, hidePopup, use_value, use_code, setUseValue, setCodeValue}
})
