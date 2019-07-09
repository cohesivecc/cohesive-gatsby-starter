/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'
import { below } from '../utilities'

export const Grid = styled.div`
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 1fr 1fr;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  grid-auto-rows: minmax(200px, auto);
  -ms-grid-rows: repeat( 4, 200px);
  ${below.large`
   
  `}
  ${below.medium`
    -ms-grid-columns: 1fr 1fr;
    grid-template-columns: repeat(2, 1fr);
  `}
  ${below.small`
    -ms-grid-columns: 1fr;
    grid-template-columns: 1fr;
  `}
`
