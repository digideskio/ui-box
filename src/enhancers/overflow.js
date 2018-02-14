import PropTypes from 'prop-types'
import getCss from '../get-css'

export const propTypes = {
  overflow: PropTypes.string,
  overflowX: PropTypes.string,
  overflowY: PropTypes.string,
}

export const propAliases = {
  overflow: ['overflowX', 'overflowY'],
}

export const propEnhancers = {
  overflowX: overflowX => getCss('overflowX', overflowX),
  overflowY: overflowY => getCss('overflowY', overflowY),
}
