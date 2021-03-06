import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  font-size: 18px;
  font-weight: bold;
  font-family: 'Roboto',sans-serif;
  background-color: lightsteelblue;
  height: 50px; 
  display:flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: auto;
  right: 0;
  width: 100%;
  z-index: 1000;
  div {
    padding: 2px 10px;

  }

  div ul{
    padding:0px;
    margin:0px;
    list-style:none;
  }

  div ul li{
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
