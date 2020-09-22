import react from 'react'
import { Box, Select, Button } from 'viviui'
import NextLink from 'next/link'
import DatePicker from 'react-datepicker'

import Page from '../../components/page'
import PageHeader from '../../components/pageHeader'
import Fieldset from '../../components/fieldset'
import FieldsetHeader from '../../components/fieldset/fieldsetHeader'

import AttendanceSection from './attendanceSection'

const SchoolAttendanceRecordPage = () => {
  return (
    <Page px='0' w={{ base: '100%', md: '1280px' }}>
      {/* 頭部 */}
      <PageHeader>
        <Fieldset title='考勤系統' background='white' Line>
          <FieldsetHeader bg='white'>考勤記錄</FieldsetHeader>
        </Fieldset>
      </PageHeader>
      {/* 日期篩選 */}
      <Box d='flex' justifyContent='center' mb={4} alignItems='center'>
        <Box border='1px solid #e6e6e6'>
          <DatePicker
            id='startAt'
            className='input'
            dateFormat='yyyy-MM-dd'
            selected={new Date()}
            autoComplete='true'
          />
        </Box>
        <Select w='86px' h='26px' ml={4}>
          <option value='option1'>上午</option>
          <option value='option2'>下午</option>
        </Select>
        <Button
          ml={4}
          w='60px'
          h='26px'
          lineHeight='26px'
          variantColor='blue'
          disabled=''
        >
          過濾
        </Button>
      </Box>
      {/* 身體 */}
      <AttendanceSection />
    </Page>
  )
}

export default SchoolAttendanceRecordPage
