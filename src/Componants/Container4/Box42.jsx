
import {NewData} from "./box42data"
import {Stack ,Box} from "@chakra-ui/react"
const Box42=()=>
{
    return (
        <>
        <Stack direction="vertical" gap="20px"  width="80%" height={"600px"}  margin={"auto"} marginTop="50px"> 
        {NewData.map((el,i)=>(
            <Box width="100%" height={"600px"}   Key={i} cursor="pointer">
                <Box >
                <img src={el.img} alt="" />
                </Box>
               
               <Box fontSize="20px" marginTop={"5px"} color="black">
                <p style={{textAlign:"left"}}>{el.text}</p>
               </Box>
               <Box  fontSize="25px" marginTop={"5px"} paddingLeft="-20px" color="black" >
                <h1 style={{textAlign:"left"}} >{el.heading}</h1>
               </Box>
               <Box fontSize="15px" marginTop={"5px"} color="black" fontWeight={"600"}>
                <p style={{textAlign:"left"}} >{el.button}</p>
               </Box>
            </Box>
        ))}
        </Stack>
        </>
    )
}
export default Box42;