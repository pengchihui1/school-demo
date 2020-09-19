import Hello, { Left, Center, Right } from '../components/hello'

export default () => {
  return (
    <div>
      <div>hello component：</div>
      <Hello itemOnClick={(value) => alert(value)}>
        <Left>aaa</Left>
        <Center>bbb</Center>
        <Right>ccc</Right>
      </Hello>
    </div>
  )
}
