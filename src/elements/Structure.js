/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components'
import { colors } from '../utilities'

export const Footer = styled.div`
  color: white;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2em 0 1em;
  min-height: 120px;
  background-size: cover;
  flex-direction: column;
  > div {
    font-size: 12px;
  }

  ${props => css`
    background-image: url(${props.backgroundImage});
  `}
  a {
    color: ${colors.white};
    font-size: 22px;
  }
`
