import { Box } from 'viviui'
import App from '../App'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

const Home = () => {
  const arr = {
    short_name: 'React App',
    name: 'Create React App Sample',
    icons: [
      {
        src: 'favicon.ico',
        sizes: '64x64 32x32 24x24 16x16',
        type: 'image/x-icon'
      }
    ],
    start_url: '.',
    display: 'standalone',
    theme_color: '#000000',
    background_color: '#ffffff'
  }

  return (
    <App id='root'>
      <Box>45689</Box>
    </App>
  )
}

export default Home
