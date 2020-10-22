import {
  Flex,
  Button,
  Box,
  IconButton
} from 'viviui'

import { MdKeyboardArrowRight } from 'react-icons/md'

const classList = ['K1A', 'K1B', 'K1C', 'K1D', 'K1E', 'K1F', 'K2C', 'K2D', 'P1B', 'P1D', 'P3C', 'P3D']

const SelectedExport = () => {
  return (
    <Flex justify='center' align='center' rounded='20px'>
      {/* 左側的 */}
      <Flex bg='#E2E8F0' w='250px' flexDirection='column' p='0px 5px'>
        {classList.map((item, i) => {
          return (
            <Button key={i} bg='white' variant='outline' m='2px'>{item} </Button>
          )
        })}
      </Flex>
      {/* 中間的箭頭符號 */}
      <Flex>
        <Box borderRight='2px solid black' m={2} borderBottom='2px solid black' w='30px' h='30px' transform='rotate(-45deg)' />
      </Flex>
      {/* 右側的 */}
      {/* <Flex bg='#E2E8F0' w='250px' flexDirection='column' p='0px 5px'>
        {classList.map((item, i) => {
          return (
            <Button key={i} bg='white' variant='outline'>{item} </Button>
          )
        })}
      </Flex> */}
    </Flex>
  )
}

export default SelectedExport
