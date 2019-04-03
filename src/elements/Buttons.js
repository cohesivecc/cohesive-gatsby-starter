/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'
import { darken } from 'polished'

import { colors, sanSerif } from '../utilities'

const BUTTON_MODIFIERS = {
  hollow: props => `
    background: transparent;
    color: ${colors[props.color]};
    border-color: ${colors[props.color]};
    &:hover {
      background: transparent;
      color: ${darken(0.2, colors[props.color])};
      border-color: ${darken(0.2, colors[props.color])};
    }
  `,
}

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

  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`

export const SecondaryButton = styled(Button)`
  background: ${colors.violet};
  /* border-color: ${colors.violet}; */
  &:hover {
    background: ${darken(0.2, colors.violet)};
  }
`

export const CancelButton = styled(Button)`
  background: ${colors.rust};
  /* border-color: ${colors.rust}; */
  &:hover {
    background: ${darken(0.2, colors.rust)};
  }
`
