import {ReactNode, Component} from 'react'
import * as CSS from 'csstype'

type UIBoxProp = string | number | boolean | null | undefined

type CSSProps = CSS.StandardProperties

export interface BoxProps {
  is?: string | ReactNode

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
  [key: any]: any
}

export type Box = Component<BoxProps | CSSProps>
