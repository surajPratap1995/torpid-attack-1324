
import {Box,Image,Stack} from "@chakra-ui/react"
import { NewData2 } from "../Container5/box51data";
const Box5=()=>
{
    return (
        <>
        <Stack direction="vertical"  width="95%" height="210px" gap="10px" margin={"auto"} marginTop="40px">
        {NewData2.map((el,i)=>(
            <Box width="100%" height={"210px"}   Key={i} cursor="pointer">
               <Box>
                <Image src={el.img} width="100%"></Image>
               </Box>
            </Box>
        ))}

        </Stack>
        </>
    )
}
export default Box5;