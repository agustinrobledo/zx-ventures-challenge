import styled from "styled-components";
export const CartStyled = styled.div`
    color: white;
    margin-top: 12vh;
    font-family: "Roboto", sans-serif;
    display: flex;
    flex-direction: column;
    width: 80%;
    font-size: 1rem;
    margin: 0 auto;
    border-radius: 1rem;
    padding: 1rem;
    background-color: #005aba;
    margin-top: 12vh;
    a{
        color: white;
        text-decoration: none;
    }
    h1{
        margin: 0 auto;
    }
    div{
        display: flex;
        align-items: center;
        margin-top: 1rem;
        div{
            width: 80%;
            h1{
                margin-left: 0.5rem;
            }
            h2{
                margin-right: 1rem;
            }
        }
        img{
            width: 20%;
            height: auto;
            border-radius: 1rem;
        }
    }
`;

export const Total = styled.h1`
    margin-top: 2rem;
    font-weight: bold;
    margin: 0 auto;
`;
