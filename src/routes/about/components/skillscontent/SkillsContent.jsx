import { Box, Flex, Spacer, Heading, Text } from "@chakra-ui/react";

function SkillsContent() {
    return (
        <Flex w='100%' justifyContent='center' alignItems='center'>
             <Spacer />
            <Flex bg='red.400' boxSize='420px' flexDir='column'  alignItems='center'>
                <Box color='white'  pt='48px'>
                    <Heading >Skills</Heading>
                    <Flex flexDir='column' gap='14px' pt='34px'>
                        <Text fontSize='26px' fontWeight='thin'>- Content Marketing</Text>
                        <Text fontSize='26px' fontWeight='thin'>- Social Media Marketing</Text>
                        <Text fontSize='26px' fontWeight='thin'>- Video Production</Text>
                        <Text fontSize='26px' fontWeight='thin'>- Graphic Design</Text>
                    </Flex>

                </Box>
            </Flex>
            <Spacer />
        </Flex>
        
    )
}

export default SkillsContent;