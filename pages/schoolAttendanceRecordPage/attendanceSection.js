import React from 'react'
import {
  Box,
  Button
} from 'viviui'

import Container from '../../components/container'

import AttendanceFilter from '../../components/common/attendanceFilter'
import AttendanceTable from '../../components/common/attendanceTable'

const AttendanceSection = ({ filter, select, ...props }) => {
  return (
    <Container>
      {/*  搜索 考勤情況  全部 未到/準時 遲到 缺席  曠課  */}
      <AttendanceFilter select />
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
