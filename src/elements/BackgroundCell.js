/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'
import Cell from './Cell'

export const BackgroundCell = styled(Cell)`
  background-size: cover;
  background-image: url(${props => props.imageUrl});
`
