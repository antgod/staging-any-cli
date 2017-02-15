import { default as React, PropTypes } from 'react'
import { Input } from 'antd'

/*
 props
 */
export const defaultState = {
  value: '',
  placeholder: '',
  size: SIZES[0],
  disabled: false,
  label: '',
  help: '',
  extra: '',
  required: false,
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
  hasFeedback: true,
  hasFormItemWrapper: true,
}

export const stateTypes = {
  size: PropTypes.oneOf(SIZES),
  disabled: PropTypes.bool,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  help: PropTypes.string,
  extra: PropTypes.string,
  required: PropTypes.bool,
  labelCol: PropTypes.object,
  wrapperCol: PropTypes.object,
  hasFeedback: PropTypes.bool,
  hasFormItemWrapper: PropTypes.bool,
}


/*
 reduce functions
 */
export const defaultListeners = {
  onChange({ state }, e) {
    return {
      ...state,
      value: e.target.value,
    }
  },
}


/*
 render
 */
export function render({ state, listeners, children }) {

  // const inputProps = pick(state, ['value', 'disabled', 'size', 'placeholder'])

  return <Input />
}
