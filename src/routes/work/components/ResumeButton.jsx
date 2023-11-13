import { Box, Button, Text, HStack } from "@chakra-ui/react";
import { BsDownload } from 'react-icons/bs'

function ResumeButton() {
    return (  
        <Button className="resume-button" bg='red.400'>
            <HStack spacing={3} color='white'>
                <Text>Download Resume</Text>
                <BsDownload />
            </HStack>
        </Button>
    )
}

export default ResumeButton;