import {Component, ReactNode,createElement} from 'react'
import * as PropTypes from 'prop-types'
import {css as gcss} from 'glamor'
import {propTypes} from './enhancers'
import enhanceProps from './enhance-props'
import {Box as BoxType, BoxProps} from './box-types'

let cssWarned = false

export default class Box extends Component {
  static displayName = 'Box'

  static propTypes = {
    ...propTypes,
    css: PropTypes.object,
    innerRef: PropTypes.func,
    is: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    boxSizing: propTypes.boxSizing
  }

  static defaultProps = {
    css: null,
    innerRef: null,
    is: 'div',
    boxSizing: 'border-box'
  }

  render() {
    const { is="div", css, innerRef, children, ...props } = this.props as BoxProps
    // Convert the CSS props to class names (and inject the styles)
    const [className, parsedProps] = enhanceProps(props)

    // Add glamor class
    if (css) {
      // Warn that it's deprecated in the development
      if (process.env.NODE_ENV !== 'production' && !cssWarned) {
        // Don't spam the warning
        cssWarned = true
        console.warn(
          `📦 ui-box deprecation: the “css” prop will be removed in the next major version in favour of importing glamor directly and passing it՚s generated class to the “className” prop.`
        )
      }
      parsedProps.className = `${className} ${gcss(css).toString()}`
    } else {
      parsedProps.className = className
    }

    if (innerRef) {
      parsedProps.ref = (node: ReactNode) => {
        innerRef(node)
      }
    }

    return createElement(is, parsedProps, children)
  }
}

