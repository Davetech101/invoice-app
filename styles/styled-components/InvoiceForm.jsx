import styled from "styled-components";

const SInvoiceForm = styled.main`
  color: var(--primary-text-color);
  margin-top: 3.3rem;

  .container {
    padding: 0 2.4rem;
    position:relative;
  }

  .back {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.6rem;
    font-family:inherit;
  }

  .back svg {
    color: #7c5dfa;
    margin-top: -0.35rem;
  }

  h3 {
    margin: 2.6rem 0 2rem;
    font-size: 2.4rem;
  }

  .bill {
    display: flex;
    flex-direction: column;
  }

  .bill p {
    font-size: 1.5rem;
    color: #7c5dfa;
    margin-bottom: 2rem;
  }

  label {
    color:#888EB0;
    display: block;
    font-size: 1.3rem;
    margin-bottom: 0.9rem;
    font-family:inherit;
  }

  input{
    margin-bottom:2.5rem;
    width:100%;
    background:var(--secondary-color);
    padding:1rem;
    border-radius:2px;
    font-size:1.5rem;
    outline:none;
    border:1px solid var(--tetiary-text-color);
    font-family:inherit;
    font-weight:400;
  }

  .zone{
    display:flex;
    align-items:center;
    gap:2.3rem;
  }

  .to{
    margin-top:2rem;
  }

  .itemList{
    margin:3rem 0 1rem;
  }

  .math{
    display:flex;
    align-items:center;
    gap:1rem;
  }

  .qty{
    width:30%;
  }

  .total{
    color:#888EB0;
    width:50%;
    padding:0 1rem;
    font-size:1.5rem;
    font-family:inherit;
    font-weight:400;
    height:9.5rem;
  }

  .amt{
    margin-top:2rem;
  }

  .trash{
    font-size:2rem;
    color:#888EB0;
  }

  .add{
    display:flex;
    align-items:center;
    color:#888EB0;
    font-size:1.3rem;
    margin:0 auto 3rem;
    background:var(--secondary-color);
    padding:1.5rem 10rem;
    border-radius:10rem;
  }

  .btns{
    display:flex;
    align-items:center;
    justify-content:space-between;
    background:var(--tetiary-color);
    width:100%;
    padding:2rem 2.3rem;
  }

  .btns button{
    padding:1rem 2rem;
    border-radius:5rem;
    font-size:1.1rem;
  }

  .discard{
    background:var(--secondary-color);
  }

  .draft{
    background:#373B53;
  }

  .send{
    background:#7C5DFA;
  }
`;
export default SInvoiceForm;
