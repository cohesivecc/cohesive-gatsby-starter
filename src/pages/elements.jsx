import React from 'react'
import { Button, SecondaryButton, GridX, Cell, CancelButton } from '../elements'
import Icon from '../elements/Icon'

const ElementsPage = () => {
  return (
    <div>
      <Button>Sample button</Button>
      <SecondaryButton>Secondary button</SecondaryButton>
      <CancelButton>Cancel</CancelButton>
      <h1>Button</h1>
      <h2>Grid</h2>
      <GridX>
        <Cell isPadded={false}>
          <h3>100% - No Padding</h3>
        </Cell>
        <Cell xlarge="6" large="6" medium="6" small="12" textAlign="center">
          <h3>50% - Centered</h3>
        </Cell>
        <Cell xlarge="6" large="6" medium="6" small="12" style={{ background: 'pink' }}>
          <h3>50%</h3>
        </Cell>
        <Cell xlarge="4" large="4" medium="4" small="4">
          <h3>33% - Centered</h3>
        </Cell>
        <Cell xlarge="8" large="8" medium="8" small="8">
          <h3>66%</h3>
        </Cell>
      </GridX>

      <GridX>
        <Cell>
          <h2>Icons</h2>
          <Icon icon="plane" />
          <Icon icon="chevron_left" color="teal" size={64} />
          <Icon icon="remove" color="charcoal" size={46} />
          <Icon icon="chevron_right" color="violet" size={96} />
          <Icon icon="remove" color="grape" size={96} />
        </Cell>
      </GridX>
    </div>
  )
}

export default ElementsPage
