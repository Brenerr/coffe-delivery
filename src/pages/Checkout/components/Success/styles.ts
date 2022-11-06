import styled from 'styled-components'

export const OrderInfos = styled.div`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 0.375rem 2.25rem;
    padding: 2px;
    background: linear-gradient(90deg, #dbac2c, #8047f8);
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`
