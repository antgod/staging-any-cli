import { default as React, PropTypes } from 'react'
import { Input } from 'antd'
import { pick, id, zip } from '../common/util'
import { Children } from '../common/lego'
import {
  noop,
  keep,
  createFormItem,
  SIZES,
  VALIDATION_STATUS,
  COMMON_INPUT_EVENT,
} from '../common/common'

/*
 props
 */
export const defaultState = {
  value: '',
  placeholder: '',
  size: SIZES[0],
  status: VALIDATION_STATUS[0],
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
  status: PropTypes.oneOf(VALIDATION_STATUS),
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
  ...zip(COMMON_INPUT_EVENT, new Array(COMMON_INPUT_EVENT.length).fill(keep)),
  onChange({ state }, e) {
    return {
      ...state,
      value: e.target.value,
    }
  },
  onPressEnter: keep,
}


/*
 identifier
 */
export const identifiers = {
  Prefix: id(noop),
  Suffix: id(noop),
}

/*
 render
 */
export function render({ state, listeners, children }) {
  const prefix = Children.has(children, identifiers.Prefix) ? (
    Children.findChildren(children, identifiers.Prefix)[0]
  ) : null

  const suffix = Children.has(children, identifiers.Suffix) ? (
    Children.findChildren(children, identifiers.Suffix)[0]
  ) : null

  const inputProps = pick(state, ['value', 'disabled', 'size', 'placeholder'])

  return createFormItem(
    state,
    <Input {...inputProps} addonBefore={prefix} addonAfter={suffix}{...listeners} />
  )
}
