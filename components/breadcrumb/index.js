import {
  Icon,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button
} from 'viviui'
import NextLink from 'next/link'

const BreadcrumbComponent = ({ urls, ...props }) => (
  <Breadcrumb
    m={2}
    {...props}
    spacing='8px'
    separator={<Icon name='chevron-right' my='auto' alignItems='center' textAlign='center' />}
  >
    {
      urls.map((url, index) => (
        <BreadcrumbItem key={index}>
          <NextLink href={url.href} as={url.as} passHref>
            <BreadcrumbLink _hover={{ textDecoration: 'none' }}>
              <Button
                border='1px solid #A0AEC0'
                bg='white'
              >
                {url.name}
              </Button>
            </BreadcrumbLink>
            {/* <BreadcrumbLink
              color='#1b6ac9'
              fontWeight='bold'
            >
              {url.name}
            </BreadcrumbLink> */}
          </NextLink>
        </BreadcrumbItem>
      ))
    }
  </Breadcrumb>
)

export default BreadcrumbComponent
