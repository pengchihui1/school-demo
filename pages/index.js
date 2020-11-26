import React, { useState } from 'react'
import { Box, Button, Heading } from 'viviui'
import NextLink from 'next/link'
import App from '../App'

import { AgGridColumn, AgGridReact } from 'ag-grid-react'

import _ from 'lodash'

const Home = () => {
  const [gridApi, setGridApi] = useState(null)
  const [gridColumnApi, setGridColumnApi] = useState(null)
  const [rowData, setRowData] = useState([
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ])
  function onGridReady (params) {
    setGridApi(params.api)
    setGridColumnApi(params.columnApi)
  }

  return (
    <App>
      <Box m='0 auto' w='500px'>
        <NextLink href='https://juejin.cn/post/6844903843436691463'><Button fontSize='24px'><Heading as='h1' size='4xl' textAlign='center' isTruncated>拖拽布局 </Heading></Button></NextLink>
        <Box className='ag-theme-alpine' style={{ height: 400, width: 600 }} mt='50px'>
          <AgGridReact
            onGridReady={onGridReady}
            rowData={rowData}
          >
            <AgGridColumn field='make' />
            <AgGridColumn field='model' />
            <AgGridColumn field='price' />
          </AgGridReact>
        </Box>
      </Box>
    </App>
  )
}
export default Home
