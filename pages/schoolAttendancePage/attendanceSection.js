import React from 'react'
import {
  Box,
  Button,
  Input,
  IconButton
} from 'viviui'

import Container from '../../components/container'

import AttendanceFilter from './attendanceFilter'
import AttendanceTable from './attendanceTable'

const AttendanceSection = ({ filter, select, ...props }) => {
  return (
    <Container>
      {/*  搜索 考勤情況  全部 未到/準時 遲到 缺席  曠課  */}
      <AttendanceFilter />
      {/* table表格 */}
      <AttendanceTable />
      {/* 分頁控制 */}
      <Box my={2} d='flex' justifyContent='center'>
        <Button
          size='sm'
          mx={5}
          variantColor='blue'
        >
          第一頁
        </Button>
        <Button
          size='sm'
          mx={5}
          variantColor='cyan'
          isDisabled=''
        >
          上一頁
        </Button>
        <Button
          size='sm'
          mx={5}
          variantColor='teal'
          isDisabled=''
        >
          下一頁
        </Button>
      </Box>
    </Container>
  )
}
export default AttendanceSection
