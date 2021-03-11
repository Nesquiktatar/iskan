import React from 'react';
import * as s from './Sidebar.styles';

const Sidebar = (props) => {
    const {
        menuItems = [],
        fonts = {
            menu: ''
        },
        colors,
    } = props;

    const menuItemJSX = menuItems.map((item, index) => {
        return (
            <s.MenuItem key={index}
                        font={fonts.menu}
                        colors={colors}
            >
                <s.MenuItemText>
                    {item.name}
                </s.MenuItemText>
            </s.MenuItem>
        )
    })

    return (
        <s.SidebarContainer>
            <s.MenuItemContainer>
                {menuItemJSX}
            </s.MenuItemContainer>
        </s.SidebarContainer>
    )
}

export default Sidebar;