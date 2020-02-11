import React from 'react';
import './App.css';
import Menu from "./comps/Menu";
import Display from "./comps/Display";
import Button from "./comps/Button";
import {connect} from "react-redux";
import {
    setValuesAC, upValueAC, setStartValueAC, setMaxValueAC, resetValuesAC
} from "./reducer";

class App extends React.Component {

    componentDidMount() {
        return this.state
    };

    setStartValue = (minValue) => {
        this.props.setStartValue(minValue)
    };

    setMaxValue = (maxValue) => {
        this.props.setMaxValue(maxValue)
    };

    setValue = () => {
        this.props.setValues()
    };

    addValue = () => {
        this.props.upValue()
    };

    deleteValue = () => {
        this.props.resetValues()
    };

    render() {

        return (
            <div className='wrapper'>
                {this.props.isCounter ? <div className='display'>

                        <Display/>

                        <div className='displayButton'>
                            <Button setData={this.addValue}
                                    title='UP'
                                    switch={this.props.upSwitch}/>

                            <Button setData={this.deleteValue}
                                    title='RESET'
                                    switch={this.props.resetSwitch}
                            />
                        </div>
                    </div>
                    : <div className='menu'>

                        <Menu/>
                        <Button setData={this.setValue} title='SET'
                                switch={this.props.setSwitch}/>
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        startValue: state.startValue,
        maxValue: state.maxValue,
        isCounter: state.isCounter,
        setSwitch: state.setSwitch,
        resetSwitch: state.resetSwitch,
        upSwitch: state.upSwitch,
        invalidDisplayValues: state.invalidDisplayValues,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

        setStartValue: (minValue) => {
            dispatch(setStartValueAC(minValue))
        },
        setMaxValue: (maxValue) => {
            dispatch(setMaxValueAC(maxValue))
        },
        setValues: () => {
            dispatch(setValuesAC())
        },
        upValue: () => {
            dispatch(upValueAC())
        },
        resetValues: () => {
            dispatch(resetValuesAC())
        },
    }
};


const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
export default AppContainer;
