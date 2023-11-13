import { HStack, Spacer, VStack, Stack  } from "@chakra-ui/react"
import { BsInstagram, BsLinkedin } from 'react-icons/bs';
import { Link } from "react-router-dom";
import { Tooltip } from "@chakra-ui/react";

function Socials() {

    return (
        <HStack h='100%' w='100%' position='absolute'>

            <VStack alignItems='start' justifyContent='end' h='100%' w='100%' zIndex='1'>

                <Spacer/>

                <HStack spacing={6} padding='30px' >
                    <Tooltip hasArrow label='View my LinkedIn!' bg='gray.300' color='black'>
                        <Link to='https://www.linkedin.com/in/natasha-chugani-1885a7270/' target='_blank' ><BsLinkedin size={36} color='#C8C8C8'/></Link>
                    </Tooltip>   

                    <Tooltip hasArrow label='View my Instagram!' bg='gray.300' color='black'>
                        <Link  to='https://www.instagram.com/natasha.2329/' target='_blank' ><BsInstagram size={36} color='#C8C8C8'/></Link>
                    </Tooltip>
                </HStack>

            </VStack>

            <Spacer />

        </HStack>
    )
}

export default Socials;