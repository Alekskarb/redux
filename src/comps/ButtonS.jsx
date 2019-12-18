import React from 'react';

const ButtonS = (props) => {

    return (
                <button className="button" disabled={props.switch} onClick={props.setData}>
                    {props.title}
                </button>
    );
}
export default ButtonS;