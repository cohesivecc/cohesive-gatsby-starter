/* eslint-disable no-else-return */
import React from 'react'
import PropTypes from 'prop-types'
import { colors } from '../utilities'

import iconPaths from './svg/selection'

function getPath(iconName) {
  const icon = iconPaths.icons.find(ic => ic.tags.includes(iconName))

  if (icon) {
    return icon.paths.join(' ')
  } else {
    console.warn(`icon ${iconName} does not exist.`)
    return ''
  }
}

const Icon = props => {
  const { icon, size, color } = props

  const styles = {
    svg: {
      display: 'inline-block',
      verticalAlign: 'middle',
    },
    path: {
      fill: colors[color],
    },
  }

  return (
    <svg style={styles.svg} width={`${size}px`} height={`${size}px`} viewBox="0 0 1024 1024">
      <path d={getPath(icon)} style={styles.path} />
    </svg>
  )
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
}

Icon.defaultProps = {
  size: 32,
  color: 'charcoal',
}

export default Icon
