import { ChakraProvider, Box, HStack, Heading, Flex} from "@chakra-ui/react";
import Header from "../../header/Header";
import { RightTopBackgroundImage, RightBottomBackgroundImage, BottomBackgroundImage } from "../landing/components/background_image/Background_Image";
import ResumeButton from "./components/ResumeButton";
import ExperienceSection from "./components/ExperienceSection/ExperienceSection";

function Work() {

    return (
        <ChakraProvider>
            <Box h={{base:'100%', xl:'240vh'}} w='100vw'>
                <Header />
                {/* Background Images */}
                <Box display={{base:'none', xl: 'block'}}>
                    <RightTopBackgroundImage width='20%' height='20%'/>
                    <RightBottomBackgroundImage width='22%' height='22%'/>
                    <BottomBackgroundImage width='20%' height='20%' />
                </Box>

                {/* Title */}
                <Flex flexDir='column' gap={{base:'40px', xl:'60px'}} w='100%' h='100%' pt={{base: '170px' ,md:'140px'}} pl={{base:0, md:'100px'}} pb='100px' position='relative'>

                    <Flex justifyContent={{base:'center', md:'start'}}>
                        <Title />   
                    </Flex>

                    <Flex w='100%' justifyContent={{base:'center', md:'start'}} >
                        <ExperienceSection />
                    </Flex>

                   
                </Flex>
            
            </Box>
        </ChakraProvider>
    )
}

function Title() {

    return (
        <HStack spacing={0}>
            <Heading fontSize={{base: '50px', md:'90px'}} color='black'>My Work</Heading>
            <Heading fontSize={{base: '50px', md:'90px'}} color='red.400'>:</Heading>
        </HStack>
    )
}

export default Work;