import { Box, Button, useToast } from 'viviui'
export default () => {
  const toast = useToast()
  return (
    <>
      <Box>~cypress.io</Box>
      <Button
        onClick={() =>
          toast({
            title: 'Account created.',
            description: "We've created your account for you.",
            status: 'success',
            duration: 9000,
            isClosable: true
          })}
      >
        Show Toast
      </Button>
    </>
  )
}
