export const SET_START_VALUE = 'SET_START_VALUE';
export const SET_MAX_VALUE = 'SET_MAX_VALUE';
export const SET_VALUES = 'SET_VALUES';
export const UP_VALUE = 'UP_VALUE';
export const RESET_VALUES = 'RESET_VALUES';

let initialState = {
    startValue: 1,
    maxValue: 2,
    newStartValue: 0,
    startInputSwitch: false,
    maxInputSwitch: false,
    setSwitch: false,
    upSwitch: true,
    resetSwitch: false,
    isCounter: false,
    invalidDisplayValues: false,
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_START_VALUE:
            if (action.startValue <= 0 || state.maxValue <= 0 || action.startValue >= state.maxValue) {
                return {
                    ...state, startInputSwitch: true, setSwitch: true,
                }
            } else {
                return {
                    ...state, startValue: action.startValue, setSwitch: false, startInputSwitch: false,
                    maxInputSwitch: false, invalidDisplayValues: false,
                }
            }

        case SET_MAX_VALUE:

            if (action.maxValue <= 0 || state.startValue <= 0 || action.maxValue <= state.startValue) {
                return {
                    ...state, maxInputSwitch: true, setSwitch: true
                }
            } else {
                return {
                    ...state, maxValue: action.maxValue, setSwitch: false, startInputSwitch: false,
                    maxInputSwitch: false, invalidDisplayValues: false,
                }
            }

        case SET_VALUES: {
            return {
                ...state, newStartValue: state.startValue, isCounter: true, upSwitch: false,
                resetSwitch: false, setSwitch: true,
            }
        }

        case UP_VALUE: {
            if (state.newStartValue + 1 >= state.maxValue) {
                return {
                    ...state, upSwitch: true,
                    invalidDisplayValues: true,
                    newStartValue: Number(state.newStartValue) + 1
                }
            } else {
                return {
                    ...state, invalidDisplayValues: false,
                    newStartValue: Number(state.newStartValue) + 1,
                    upSwitch: false,
                }
            }
        }
        case RESET_VALUES: {
            return {
                ...state, startValue: 1, maxValue: 3, upSwitch: true,
                startInputSwitch: false, maxInputSwitch: false, setSwitch: false,
                newStartValue: state.startValue, invalidDisplayValues: false,
                isCounter: false
            }
        }
        default:
            return state
    }
};


export const setStartValueAC = (startValue) => {
    return {type: SET_START_VALUE, startValue}
};
export const setMaxValueAC = (maxValue) => {
    return {type: SET_MAX_VALUE, maxValue}
};
export const setValuesAC = () => {
    return {type: SET_VALUES}
};
export const upValueAC = () => {
    return {type: UP_VALUE}
};
export const resetValuesAC = () => {
    return {type: RESET_VALUES}
};



