import styled from 'styled-components'

export const Option = styled.div`
  input[type='radio'] {
    display: none;
  }

  label {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    border-radius: 0.375rem;
    padding: 1rem;
    text-transform: uppercase;
    font-size: 0.75rem;
    line-height: 1rem;
    background: ${(props) => props.theme.base.button};
    border: 2px solid ${(props) => props.theme.base.button};
    height: 100%;
    width: 100%;
    color: ${(props) => props.theme.base.text};
    box-shadow: 0 0 0 1px ${(props) => props.theme.base.button};

    cursor: pointer;

    &:hover {
      background: ${(props) => props.theme.base.hover};
      border: 2px solid ${(props) => props.theme.base.hover};
    }
  }

  grid-column: 1 / -1;

  @media (min-width: 768px) {
    grid-column: span 1 / span 1;
  }
`
