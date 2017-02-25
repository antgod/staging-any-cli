import React from 'react'
import { pick } from './util'
import { Form } from 'antd'

const FormItem = Form.Item

/*
 * preventDefaultEvent
 * */
export const preventDefault = (e) => {
  e.preventDefault()
}

export const stopPropagation = (e) => {
  e.stopPropagation()
  if (e.nativeEvent.stopImmediatePropagation) {
    e.nativeEvent.stopImmediatePropagation()
  }
}

/*
 * pass the props to next state
 * */
export const keep = ({ state }) => {
  return state
}

/*
 * null function
 * */
export const noop = () => {
  return null
}

/*
 *  constants
 */

export const SIZES = ['default', 'small', 'large']
export const VALIDATION_STATUS = ['normal', 'validating', 'success', 'warning', 'error']

export const FOCUS_EVENT = ['onFocus', 'onBlur']
export const FORM_EVENT = ['onChange', 'onInput', 'onSubmit']
export const MOUSE_EVENT = ['onClick', 'onContextMenu', 'onDoubleClick', 'onDrag', 'onDragEnd', 'onDragEnter', 'onDragExit', 'onDragLeave', 'onDragOver', 'onDragStart', 'onDrop', 'onMouseDown', 'onMouseEnter', 'onMouseLeave', 'onMouseMove', 'onMouseOut', 'onMouseOver', 'onMouseUp']
export const SELECTION_EVENT = ['onSelect']
export const KEYBOARD_EVENT = ['onKeyDown', 'onKeyPress', 'onKeyUp']

export const COMMON_INPUT_STATE = ['value', 'disabled', 'placeholder']
export const COMMON_INPUT_EVENT = FORM_EVENT.concat(KEYBOARD_EVENT).concat(FOCUS_EVENT)

export function createFormItem(state, inner) {
  if (state.hasFormItemWrapper === false) return inner

  const formItemProps = pick(state, ['required', 'labelCol', 'wrapperCol', 'label', 'help', 'extra'])
  if (state.status !== VALIDATION_STATUS[0]) {
    formItemProps.validateStatus = state.status
    formItemProps.hasFeedback = state.hasFeedback
  }

  return <FormItem {...formItemProps}>{inner}</FormItem>
}
