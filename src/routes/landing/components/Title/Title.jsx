import './Title.css'
import '../../../../fonts/fonts.css'
import { Box, Flex, HStack, Heading, Spacer, Text, VStack } from "@chakra-ui/react";


export function Title() {

    return (
        <VStack h='100%' w='100%' alignItems='center' justifyContent='center' pr={{md:0, xl:'200px'}} position='relative'>
         <Spacer/>
            <Box>
                <HStack spacing={0}>
                    <Heading fontSize={{base: '50px', xl:'145px'}} >Hello</Heading>
                    <Heading fontSize={{base: '50px', xl:'145px'}} color='red.400'>.</Heading>
                </HStack>

                <HStack spacing={{base:6, xl:16}}>
                    <HStack spacing={4}>
                        <Heading textOverflow='none' fontSize={{base: '50px', xl:'145px'}} >I</Heading>
                        <Heading textOverflow='none' fontSize={{base: '50px', xl:'145px'}} >am </Heading>
                    </HStack>
                    
                    <SubTitle />
                </HStack>
                
                <Heading fontSize={{base: '50px', xl:'145px'}} >Natasha</Heading>
            </Box>
            <Spacer />
        </VStack>
    )
}


function SubTitle() {

    return (
        <Flex flexDir='column' gap='8px' pt={{base:'10px', xl:'30px'}} whiteSpace='nowrap' className='mont-font' fontWeight='medium' fontSize={{base: '8px', xl:'22px'}} position='relative'>
            <Text  > A Professional Digital Marketing Assistant</Text>
            <Text  >and Graphic Designer currently based</Text>
            <Text  >in London, United Kingdom</Text>
        </Flex>
    )
}

export function BackgroundTitle() {
    return (
        <Flex h='100%' w='100%' alignItems='center' justifyContent='center' position='absolute' pr='300px'>
            <Box color='#F9F9F9'>
                <Heading fontSize='240px'>Natasha</Heading>
                <Heading fontSize='240px'>Chugani</Heading>
            </Box>
        </Flex>

    )
}

export default Title;