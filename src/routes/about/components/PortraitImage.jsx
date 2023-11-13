import { Box, Image } from "@chakra-ui/react";

function PortraitImage() {

    return (
        <Box boxSize={{base:'xs', md:'sm'}}>
            <Image src='/portfolio-modified.jpeg' />
        </Box>
    )
}

export default PortraitImage;
