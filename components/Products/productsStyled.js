import styled from "styled-components";
export const FlexCard = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    `;
export const FilterButtons = styled.div`
    
    display: flex;
    width: 20%;
    justify-content: space-between;
    margin: 12vh auto;
    `;

export const Button = styled.button`
    font-family: Lato, sans-serif;
    font-weight: 600;
    background-color: white;
    border: 1px solid #e6e6e6;
    font-size: 1.2rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    color: black;
    :hover {
        background-color: black;
        color: white;
    }
    `;
