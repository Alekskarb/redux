import React from 'react';
import {connect} from "react-redux";
import {setMaxValueAC, setStartValueAC} from "../reducer";

const Menu = (props) => {

    let changeStartValue = (event) => {
        let startValue = Number(event.currentTarget.value);
        props.setStartValue(startValue);
    };

    let invalidMaxValue = props.maxInputSwitch ? 'maxError' : '';
    let invalidStartValue = props.startInputSwitch ? 'startError' : '';

    let changeMaxValue = (event) => {
        let maxValue = +(event.currentTarget.value);
        props.setMaxValue(maxValue);
    };

    return (
        <div className="container">
            <span className='button'>max value:</span>
            <div>
                <input type="number"
                       onChange={changeMaxValue}
                    // disabled={props.maxInputSwitch}
                       value={props.maxValue}
                       className={invalidMaxValue}/>
            </div>
            <span className='button'>start value:</span>
            <div>
                <input type="number"
                       onChange={changeStartValue}
                    // disabled={props.startInputSwitch}
                       value={props.startValue}
                       className={invalidStartValue}/>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        maxInputSwitch: state.maxInputSwitch,
        startInputSwitch: state.startInputSwitch,
        startValue: state.startValue,
        maxValue: state.maxValue,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        setStartValue: (startValue) => {
            dispatch(setStartValueAC(startValue))
        },
        setMaxValue: (maxValue) => {
            dispatch(setMaxValueAC(maxValue))
        },
    };
};
export const MenuContainer = connect(mapStateToProps, mapDispatchToProps)(Menu);
export default MenuContainer;