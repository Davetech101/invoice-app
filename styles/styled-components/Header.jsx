import styled from "styled-components";

const SHeader = styled.header`
  width:100%;
  height:7.2rem;
  background:var(--secondary-color);
  display:flex;
  align-items:center;
  justify-content:space-between;
  position:sticky;

  .left{
    background:#7c5dfa;
    border-top-right-radius:2rem;
    border-bottom-right-radius:2rem;
    width:7.2rem;
    position:relative;
    overflow:hidden;
  }

  .but{
    position:absolute;
    bottom:0;
    left:0;
    width:100%;
    height:50%;
    background:#9277ff;
    border-top-left-radius:2rem;
  }

  .pacman{
    z-index:2;
    position:relative;
  }

  .right{
    padding:2rem 2.4rem;
    display:flex;
    align-items:center;
    gap:3rem;
  }

  .toggle{
    color:#9992b8;
    font-size:2rem;
  }

  .line{
    width:1px;
    height:7.2rem;
    background:#9992b8;
  }

  .avatar{
    border-radius:50%;
    width:3rem;
    height:3rem;
  }
`;

export default SHeader;
