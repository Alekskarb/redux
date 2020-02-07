import React from 'react';
import {connect} from "react-redux";

const ButtonS = (props) => {

    return (
                <button className="button"
                        disabled={props.switch}
                        onClick={props.setData}>
                    {props.title}
                </button>
    );
};

const mapStateToProps = (state) => {
    return {
        switch: state.switch,
        setData: state.setData,
    }
};

export const ButtonContainer = connect(mapStateToProps, null)(ButtonS);
export default ButtonContainer