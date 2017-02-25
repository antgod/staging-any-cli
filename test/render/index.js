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
    type: 'Row',
    children: [{
      type: 'Col',
      props: {
        span: 5,
      },
      children: [
        {
          type: 'CrmMenu',
          bind: 'menuVer',
          props: {
            mode: 'inline',
            theme: 'light',
            direction: 'vertical',
          },
          listeners: {
            onClick: {
              fns: [{
                fn(...argv) { console.log(1, argv) },
              }],
            },
            onTitleClick: {
              fns: [{
                fn(...argv) { console.log(2, argv) },
              }],
            },
          },
        }
      ],
    }, {
      type: 'Col',
      props: {
        span: 12,
      },
      children: [
        {
          type: 'CrmMenu',
          bind: 'menuHor',
          props: {
            mode: 'inline',
            theme: 'light',
            direction: 'horizontal',
          },
          listeners: {
            onClick: {
              fns: [{
                fn(...argv) { console.log(1, argv) },
              }],
            },
            onTitleClick: {
              fns: [{
                fn(...argv) { console.log(2, argv) },
              }],
            },
          },
        },
      ],
    }],
  }, ],
}

const initialState = {
  menuVer: {
    openKeys: ['1'],
    selectedKeys: ['1.1'],
    items: [{
      text: '账单查询',
      icon: 'mail',
    },
      {
        text: '账单操作',
        icon: 'setting',
        children: [
          {
            text: '选项1',
            href: 'http://www.taobao.com',
          },
          {
            text: '选项2',
          },
        ],
      },
      {
        text: '账单操作2',
        icon: 'setting',
        children: [
          {
            text: '选项一',
          },
          {
            text: '选项二',
          },
        ],
      }],
  },
  menuHor: {
    openKeys: ['1'],
    selectedKeys: ['1.1'],
    items: [{
        href: 'http://www.taobao.com',
        text: '账单查询',
      },
      {
        text: '账单操作',
      },
      {
        text: '账单操作2',
      }],
  },
}

ReactDOM.render(<Monitor config={config} map={{...engineComponents, ...pcComponents}} initialState={initialState}/>, mountNode)
