import { VStack, HStack, Text, Box, Flex } from "@chakra-ui/react"
import { BsInstagram, BsLinkedin } from 'react-icons/bs';
import { Link } from "react-router-dom";


function ContactDetails() {
    return (
        <Flex flexDir='column' gap='32px' alignItems={{base:'center', xl: 'start'}} textAlign={{base:'center', xl: 'start'}}>
            <Flex flexDir='column' gap='6px'>
                <Text className="mont-font" fontSize='14px'>Phone</Text>
                <Text className="mont-font" fontWeight='extrabold' fontSize='17px'>(+44)7873 962642</Text>
            </Flex>

            <Flex flexDir='column' gap='6px'>
                <Text className="mont-font" fontSize='14px'>Email</Text>
                <Text className="mont-font" fontWeight='extrabold' fontSize='17px'>sgmselli@gmail.com</Text>
            </Flex>

            <Flex flexDir='column' gap='6px'> 
                <Text className="mont-font" fontSize='14px'>Address</Text>
                <Text className="mont-font" fontWeight='extrabold' fontSize='17px'>London, United Kingdom</Text>
            </Flex>

            <Flex flexDir='column' gap='8px'>
                <Text className="mont-font" fontSize='14px'>Socials</Text>
                <HStack>
                <Link to='https://www.linkedin.com/in/natasha-chugani-1885a7270/' target='_blank' ><BsLinkedin size={18} /></Link>
                    <Link  to='https://www.instagram.com/natasha.2329/' target='_blank' ><BsInstagram size={18} /></Link>
                </HStack>
            </Flex>

        </Flex>
    )
}

export default ContactDetails;