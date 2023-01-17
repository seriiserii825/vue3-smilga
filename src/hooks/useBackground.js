import {shadeColor} from "@/utilities/color-converters";

const useBackground = (initial_color, count) => {
    const darken_bg = shadeColor(initial_color, count);
    return {darken_bg}
}

export default useBackground;