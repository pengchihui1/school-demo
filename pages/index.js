// import React from 'react'
import { Box } from 'viviui'
import App from '../App'
// import { launch } from '@extjs/reactor'
// import { Panel, Grid, Column } from '@extjs/reactor/classic'

// install({ viewport: true })

// Ext.onReady{
//   () => {
//     ReactDOM.render(document.getElementById('root'))
//   }
// }
// Ext.require('Ext.window.Toast')

// Ext.namespace('Ext.ux');

const Index = () => {
  // const store = install.create('Ext.data.Store', {
  //   fields: ['name', 'email'],
  //   data: [
  //     { name: 'Tim Smith', email: 'tim101@gmail.com' },
  //     { name: 'Jill Lindsey', email: 'jlindsey890@gmail.com' }
  //   ]
  // })
  return (
    <App>
      {/* <Grid title='Users' store={store}>
        <Column text='Name' dataIndex='name' />
        <Column text='Email' dataIndex='email' />
      </Grid> */}
      <Box> "react-dom":"^15.4.0"</Box>
    </App>
  )
}
export default Index
