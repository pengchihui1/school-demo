import {
  ThemeProvider,
  CSSReset,
  Box,
  Stack,
  Heading,
  Button,
  useToast,
  CloseButton,
  Alert
} from 'viviui'

function Body() {
  const toast = useToast()
  return (
    <Stack m='0 auto' width='300px'>
      <Button
        variant='outline'
        variantColor='red'
        onClick={() => {
          toast({
            title: 'An error occurred.',
            description: 'message',
            status: 'error',
            duration: 9000,
            isClosable: true
          })
        }}
      >
        Example in docs fails
      </Button>
      <Button
        variant='outline'
        variantColor='red'
        onClick={() => {
          toast({
            render: () => <Alert status='error'>Sad Face</Alert>,
            duration: 9000,
            isClosable: true
          })
        }}
      >
        Fails when using an Alert
      </Button>
      <Button
        variant='outline'
        variantColor='red'
        onClick={() => {
          toast({
            render: () => (
              <Box>
                <Heading>Sad face</Heading>
                <CloseButton />
              </Box>
            ),
            duration: 9000,
            isClosable: true
          })
        }}
      >
        Fails when using an Icon
      </Button>
      <Button
        variant='outline'
        variantColor='green'
        onClick={() => {
          toast({
            render: () => (
              <Box>
                <Heading>Yay</Heading>
              </Box>
            ),
            duration: 9000,
            isClosable: true
          })
        }}
      >
        Simple render prop works
      </Button>
    </Stack>
  )
}

function Home() {
  return (
    <ThemeProvider>
      <CSSReset />
      <Body />
    </ThemeProvider>
  )
}

export default Home
