import './ExperienceSection.css'
import { Flex, Box, Heading, Text, HStack, Image } from "@chakra-ui/react"
import { Link } from "react-router-dom"

function ExperienceSection() {
    return (
        <Flex w='100%' flexDir='column' gap='100px' justifyContent={{base:'center', md:'start'}} pl={{base:'5%', md:0}} pr={{base:'5%', md:0}}>
            <JamieBurrowsExperience />
            <CaribouCoffeExperience />
            <EmpowerMagazineExperience />

        </Flex>
    )
}

function ExperienceTitle({job, company}) {
    return (
        <Flex flexDir='column' gap='8px' w='100%' justifyContent={{base:'center', md:'start'}} textAlign={{base:'center', md:'start'}}>
            <Flex justifyContent={{base:'center', md:'start'}} >
                <Heading color='black' fontSize={{base:'25px', xl:'45px'}}>{job}</Heading>
            </Flex>
            <Flex justifyContent={{base:'center', md:'start'}}>
                <Heading color='red.400' fontSize={{base:'15px', xl:'25px'}}>{company}</Heading>
            </Flex>

        </Flex>
    )
}

function BulletPoint({text}) {
    return (
        <HStack className="mont-font" fontWeight='medium' fontSize={{base:'11px', xl:'18px'}} justifyContent={'center'}>
            <Flex h='100%' alignSelf='start'>
                <Text >-</Text>
            </Flex>
            <Box>
                <Text>{text}</Text>
            </Box>
        </HStack>
            
    )
}

function WorkLink({src, title, link, logoSize}) {
    return (

        <Link to={link} target='_blank'>
            <HStack w='100%' spacing={5} justifyContent={{base:'center', md:'start'}}>
                <Box boxSize={{base:'40px', xl:logoSize}}>
                    <Image src={src}/>
                </Box>
                <Flex flexDir='column' gap='4px'>
                    <Heading fontSize={{base: '11px', xl:'18px'}}>{title}</Heading>
                    <Text color='#A4A4A4'  fontSize={{base: '7px', xl:'12px'}}>{link}</Text>
                </Flex>
            </HStack>
        </Link>
    )
}

function JamieBurrowsExperience() {

    const point1 = 'Crafted compelling content for LinkedIn posts, ensuring consistent brand messaging and audience engagement.';
    const point2 = 'Produced and edited videos showcasing recruitment training sessions/masterclass.';
    const point3 = 'Designed lead magnets and structured landing pages to engage potential and existing clients.';
    const point4 = 'Acquired practical knowledge of email marketing and sales automation by proficiently navigating and utilising the the KEAP software. ';

    const points = [point1, point2, point3, point4];

    return (
        <Flex flexDir='column' gap={{base: '30px', xl:'50px'}} justifyContent={{base:'center', md:'start'}}  >
            <ExperienceTitle job='Digital Marketing Assistant' company='Jamie Burrows Training for Recruiters'/>
        
            <Flex flexDir='column' w={{base:'100%', md:'70%'}} gap='14px' justifyContent={{base:'center', md:'start'}} textAlign={{base:'center', md:'start'}}>
                {points.map((point) => {
                    return <BulletPoint text={point} />
                })}
            </Flex>

            <Flex flexDir='column' gap='16px' w='100%'  >
                <HStack className="mont-font" fontWeight='medium' fontSize='18px' justifyContent={'center'}>
                    <Flex h='100%' alignSelf='start' display={{base:'none', md:'block'}}>
                        <Text color='white'>-</Text>
                    </Flex>
                    <WorkLink logoSize='80px' src='/youtubelogo.png' title="Jamie Burrows' Youtube Channel" link='https://www.youtube.com/@jamieburrows9747'/>
                </HStack>
                <HStack className="mont-font" fontWeight='medium' w='100%' fontSize='18px' justifyContent={'center'} >
                    <Flex h='100%' alignSelf='start' display={{base:'none', md:'block'}}>
                        <Text color='white'>-</Text>
                    </Flex>
                    <WorkLink logoSize='60px' src='/linkedinlogo.png' title="Jamie Burrows' LinkedIn Page" link="https://www.linkedin.com/in/jamie-burrows-training" />
                </HStack>
               
            </Flex>
           
        </Flex>
    )
}

function CaribouCoffeExperience() {

    const point1 = 'Assisted with social media campaigns, gaining knowledge of customer aquisition and retention techniques.';
    const point2 = 'Participated in product inventory. ';
   
    const points = [point1, point2];

    return (
        <Flex flexDir='column' gap='40px'>
            <ExperienceTitle job='Marketing Intern' company='Caribou Coffee'/>
        
            <Flex flexDir='column' w={{base:'100%', md:'70%'}} gap='14px' justifyContent={{base:'center', md:'start'}} textAlign={{base:'center', md:'start'}} >
                {points.map((point) => {
                    return <BulletPoint text={point} />
                })}

            </Flex>
        </Flex>
    )
}

function EmpowerMagazineExperience() {

    const point1 = 'Designed specific graphic/visual content.';
    const point2 = 'Created layouts for new issues ';
    const point3 = 'Introduced new ideas for social media platforms.';
   
    const points = [point1, point2, point3];

    return (
        <Flex flexDir='column' gap='40px'>
            <ExperienceTitle job='Website Designer' company='Empower Magazine'/>
        
            <Flex flexDir='column' w={{base:'100%', md:'70%'}} gap='14px' justifyContent={{base:'center', md:'start'}} textAlign={{base:'center', md:'start'}} >
                {points.map((point) => {
                    return <BulletPoint text={point} />
                })}

            </Flex>
        </Flex>
    )
}





export default ExperienceSection;