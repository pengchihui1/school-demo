import {
  Box,
  Heading
} from 'viviui'

const PageHeader = ({ title, headingProps, children, ...props }) => {
  return (
    <Box as='header' {...props} position='relative'>
      {
        !!title && (
          <Heading
            as='h2'
            textAlign='center'
            size='lg'

            overflow='hidden'
            textOverflow='ellipsis'
            whiteSpace='nowrap'
            {...headingProps}
          >
            {title}
          </Heading>
        )
      }
      {children}
    </Box>
  )
}

export default PageHeader
