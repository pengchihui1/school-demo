import React from 'react'
import { Button } from 'viviui'
import NextLink from 'next/link'

import Page from '../../components/page'
import PageHeader from '../../components/pageHeader'

import Fieldset from '../../components/fieldset'
import FieldsetHeader from '../../components/fieldset/fieldsetHeader'
import LeftFieldset from '../../components/fieldset/leftFieldset'

import AttendanceNav from './attendanceNav'
import AttendanceSection from './attendanceSection'

const SchoolAttendancePage = () => {
  const arr = [
    { name: '考勤記錄', href: '', as: '' },
    { name: '請假功能', href: '', as: '' },
    { name: '考勤統計', href: '', as: '' },
    { name: '考勤資料匯出', href: '', as: '' }
  ]
  return (
    <Page px='0' w={{ base: '100%', md: '1280px' }}>
      {/* 頭部 */}
      <PageHeader>
        <Fieldset title='考勤系統' background='white'>
          <LeftFieldset>
            <NextLink href=''>
              <Button
                borderWidth='1px'
                variant='outline'
                variantColor='blue'
                borderRadius='9999px'
                letterSpacing='1px'
              >
                出席規則
              </Button>
            </NextLink>
          </LeftFieldset>
          <FieldsetHeader bg='white'>考勤系統</FieldsetHeader>
        </Fieldset>
      </PageHeader>
      {/* 考勤導航 */}
      <AttendanceNav urls={arr} />
      {/* 今日考勤 */}
      <Fieldset Line>
        <FieldsetHeader fontSize='20px' bg='white'>今日考勤</FieldsetHeader>
      </Fieldset>
      {/* 搜索 考勤情況  全部 未到/準時 遲到 缺席 曠課 表格  分頁 */}
      <AttendanceSection />
    </Page>
  )
}
export default SchoolAttendancePage
