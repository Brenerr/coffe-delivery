import styled from 'styled-components'

export const Input = styled.input`
  padding: 0.75rem;
  border-radius: 0.25rem;
  color: ${(props) => props.theme.base.label};
  background: ${(props) => props.theme.base.input};
  border: 1px solid ${(props) => props.theme.base.button};
  outline: none;

  &:active,
  &:focus {
    box-shadow: 0 0 0 1px ${(props) => props.theme.secondary.dark};
    border-color: ${(props) => props.theme.secondary.dark};
  }
`
