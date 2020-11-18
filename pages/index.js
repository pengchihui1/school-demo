import { Box } from 'viviui'
import App from '../App'
import { launch, renderWhenReady } from '@extjs/reactor'
import { Panel, Grid, Column } from '@extjs/reactor/classic'

const Index = () => {
  const store = Ext.create('Ext.data.Store', {
    fields: ['name', 'email'],
    data: [
      { name: 'Tim Smith', email: 'tim101@gmail.com' },
      { name: 'Jill Lindsey', email: 'jlindsey890@gmail.com' }
    ]
  })
  return (
    <App>
      <Grid title='Users' store={store}>
        <Column text='Name' dataIndex='name' />
        <Column text='Email' dataIndex='email' />
      </Grid>
    </App>
  )
}
export default launch(Index)
