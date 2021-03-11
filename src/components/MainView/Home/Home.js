import React from 'react';
import * as s from './Home.styles';

const Home = () => {
     const changeTheme = () => {

     }

    return <s.HomeContainer>
        <button onClick={changeTheme}>
            CHANGE THEME
        </button>
    </s.HomeContainer>

}

export default Home;