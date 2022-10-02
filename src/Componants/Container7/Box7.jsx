import {Box,Image,Stack} from "@chakra-ui/react";
import { NewData7 } from "./box7data";

const Box7=()=>
{
    return (
        <>

<Stack direction="vertical"  width="95%" height="260px" gap="10px" margin={"auto"} marginTop="40px">
        {NewData7.map((el,i)=>(
            <Box width="100%" height={"210px"}   Key={i} cursor="pointer">
               <Box>
                <Image src={el.img} width="100%"></Image>
               </Box>
               <Box>
                 <h1 style={{fontSize:"13px", fontWeight:"700" ,marginTop:"5px"}}>{el.p}</h1>
               </Box>
            </Box>
        ))}

        </Stack>
        </>
    )
}
export default Box7
