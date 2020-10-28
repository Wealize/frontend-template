import 'antd/dist/antd.css'

import React from 'react'
import { AppProps } from 'next/app'
import { Reset } from 'styled-reset'

import withClearCache from '../clearCache'
import Global from '../components/Global'

const ExtendedApp = (props: AppProps) => {
  const { Component, pageProps } = props

  return (
    <React.Fragment>
      <Reset />
      <Global />
      <Component {...pageProps} />
    </React.Fragment>
  )
}

export default withClearCache(ExtendedApp)
