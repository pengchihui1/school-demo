// import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from 'viviui'
import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/core'
const Home = () => {
  return (
    <Box>
      <Box style={{ width: '100%', overflow: 'hidden' }}>
        <Box className='inner-container' style={{ overflowY: 'hidden', overflowX: 'scroll' }}>
          <Box style={{ width: '100vh' }}>
            <TabList>
              <Tab>全部:120</Tab>
            </TabList>
          </Box>
        </Box>
      </Box>

      <style>
        {`
        .css-w6ysom{
          margin: 5px 5px 0px;
          }
          /* for Chrome */
          .inner-container::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </Box>
  )
}

export default Home
