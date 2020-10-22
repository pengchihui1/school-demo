import {
  Box,
  Button,
  Flex,
  Text
} from 'viviui'

import DatePicker from 'react-datepicker'

import SelectedExport from './selectedExport'

const AttendanceSection = () => {
  return (
    <Box>
      {/* 管理員可進行選擇的班級component */}
      <SelectedExport />
      {/* 班主任選擇的班級對象 */}
      <Text mb={4}> 選擇對象：K1A 班級</Text>

      {/* 匯出時間 */}
      <Box>
        <Text fontWeight='bold'>資料時間：</Text>
        <Flex ml='60px' align='center' lineHeight='30px' mt={2}>
          <Text mr={2}>從</Text>
          <Box border='1px solid #CBD5E0'>
            <DatePicker
              id='startAt'
              className='input'
              textAlign='center'
              dateFormat='yyyy-MM-dd'
              selected={new Date()}
              // onChange={date => setFieldValue('startAt', date)}
              autoComplete='off'
            />
          </Box>
          <Text mx={2}>到</Text>
          <Box border='1px solid #CBD5E0'>
            <DatePicker
              id='startAt'
              className='input'
              textAlign='center'
              dateFormat='yyyy-MM-dd'
              selected={new Date()}
              // onChange={date => setFieldValue('startAt', date)}
              autoComplete='off'
            />
          </Box>
          <Text mx={2}>時間段資料</Text>
        </Flex>
      </Box>

      {/* 匯出按鈕 */}
      <Flex justify='center' mt={10}>
        <Button variant='outline'>
          匯出
        </Button>
      </Flex>
      {/* 為了去掉點擊是會有黑色邊框 */}
      <style jsx global>
        {`
            .input{
              width: 130px;
              text-align: center;
              cursor:pointer;
            }
            .date-picker-content button:focus,
            .input:focus{
              outline: none;
            }
          `}
      </style>
    </Box>
  )
}

export default AttendanceSection
