import { Box } from 'viviui'
import App from '../App'
import { launch } from '@extjs/reactor'
import { Panel, Grid, D3_HeatMap } from '@extjs/reactor/classic'

export default () => {
  launch(
    <Panel title='ExtReact'>
      Hello World!
    </Panel>
    //    <Grid
    //    columns={[
    //      { text: 'Name', dataIndex: 'name' },
    //      { text: 'Email', dataIndex: 'email' }
    //    ]}
    //    store={{
    //      fields: ['name', 'email'],
    //      data: [
    //        { name: 'Tim Smith', email: 'tim101@gmail.com' },
    //        { name: 'Jill Lindsey', email: 'jlindsey890@gmail.com' }
    //      ]
    //    }}
    //  />
  )
  return (
    <App>
      <Box id='root'> 456</Box>
    </App>
  )
}
