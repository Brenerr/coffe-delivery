import styled from 'styled-components'

export const TitleContainer = styled.div`
  h1 {
    line-height: 130%;
  }
  @media screen and (min-width: 1024px) {
    width: clamp(40%, 36.75rem, 100%);
  }
`
