// import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from 'viviui'
import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/core'
const Home = () => {
  return (
    <Box>
      <Tabs>
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>sdfdsf!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>

    </Box>
  )
}

export default Home
