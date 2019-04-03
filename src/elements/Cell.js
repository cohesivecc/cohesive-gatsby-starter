/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components'
import { below, cellPadding } from '../utilities'

export const Cell = styled.div`
  flex: 0 0 auto;
  min-height: 0px;
  min-width: 0px;
  text-align: ${props => props.textAlign};
  width: ${props => (props.xlarge / 12) * 100}%;
  ${below.large`
    width: ${props => (props.large / 12) * 100}%;
  `}
  ${below.medium`
    width: ${props => (props.medium / 12) * 100}%;
  `}
  ${below.small`
    width: ${props => (props.small / 12) * 100}%;
  `}
  ${props =>
    props.isPadded &&
    css`
      padding: 0 0.9375rem;
    `}
  &.grid-x-margin {
    margin: 0 -0.9375rem;
  }

  /* ${props =>
    props.paddingAmount > 0 &&
    css`
      ${cellPadding({ paddingAmount: `${props.paddingAmount * 2}` })}
    `} */

  ${props => css`
    ${cellPadding({ paddingAmount: `${props.paddingAmount * 2}` })}
  `}
`

Cell.defaultProps = {
  small: 12,
  medium: 12,
  large: 12,
  xlarge: 12,
  isPadded: true,
  textAlign: 'left',
  paddingAmount: 0,
}
