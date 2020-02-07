import React from 'react';
import {connect} from "react-redux";

const Display = (props) => {

    let invalidDisplayValues = props.invalidDisplayValues ? 'displayError' : '';
    return (
        <div className='text'>
            <div className={invalidDisplayValues}>
                {props.startValue <=0 || props.maxValue <=0 || props.startValue >= props.maxValue || props.maxValue <= props.startValue
                    ? <span className='displayError'> incorrect values </span>
                    : props.setSwitch
                        ? <span> {props.newStartValue} </span>
                        : <span> set values please</span>}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        invalidDisplayValues: state.invalidDisplayValues,
        startValue: state.startValue,
        maxValue: state.maxValue,
        setSwitch: state.setSwitch,
        newStartValue: state.newStartValue,
    }
};

const DisplayContainer = connect(mapStateToProps, null)(Display);
export default DisplayContainer;
