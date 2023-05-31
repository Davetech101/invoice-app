import styled from "styled-components";

const SInvoice = styled.main`
    display:flex;
    align-items:center;
    justify-content:center; 
    margin:5rem auto;
    flex-direction:column;

    .txt{
        margin-top:4rem;
        text-align:center;
        color:var(--primary-text-color);
    }

    h4{
        font-size:2.4rem;
        margin-bottom:1rem;
    }

    p{
        font-size:1.4rem;
    }
`;

export default SInvoice;
