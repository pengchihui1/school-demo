import React, { Children } from 'react'
import {
  Box,
  Button
} from 'viviui'
import NextLink from 'next/link'

import Container from '../../components/container'

const AttendanceNav = ({ urls, ...props }) => {
  return (
    <Container>
      <Box
        d='flex'
        justifyContent='center'
        mx='auto'
      >
        {urls.map((item, i) => {
          return (
            <Box mx={5} key={i}>
              <NextLink href=''>
                <Button
                  variantColor='blue'
                  size='sm'
                  w='120px'
                  letterSpacing='1px'
                >
                  {item.name}
                </Button>
              </NextLink>
            </Box>
          )
        })}
      </Box>
    </Container>
  )
}
export default AttendanceNav
