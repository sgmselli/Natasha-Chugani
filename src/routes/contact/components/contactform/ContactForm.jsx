import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { Box, VStack, Text, Input, FormControl, FormLabel, Flex, Textarea, HStack, Spacer, Button, AlertDialog, AlertDialogOverlay, AlertDialogBody, AlertDialogContent, AlertDialogCloseButton, AlertDialogFooter, AlertDialogHeader, AlertIcon, Alert } from "@chakra-ui/react";
import { FaRegPaperPlane } from 'react-icons/fa';
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";

function ContactForm() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const resetForm = () => {
        setName('');
        setEmail('');
        setMessage('');
    }


    return (
        <Flex w={{base:'360px', sm:'465px',md:'600px'}} bg='red.400' justifyContent='center' pt='3' >

            <VStack width='90%' p='30px 5px' spacing={4}>
                <FormControl>
                    <FormLabel className='mont-font' color='white'  >Name</FormLabel>
                    <Input onChange={(e) => setName(e.target.value)} value={name} bg='white' borderRadius={0} border='none' placeholder='E.g. John Smith' className='form-input mont-font' fontSize='14px'/>
                </FormControl>

                <FormControl>
                    <FormLabel className='mont-font' color='white' >Email</FormLabel>
                    <Input onChange={(e) => setEmail(e.target.value)} value={email} bg='white' type='email' borderRadius={0} border='none' placeholder='E.g. johnsmith@example.com' className='form-input mont-font' fontSize='14px'/>
                </FormControl>


                <FormControl>
                    <FormLabel className='mont-font' color='white' >Message</FormLabel>
                    <Textarea onChange={(e) => setMessage(e.target.value)} value={message} h='160px' bg='white' borderRadius={0} border='none' placeholder='Write us a message!' className='form-input mont-font' fontSize='14px' resize='none' />
                </FormControl>

                <SendButton name={name} email={email} message={message} resetForm={resetForm}/>
            s
            </VStack>

        </Flex>
    )
}

function SendButton({name, email, message, resetForm}) {

    const [sent, setSent] = useState(false);
    const [successful, setSuccessful] = useState(false);

    const sendEmail = (name, email, message) => {
        const templateParams = {
        name: name,
        message: message,
        email: email,
        };
    
        emailjs.send('service_voutaup', 'template_gbvknkz', templateParams, 'cGRV8A3d2SdRmn58d')
            .then(function() {
                setSent(true)
                setSuccessful(true)
            }, function() {
                setSent(true)
                setSuccessful(false)
        });
        

    }

    function valid(name, email, message) {
        if (name === '' || email === '' || message === '') {
            alert('Please fill in all inputs.')
            return false
        }
        return true
    }

    const handleClick = () => {
        resetForm();
        if (valid(name, email, message)) {
            sendEmail(name, email, message)
        } 
    }


    return (
        <HStack w='100%'>
            <EmailAlert open={sent} successful={successful} setOpen={setSent}/>
            <Button onClick={handleClick}>
                <HStack spacing={3}>
                    <Text>Send message</Text>
                    <FaRegPaperPlane /> 
                </HStack>
            </Button>
            <Spacer/>
        </HStack>
    )
}

function EmailAlert({open, successful, setOpen}) {

    const handleClose = () => {
        setOpen(false)
    }

  return (
    <>
     
      <AlertDialog
        motionPreset='slideInBottom'
        isOpen={open}
        isCentered
        >
        <AlertDialogOverlay />

        <AlertDialogContent w='300px' h='300px' >

          <AlertDialogHeader >
            <VStack justifyContent={'center'} w='100%'  >
                {successful ?
                    <>
                        <Box color='blue.400'>
                            <TiTick size={40}/>
                        </Box>
                        
                        <Text color='blue.400'>Success!</Text>
                    </>
                :
                    <>
                        <Box color='red.400' pt={2}>
                            <ImCross size={20}/>
                        </Box>
                        <Text color='red.400'>An Error Occured!</Text>
                    </>
                }
                
            </VStack>
        </AlertDialogHeader>

        <AlertDialogBody textAlign={'center'} color='gray.500' h='100%' alignItems={'center'}>
            <Flex h='100%' alignItems={'center'} justifyContent={'center'}>
                <Text>{successful 
                ? 
                    'Thank you for your message! I will get back to you as soon as possible!' 
                :
                    'Sorry there has been an error! Try sending your message again!'
                }</Text>
            </Flex>
        </AlertDialogBody>
    
        <Flex justifyContent={'center'} pb='40px' pt='30px'>
            {successful     
            ?
                <Button _hover={{bg:'blue.600'}} bg='blue.400' color='white' onClick={handleClose}>Continue</Button>
            :
                <Button _hover={{bg:'red.600'}} bg='red.400' color='white' onClick={handleClose}>Continue</Button>
            }
            
        </Flex>
            
     
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}



export default ContactForm;