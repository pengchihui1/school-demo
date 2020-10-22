import {
  Button
} from 'viviui'

// import Layout from '../../components/layout'
import Page from '../../components/page'
import PageHeader from '../../components/pageHeader'

import Fieldset from '../../components/fieldset'
import FieldsetHeader from '../../components/fieldset/fieldsetHeader'

import AttendanceSection from './attendanceSection'

const SchoolAttendanceExportPage = () => {
  return (
    // <Layout>
    <Page>
      {/* 頭部 */}
      <PageHeader pt={6}>
        <Fieldset title='考勤匯出' background='white' Line>
          <FieldsetHeader bg='white'>考勤匯出</FieldsetHeader>
        </Fieldset>
      </PageHeader>
      {/* 主體 */}
      <AttendanceSection />
    </Page>
    // </Layout>
  )
}

export default SchoolAttendanceExportPage
