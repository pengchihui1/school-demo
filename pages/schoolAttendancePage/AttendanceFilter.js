import React, { useState } from 'react'
import {
  Box,
  Input,
  RadioGroup,
  IconButton,
  Radio,
  Select
} from 'viviui'

import Container from '../../components/container'

const AttendanceFilter = ({ ...props }) => {
  const [value, setValue] = React.useState('1')

  return (
    <Container>
      {/* 搜索 */}
      <Box d='flex' w={{ base: '100%', md: '700px' }} mx='auto'>
        <Input
          placeholder='學生姓名、班級、學號'
        />
        <IconButton aria-label='Search database' variantColor='blue' icon='search' ml={4} />
      </Box>
      {/* 考勤篩子按鈕 全部 未到/準時 遲到 缺席 曠課    */}
      <RadioGroup mt='15px' textAlign='center' defaultValue='2' spacing={5} isInline onChange={e => setValue(e.target.value)} value={value}>
        <Radio value='1'>
          全部
        </Radio>
        <Radio value='2'>
          未到/準時
        </Radio>
        <Radio value='3'>
          遲到
        </Radio>
        <Radio value='4'>
          缺席
        </Radio>
        <Radio value='5'>
          曠課
        </Radio>
      </RadioGroup>
      {/* select 上午 下午 全部 未到/準時 遲到 缺席 曠課 不同的顔色   */}
      <Box mt='15px' m='0 auto'>
        <Select maxW='80px'>
          <option value='option1'>上午</option>
          <option value='option2'>下午</option>
        </Select>
        <Box>1545</Box>
      </Box>
    </Container>
  )
}
export default AttendanceFilter
