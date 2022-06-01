import {reactiveVariables, windowUpdated, mode} from "@/util/reactive";
import {createStore} from "vuex";
import {ref} from "vue";

export const store = createStore({
    state() {
        const data = {
            mode
        }
        for (let [key, val] of Object.entries(reactiveVariables)) {
            data[key] = val.value
        }
        return data;
    }
})