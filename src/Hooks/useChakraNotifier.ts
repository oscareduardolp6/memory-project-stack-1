import { useToast } from "@chakra-ui/react"
import { AlertFunction, Notifier } from "../Domain/Notifier"
import { seconds } from "../Utils/Seconds"

const isClosable = true
const duration = seconds(1)

export const useChakraNotifier = () => {
  const toast = useToast()
  const alertSuccess: AlertFunction = ({ message: description, title = 'Atención' }) => toast({
    title,
    isClosable,
    duration, 
    description, 
    status: 'success', 
  })

  const alertError: AlertFunction = ({message: description, title = 'Error'}) => toast({
    title, 
    isClosable, 
    duration, 
    description, 
    status: 'error'
  })

  const alertWarning: AlertFunction = ({message: description, title = 'Cuidado'}) => toast({
    title, 
    isClosable, 
    duration, 
    description, 
    status: 'warning'
  })

  const alertInfo: AlertFunction = ({message: description, title = 'Info'}) => toast({
    title, 
    isClosable, 
    duration, 
    description, 
    status: 'info'
  })

  const notifier: Notifier = {
    alertSuccess, 
    alertError, 
    alertWarning, 
    alertInfo
  }

  return notifier
}