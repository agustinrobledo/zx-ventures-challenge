import styled from "styled-components"
export const CardStyle = styled.div`
    font-family: Lato, sans-serif;
    display: flex;
    flex-direction: column;
    width: 30%;
    height: auto;
    background-color: #005aba;
    border-radius: 4px;
    align-items: center;
    margin-bottom: 1rem;
    text-align: center;
    p{
        color: white;
        font-size: 1.5rem;
    }
    a{
        text-decoration: none;
        color: white;
    }
    img {
        margin-top: 1rem;
        width: 30%;
        height: auto;
        border-radius: 0.5rem;
    }
`;

export const Button = styled.button`
    background-color: #ff5747;
    font-size: 1.2rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    color: white;
    margin-bottom: 1rem;
    font-weight: 400;
    :hover {
        background-color: #00a3ea;
    }
`;
