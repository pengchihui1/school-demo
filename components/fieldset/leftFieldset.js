import React from 'react'
import {
  Box
} from 'viviui'

// 定位左边的数据
const LeftFieldset = (props) => {
  return (
    <Box
      position=' absolute'
      top='0'
      left=' 0'
      {...props}
    />
  )
}

export default LeftFieldset
