import 'antd/dist/antd.css'
import '@alipay/cicada-components/lib/index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { Monitor } from '@alipay/cicada-devtools'
import engineComponents from '@alipay/cicada-components'
import pcComponents from '../components'

const mountNode = document.querySelector('#app')

const config = {
  children: [{
    type: 'CommonInput',
    bind: 'input',
    props: {
      placeholder: 'test input',
      disabled: true,
      status: 'error',
      extra: 'Please select the correct date',
    },
    listeners: {
      onClick: {
        fns: [{
          fn() { console.log(1, arguments) },
        }],
      },
    },
    children: [
      {
        type: 'Input.Prefix',
        children: [
          {
            type: 'div',
            children: 'prefix',
          },
        ],
      },
    ],
  }, {
    type: 'CommonInput',
    bind: 'input2',
    props: {
      required: true,
      placeholder: 'test input',
      label: 'name',
      labelCol: {
        span: 4,
        offset: 0,
      },
    },
    children: [{
      type: 'Input.Suffix',
      children: [{
        type: 'Icon',
        props: {
          type: 'lock',
        },
        listeners: {
          onClick: {
            fns: [{
              fn() { console.log(2, arguments) },
            }],
          },
        },
      }],
    }],
  }, {
    type: 'CommonInput',
    bind: 'input3',
    props: {
      placeholder: 'test input',
      label: 'name',
      status: 'error',
      message: 'enter name please',
    },
  }, {
    type: 'CommonInput',
    bind: 'input4',
    props: {
      placeholder: 'change will automatically add a +',
      label: 'name',
    },
    listeners: {
      onBlur: {
        fns: [{
          fn({ state }) {
            return
          },
        }],
      },
    },
  }],
}

ReactDOM.render(<Monitor config={config} map={{...engineComponents, ...pcComponents}} />, mountNode)
