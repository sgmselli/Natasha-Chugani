import './Contact.css'
import { ChakraProvider, Box, Text, Heading, HStack, Flex, Stack, Container} from "@chakra-ui/react";
import Header from "../../header/Header";
import { BackgroundImage, BottomBackgroundImage} from "../landing/components/background_image/Background_Image";
import ContactForm from './components/contactform/ContactForm';
import ContactDetails from './components/contactdetails/ContactDetails';

function Contact() {

    return (
        <ChakraProvider>
            <Box h='100vh' w='100vw' >
                <Header />

               {/* Background Images */}
                <Box display={{base:'none', xl:'block'}}>
                    <BackgroundImage  />
                </Box>
                <Box display={{base:'none', md:'block'}}>
                    <BottomBackgroundImage width='30%' height='30%' />
                </Box>
                

                <Flex w='100%' h='100%' pt={{base: '170px' ,md:'13vh'}} position='relative' justifyContent='center'  pl={{base:'5%', md:'0'}} pr={{base:'5%', md:'300px'}}>
             
                    <Box>
                        <Flex justifyContent={{base:'center', md:'start'}} >
                            <Title />
                        </Flex>


                        <Stack  alignItems={{base:'center'}} direction={{base:'column', xl:'row'}} w='100%' pt='4%'  spacing={{base:'50px', xl:'140px'}} flexWrap='wrap' >
                            <Box  >
                                <ContactForm />
                            </Box>

                            <Flex h='100%' mb={{base: '10vh' ,xl:'0'}} w={{base:'100%', xl:'0%'}} alignSelf='start' justifyContent={{base:'center', xl:'start'}}   >
                                <ContactDetails />  
                            </Flex>                        
                        </Stack>
                    </Box>
    


                </Flex>
               

            </Box>
        </ChakraProvider>
    )
}

function Title() {

    return (
        <HStack spacing={0} >
            <Heading fontSize={{base: '50px', md:'90px'}} color='black'>Contact</Heading>
            <Heading fontSize={{base: '50px', md:'90px'}} color='red.400'>:</Heading>
        </HStack>
    )
}

export default Contact;
