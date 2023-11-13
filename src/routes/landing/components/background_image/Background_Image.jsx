import { HStack, VStack, Image, Spacer } from "@chakra-ui/react"

export function BackgroundImage() {
    return (
        <HStack h='100%' w='100%' position='absolute'>
            <Spacer />
            <VStack alignItems='end' h='100%' w='100%'>
                <Spacer/>
                <Image r={0} maxW='100%' maxH={{base: '40%', xl:'86%'}} src='/background-image1.png'/>
            </VStack>
        </HStack>
    )
}

export function BottomBackgroundImage({width, height}) {
    return (
        <HStack h='100%' w='100%' position='absolute'>
            
            <VStack alignItems='start' h='100%' w='100%'>
                <Spacer/>
                <Image r={0} maxW={width} maxH={height} src='/background-image2.png'/>
            </VStack>
            <Spacer />
        </HStack>
    )
}

export function RightTopBackgroundImage({width, height}) {
    return (
        <HStack h='100%' w='100%' position='absolute'>
            <Spacer />
            <VStack alignItems='end' h='100%' w='100%'>
                <Spacer/>
                <Image r={0} maxW={width} maxH={height} src='/background-image3.png'/>
                <Spacer />
                <Spacer />
                <Spacer />
                <Spacer />
            </VStack>
            
        </HStack>
    )
}

export function RightBottomBackgroundImage({width, height}) {
    return (
        <HStack h='100%' w='100%' position='absolute'>
            <Spacer />
            <VStack alignItems='end' h='100%' w='100%'>
                <Spacer />
                <Spacer />
                <Spacer />
                <Spacer/>
                <Image r={0} maxW={width} maxH={height} transform='scaleY(-1)' src='/background-image3.png'/>
                <Spacer />
            </VStack>
            
        </HStack>
    )
}

export default BackgroundImage;