
import { NewData1 } from "./box43data";
import {Heading, Stack,Box } from "@chakra-ui/react";
const Box43=()=>
{
    return (
        <>
         <Heading style={{marginRight:"800px",marginTop:"40px" ,fontSize:"50px",fontWeight:"400"}}>More Stories</Heading>
         <Stack direction="vertical" gap="20px"  width="80%" height={"500px"}  margin={"auto"} marginTop="50px">
        
            {NewData1.map((el,i)=>(
                <Box width="100%" height={"500px"}   Key={i} cursor="pointer">
                  
                  <Box>
                    <img src={el.img} alt="" />

                  </Box>
                  <Box>
                    <h1 style={{fontSize:"22px",textAlign:"left" ,marginTop:"8px",color:"black",fontWeight:"400"}}>{el.h}</h1>
                  </Box>
                  <Box style={{fontSize:"15px",textAlign:"left" ,marginTop:"8px",color:"black", fontWeight:"700"}}>
                    {el.p}
                  </Box>
                </Box>
            ))}
         </Stack>
        </>
    )
}
export default Box43;