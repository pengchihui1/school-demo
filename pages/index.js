import React from 'react'
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box
} from 'viviui'

export default () => {
  return (
    <Box>
      <Tabs size='md'>
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}
