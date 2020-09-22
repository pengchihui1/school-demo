import React from 'react'
import { Button } from 'viviui'
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

      {/* 身體 */}
      <AttendanceSection />
    </Page>
  )
}

export default SchoolAttendanceRecordPage
