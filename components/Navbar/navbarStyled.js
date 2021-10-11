import styled from "styled-components";
export const Header = styled.header`
font-family: "Roboto", sans-serif;
color: black;
padding: 2rem 0;
position: fixed;
left: 0%;
top:0%;
width: 100%;
background: white;
a {
    color: black;
    text-decoration: none;
}
div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}
ul {
margin: 0;
padding: 0;
list-style: none;
  li{
      margin-right: 2rem;
      display: inline-block ;
      a{
      background: #ff5747;
      display: block;
      padding: 0.5rem 1rem;
      transition: 0.2s linear;
      border-radius: 5px;
      color: white;
        :hover{
        background: #00a3ea
      }
    }
  }
}
`;
export const Logo = styled.div`
    font-size: 1.2em;
    margin-left: 2rem;
    font-weight: bold;
`;

