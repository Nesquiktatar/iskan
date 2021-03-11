import React from 'react';
import * as s from './App.styles';

//Components
import Sidebar from "./components/Sidebar/Sidebar";
import MainView from "./components/MainView/MainView";

const App = () => {

    const colors = {
        black: '#000000',
        darGreen: '#3e432e',
        middleGreen: '#616f39',
        lightGreen: '#a7d129'
    }


    const menuItems = [
        {name: 'home', to: '/'},
        {name: 'about', to: '/about'},
        {name: 'contact', to: '/contact'},
    ]

    const fonts = {
        menu:  'Syncopate'
    }

    return (
    <s.App colors={colors}>
      <Sidebar menuItems={menuItems}
               fonts={fonts}
               colors={colors}
      />
      <MainView colors={colors}/>

    </s.App>
  );
}

export default App;
