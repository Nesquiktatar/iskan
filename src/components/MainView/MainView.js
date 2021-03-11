import React from 'react';
import * as s from './MainView.styles';
import Home from "./Home/Home";

const MainView = (props) => {
    const {
        colors
    } = props;
    return(
        <s.MainViewContainer colors={colors}>
            <Home/>
        </s.MainViewContainer>
    )

}

export default MainView;