import styled from 'styled-components';
export const DetailStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 12vh;
    background-color: #005aba;
    border-radius: 0.5rem;
    img{
        width: 30%;
        height: auto;
        @media (max-width: 768px) {
            width: 100%;
        }
    }
    div{
        font-family: 'Roboto', sans-serif;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 1rem;
        color: white;
    }
`;
export const Recommendations = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-size: 0.5rem;
            div{
                display: flex;
                @media (max-width: 768px) {
                    flex-wrap: wrap;
                }
                div{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    a{
                        text-decoration: none;
                        color: black;
                    }
                    img{
                        width: 30%;
                        height: auto;
                    }
                }
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
    transition: 0.2s linear;
    :hover {
        background-color: #00a3ea;
    }
`;