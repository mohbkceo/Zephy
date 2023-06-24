import React from 'react';
import styled from 'styled-components';

const footer = () => {
  return (
    <Containner>
        <Wrap>
        <li><a href='#'>LogiX c 2023  </a></li>
        <li><a href='#'>Privacy & Legal  </a></li>
        <li><a href='#'>Contact</a></li>
        </Wrap>
    </Containner>
  )
}

export default footer


const Containner = styled.div`
position: absolute;
bottom: 0;
display: flex;
align-items: center;
justify-content: center;
width:100%;
`
const Wrap = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 16px;
list-style: none;

li{
  padding: 4px 8px;
  font-size: 12px;  
}
a:hover{
    text-decoration: underline;
    transition: 0.9s;
}
`