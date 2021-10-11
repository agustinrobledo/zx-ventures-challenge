import styled from "styled-components";
export const FlexCard = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    `;
export const FilterButtons = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-around;
    margin-top: 12vh;
    margin-bottom: 2rem;
        @media (max-width: 768px) {
            margin-top: 15vh;
        }
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
