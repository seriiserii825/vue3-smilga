import {useColorStore} from "@/stores/ColorStore";

const colorStore = useColorStore();
const {setColor} = colorStore;
import colors from "@/data/colors";
import {shadeColor} from "@/utilities/color-converters";

const useBackground = (initial_color, count) => {
    const color_from_file = colors[initial_color];
    const darken_bg = shadeColor(color_from_file, count);
    setColor(darken_bg);
    return {color_from_file};
}

export default useBackground;