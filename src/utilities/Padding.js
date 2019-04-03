/* eslint-disable import/prefer-default-export */
import { css } from 'styled-components'

export const cellPadding = ({ paddingAmount = 0 }) => css`
  padding: ${paddingAmount}em 0.9375rem;
`
