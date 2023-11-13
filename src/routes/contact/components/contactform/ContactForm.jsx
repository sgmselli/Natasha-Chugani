import { Box, VStack, Text, Input, FormControl, FormLabel, Flex, Textarea, HStack, Spacer, Button } from "@chakra-ui/react";
import { FaRegPaperPlane } from 'react-icons/fa';

function ContactForm() {

    return (
        <Flex w={{base:'260px', md:'465px',md:'600px'}} bg='red.400' justifyContent='center' pt='3' >

            <VStack width='90%' p='30px 5px' spacing={4}>
                <FormControl>
                    <FormLabel className='mont-font' color='white'  >Name</FormLabel>
                    <Input bg='white' borderRadius={0} border='none' placeholder='E.g. John Smith' className='form-input mont-font' fontSize='14px'/>
                </FormControl>

                <FormControl>
                    <FormLabel className='mont-font' color='white' >Email</FormLabel>
                    <Input bg='white' type='email' borderRadius={0} border='none' placeholder='E.g. johnsmith@example.com' className='form-input mont-font' fontSize='14px'/>
                </FormControl>


                <FormControl>
                    <FormLabel className='mont-font' color='white' >Message</FormLabel>
                    <Textarea h='160px' bg='white' borderRadius={0} border='none' placeholder='Write us a message!' className='form-input mont-font' fontSize='14px' resize='none' />
                </FormControl>

                <HStack w='100%'>
                    <Button>
                        <HStack spacing={3}>
                            <Text>Send message </Text>
                            <FaRegPaperPlane /> 
                        </HStack>
                    </Button>
                    <Spacer/>
                </HStack>

                
                

            </VStack>

        </Flex>
    )
}



export default ContactForm;