/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'
import { darken } from 'polished'

import { colors, sanSerif } from '../utilities'

export const Button = styled.button`
	${sanSerif}

	background: ${colors.teal};
	border: 4px solid transparent;
	color: white;
	cursor: pointer;
	display: inline-block;
	font-size: 100%;
	margin-bottom: ${10 / 16}em;
	padding: 5px 20px;
  transition: 0.3s ease all;
  &:hover {
    background: ${darken(0.2, colors.teal)}
  }
  &:focus {
    outline: none;
  }
`

export const SecondaryButton = styled(Button)`
  background: ${colors.violet};
  &:hover {
    background: ${darken(0.2, colors.violet)};
  }
`
