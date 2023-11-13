import { Heading, Text, HStack, Spacer, VStack, Box, Stack, Flex} from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";

function Header() {

    const [page, setPage] = useState('nothing');
    const [homeHover, setHomeHover] = useState(false);
    const [aboutHover, setAboutHover] = useState(false);
    const [workHover, setWorkHover] = useState(false);
    const [contactHover, setContactHover] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const urlParts = window.location.href.split("/");
        const len = urlParts.length 
        setPage(urlParts[len-1])
    }, [])

    const navigateTo = (location) => {
        navigate(`/${location}`);
    }

    const changeHover = (selected) => {
        if (selected === 'home') {
            setHomeHover(!homeHover)
        }
        if (selected === 'about') {
            setAboutHover(!aboutHover)
        }
        if (selected === 'work') {
            setWorkHover(!workHover)
        }
        if (selected === 'contact') {
            setContactHover(!contactHover)
        }
    } 

    return (
        
            <Stack direction={{base:'column', md: 'row'}} width='100%' pl={{base:0, md:'4%'}} pr={{base:0, md:'10%'}} pt={{base:'4vh', md: '2%'}} position='absolute'  zIndex='10'  >
                <Flex justifyContent={{base:'center', xl:'start'}}>
                 <Heading  size='xl'onClick={(location) => navigateTo('')} cursor='pointer' >Natasha</Heading>
              
                </Flex>
                <Spacer />
                
                <HStack pt={{base:'4vh', md:'0'}} justifyContent={'center'} spacing={{base:'5', md: '16'}}>

                    {page === '' || homeHover ?
                        <VStack>
                            <CurrentPageBar width='58px' />
                            <Text onClick={(location) => navigateTo('')}  cursor='pointer' color='red.400' fontSize='xl'>Home</Text> 
                        </VStack>
                    :
                        <Text onClick={(location) => navigateTo('')}  cursor='pointer' fontSize='xl'>Home</Text> 
                    }
                    
                    {page === 'about' || aboutHover ?
                        <VStack>
                            <CurrentPageBar width='58px' />
                            <Text fontSize='xl' onClick={(location) => navigateTo('about')} onMouseLeave={(page) => changeHover('about')} color='red.400' cursor='pointer'>About</Text>
                        </VStack>
                    :
                        <Text fontSize='xl' onClick={(location) => navigateTo('about')} onMouseEnter={(page) => changeHover('about')} cursor='pointer'>About</Text>
                    }
                    
                    {page === 'work' || workHover ?
                        <VStack>
                            <CurrentPageBar width='50px' />
                            <Text fontSize='xl' onClick={(location) => navigateTo('work')} onMouseLeave={(page) => changeHover('work')} color='red.400' cursor='pointer'>Work</Text>
                        </VStack>
                    :
                        <Text fontSize='xl' onClick={(location) => navigateTo('work')} onMouseEnter={(page) => changeHover('work')} cursor='pointer'>Work</Text>
                    }

                    {page === 'contact' || contactHover ?
                        <VStack>
                            <CurrentPageBar width='70px' />
                            <Text fontSize='xl' onClick={(location) => navigateTo('contact')} onMouseLeave={(page) => changeHover('contact')} color='red.400' cursor='pointer'>Contact</Text>
                        </VStack>
                    :
                        <Text fontSize='xl' onClick={(location) => navigateTo('contact')} onMouseEnter={(page) => changeHover('contact')} cursor='pointer'>Contact</Text>
                    }
                    
                </HStack>
            </Stack>
            
    )
}

function CurrentPageBar({width}) {
    return (
        <Box position='absolute' top={{base:'65%', md:0}} w={width} bg='red.400'  h='14px'></Box>
    )
}

export default Header;