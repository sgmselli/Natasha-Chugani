import { ChakraProvider, Box, Text, VStack, Heading, Flex } from "@chakra-ui/react";
import Header from "../../header/Header";
import BackgroundImage from "./components/background_image/Background_Image";
import { Title, BackgroundTitle} from "./components/Title/Title";
import Socials from "./components/socials/Socials";

function Landing() {


    return (
       <ChakraProvider>
            <Box h='100vh' w='100vw'>
                <Header /> 

                
                
                <Box display={{base:'none', xl:'block'}}>
                    <BackgroundTitle />
                </Box>

                <BackgroundImage />
                
                <Socials />
                <Title />
                
            </Box>
       </ChakraProvider>
    )
}

export default Landing;