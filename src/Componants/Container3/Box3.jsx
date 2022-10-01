import {Box,Image,Heading,Button} from "@chakra-ui/react"
const Box3=()=>
{

    return (
        <>
        
        <Box style={{width:"100%",marginTop:"70px"}}>
            <Image src="https://www.jcrew.com/brand_creative/homepage2022/09-Sep/2022sep_0816_hp_w_lkbk_img0b.jpg"></Image>
        </Box>
        <Box width={"80%"}  height={"75px"} margin="auto" marginTop={"50px"} display="flex">
            <Box width={"40%" }  height={"70px"} marginTop="2px">
               <Heading fontSize={"38px"} fontWeight="400">Shop New Arrivals</Heading>
            </Box>
            <Box width={"60%"}  height={"70px"}  display={"flex"} justifyContent={"space-evenly"}  marginTop="5px" >
              <Button border={"1px solid grey"} borderRadius="0%" backgroundColor={"white"} fontWeight="700" >Shop Women</Button>
              <Button border={"1px solid grey"} borderRadius="0%" backgroundColor={"white"} fontWeight="700">Shop Men</Button>
              <Button border={"1px solid grey"} borderRadius="0%" backgroundColor={"white"} fontWeight="700">Shop Girls</Button>
              <Button border={"1px solid grey"} borderRadius="0%" backgroundColor={"white"} fontWeight="700">Shop Boys </Button>
            </Box>
        </Box>
        </>   
    )
}
export default Box3