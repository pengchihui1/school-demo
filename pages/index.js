// import Hello, { Left, Center, Right } from '../components/hello'
import App from '../App'
import SchoolAttendancePage from './schoolAttendancePage'
import SchoolAttendanceRecordPage from './schoolAttendanceRecordPage'

const Home = () => {
  return (
    <App>
      <SchoolAttendanceRecordPage />
    </App>
  )
}

export default Home
