import {ref} from "vue";

export const REACT_WIDTH = 700, WIDE_MODE = 1, NARROW_MODE = 2, TYPE_WIDE_OR_NARROW = 1, TYPE_FUNCTIONAL = 2;

export const getMode = () => window.innerWidth < REACT_WIDTH ? NARROW_MODE : WIDE_MODE;

export const mode = ref(getMode())

export const reactiveVariables = {}

export const ReactiveVariable = (wide, narrow) => {
    return {
        type: TYPE_WIDE_OR_NARROW,
        wide,
        narrow,
        value: ref(getMode() === WIDE_MODE ? wide : narrow)
    }
}

export const ReactiveFunctionalVariable = (f) => {
    return {
        type: TYPE_FUNCTIONAL,
        func: f,
        value: ref(f(window.innerWidth))
    }
}

export const registerReactiveVariable = (name, wide, narrow) => {
    reactiveVariables[name] = ReactiveVariable(wide, narrow)
}

export const registerReactiveFunctionalVariable = (name, func) => {
    reactiveVariables[name] = ReactiveFunctionalVariable(func)
}

export const windowUpdated = () => {
    mode.value = getMode();
    for (let [key, val] of Object.entries(reactiveVariables)) {
        if (val.type === TYPE_WIDE_OR_NARROW) {
            if (mode.value === WIDE_MODE) {
                val.value.value = val.wide;
            } else if (mode.value === NARROW_MODE) {
                val.value.value = val.narrow;
            }
        } else {
            val.value.value = val.func(window.innerWidth)
        }
    }
}

// register for several reactive variables

// title menu
registerReactiveVariable("titleMenuWidth", "25%", "75%")

// main container
registerReactiveVariable("mainContainerHeight", "85vh", "75vh")
registerReactiveVariable("mainContainerPaddingTop", "3%", "0%")
registerReactiveVariable("mainContainerPaddingBottom", "3%", "5%")

// HOME
registerReactiveVariable("homePaddingRight", "25%", "10px")

// PROJECTS
// project wide mode and narrow mode is different from the screen, it changes at 550
const PROJECTS_REACT_WIDTH = 600;
export const PROJECTS_WIDE_MODE = 1, PROJECTS_NARROW_MODE = 2;
registerReactiveFunctionalVariable("projectCardsMode", (innerWidth) => {
    if (innerWidth < PROJECTS_REACT_WIDTH) {
        return PROJECTS_NARROW_MODE;
    } else {
        return PROJECTS_WIDE_MODE;
    }
})
registerReactiveFunctionalVariable("projectPaddingTop", (innerWidth) => {
    if (innerWidth < PROJECTS_REACT_WIDTH) {
        return '0%';
    } else {
        return '3%';
    }
})

// RESUME
registerReactiveVariable("resumeFrameHeight", "84.2vh", "60vh")

window.onresize = () => {
    windowUpdated()
}