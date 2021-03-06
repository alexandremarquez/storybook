import styled from 'styled-components';

export const Container = styled.div`

  box-sizing: border-box;
  font-family: sans-serif;


  `;

export const Navbar = styled.nav`
  font-size: 18px;
  font-weight: bold;
  background-color: lightsteelblue;
  height: 50px; 
  align-items: center;
  position: fixed;
  top: 0;
  left: auto;
  right: 0;
  margin-bottom: 40px;
  width: 100%;
  z-index: 1000;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  ul{
        padding:0px;
        margin:0px;
        list-style:none;
    }
  ul li{
    display: inline;
  }

  a {
    padding: 2px 10px;
    display: inline-block;

    /* visual do link */
    color: #333;
    text-decoration: none;
}
`;

export const Content = styled.div`
margin-top: 55px;
margin-left:auto;

 h1{ position:relative; }
 h1 span{ position:absolute; top:-70px;}
`;

export const Content1 = styled.div`
margin-top: 55px;
  h1 span[id]::before {
  content: '';
  display: block;
  height:      70px;
  margin-top: -70px;
  visibility: hidden;
}
`;
