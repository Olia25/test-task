import styled from "styled-components";
import {Popover} from "antd";

export const StyleMonth = styled(Popover)`
     border: 4px inset ${({monthColor}) => monthColor};
     border-radius: 40px 10px;;
     width:250px;
     height: 100px;
     margin: 20px 30px;  
     background-color: rgba(255,255,255,0.6);
     text-shadow: #ff99c2 0 0 2px;
     text-align: center;
     display: flex;
     align-items: center;
     justify-content: center;
     
     &:hover {
       color: ${({monthColor}) => monthColor};
     }
`