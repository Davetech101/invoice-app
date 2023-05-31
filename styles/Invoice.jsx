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

    .invoices{
        display:flex;
        align-items:center;
        justify-content:center;
        flex-direction:column;
        width:100%;
        gap:1rem;
        padding:2rem;
        margin-top:-4rem;
    }

    .invoice{
        color:var(--primary-text-color);
        background:var(--secondary-color);
        width:100%;
        padding:1.5rem;
        border-radius:1rem;
    }

    .head{
        display:flex;
        align-items:center;
        justify-content:space-between;
        font-size:1.5rem;
        margin-bottom:2.5rem;
    }

    .hash{
        color:#7E88C3;
    }

    .head h3{
        text-transform:uppercase;
        display:flex;
    }

    .head p{
        font-size:1.3rem;
    }

    .btm{
        display:flex;
        justify-content:space-between;
        align-items:center;
    }

    .left{
        display:flex;
        justify-content:center;
        flex-direction:column;
        gap:1rem;
    }

    .date{
        font-size:1.3rem;
        color:var(--secondary-text-color);
    }

    .amt{
        font-size:1.5rem;
    }

    .status{
        text-transform:capitalize;
        font-size:1.5rem;
        padding:1.5rem;
        display:flex;
        align-items:center;
        gap:1rem 3rem;
        border-radius:1rem;
    }

    .dot{
        width:1rem;
        height:1rem;
        border-radius:50%;
        background:white;
        margin-top:-.5rem;
    }
`;

export default SInvoice;
