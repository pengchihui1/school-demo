// import Hello, { Left, Center, Right } from '../components/hello'
import App from '../App'
import SchoolAttendancePage from './schoolAttendancePage'

const Home = () => {
  return (
    <App>
      <SchoolAttendancePage />
    </App>
  )
}

export default Home

// export default () => {
//   return (
//     <div>
//       <div>hello component：</div>
//       <Hello itemOnClick={(value) => alert(value)}>
//         <Left>aaa</Left>
//         <Center>bbb</Center>
//         <Right>ccc</Right>
//       </Hello>
//     </div>
//   )
// }
