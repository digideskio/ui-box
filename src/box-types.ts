import {ReactNode, Component} from 'react'
import * as CSS from 'csstype'

type UIBoxProp = string | number | boolean | null | undefined

type UIBoxIsProp = ReactNode

type CSSProps = CSS.StandardProperties

export interface BoxProps {
  is?: UIBoxIsProp

  className?: string

  boxSizing?: UIBoxProp

  marginX?: UIBoxProp

  marginY?: UIBoxProp

  paddingX?: UIBoxProp

  paddingY?: UIBoxProp

  clearfix?: boolean

  /**
   * Callback that gets passed a ref to inner DOM node (or component if the is prop is set to a
   * React component type).
   */
  innerRef?(node: ReactNode): any

  [key: string]: any
}

export type Box = Component<BoxProps | CSSProps>
