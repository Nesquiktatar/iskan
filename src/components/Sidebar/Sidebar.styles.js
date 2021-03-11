import styled from "@emotion/styled";

export const SidebarContainer = styled.div`
    padding-left: 1%;
    width: 5%;
    border-radius:50px;
    
`;
export const MenuItemContainer = styled.div`

    height: 100%;
    display: grid;
    grid-auto-rows: minmax(100px, auto);
    grid-template-areas: 
        'm'
        'm'
        'm';
`;

export const MenuItem = styled.div`
    width: 16%;
    grid-area: 'm';
    color: ${p => p.colors.lightGreen};
    font-weight: 600;
    font-family: ${p => p.font};
    font-size: 24px;
     
     border: 3px dotted black;   
       
    &:hover {
        border: 3px dotted black;
        border-radius: 15%;
        color: black;
    }
`;

export const MenuItemText = styled.div`
     transform-origin: center center;
     transform: rotate(-90deg);
     id-area: 'm';
`;
