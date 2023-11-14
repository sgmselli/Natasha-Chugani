import './About.css';
import { ChakraProvider, Box, Text, Heading, HStack, Spacer, Flex, Stack} from "@chakra-ui/react";
import Header from "../../header/Header";
import { BottomBackgroundImage, RightTopBackgroundImage } from "../landing/components/background_image/Background_Image";
import PortraitImage from "./components/PortraitImage";
import SkillsContent from './components/skillscontent/SkillsContent';

function About() {

    return (
        <ChakraProvider>
            <Box h='100vh' w='100vw'>
                <Header />

                {/* Background images */}
                <Box display={{base:'none', xl:'block'}}>
                    <RightTopBackgroundImage width='30%' height='30%' />
                    {/* <BottomBackgroundImage width='30%' height='30%'/> */}
                </Box>
                

                <Box w='100%' h='100%' pt={{base: '170px' ,md:'120px'}}  position='relative' pl={{base:'5%', md:'100px'}} pr={{base:'5%', md:'100px'}}>

                    <Flex justifyContent={{base:'center', xl:'start'}}>
                        <Title />   
                    </Flex>

                    {/* Person Image and about description */}
                    <Stack direction={{base:'column', xl:'row'}} pt={{base: '40px', xl:'70px'}} pb={{base:'100px', xl:0}} spacing='100px'>

                        <Description />
                        <Flex justifyContent={{base:'center', xl:'start'}}>
                            <PortraitImage />
                        </Flex>
                        
                    </Stack>

                    {/* Skills content
                    <HStack pt='100px' spacing='100px' >
                        
                        <SkillsContent />
                        <Spacer />
                    </HStack> */}

                </Box>





            </Box>
        </ChakraProvider>
    )
}

function Title() {
    return (
        <Box>
            <HStack spacing={4}>
                <Heading fontSize={{base: '50px', md:'70px'}} color='black'>About</Heading>
                <HStack spacing={0}>
                    <Heading fontSize={{base: '50px', md:'70px'}} color='black'>Me</Heading>
                    <Heading fontSize={{base: '50px', md:'70px'}} color='red.400'>:</Heading>
                </HStack>
               
                
            </HStack>
            
        </Box>
    )
}

function Description() {
    return (
        <Flex flexDir='column' gap='15px' fontWeight='medium' color='#505050' w={{base:'100%', xl:'600px'}} className="mont-font" lineHeight='35px' fontSize={{base:'13px', xl:'18px'}} textAlign={{base:'center', xl:'start'}}>

            <Text >
                Hey there 👋, my name is Natasha Chugani. 
                I am a penultimate year Communication and Media studies
                student at the Russel Group university, <mark>Kings College London </mark>. 
            </Text>
            <Text>
            I'm also a Digital Marketing Assistant, currently working at <mark>Jamie Burrows Training for Recruiters</mark>, managing there social media and video production. I also have previous experience at <mark>Caribou Coffee</mark> as a Marketing Intern. I also extend myself to graphic design, in which I have experience at <mark>Empower Magazine</mark> as a Web Designer.
            </Text>
            <Text>
                Get in touch with me for collaborations or just a chat!
            </Text>
        </Flex>

    )
}

export default About;