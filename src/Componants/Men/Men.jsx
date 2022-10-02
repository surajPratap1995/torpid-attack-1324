import {Box,Image,Stack} from "@chakra-ui/react"
import { NewData2 } from "./men1";
import { NewData1 } from "./men2";
import { NewData7 } from "./men3";
const Men=()=>
{
    return (
        <div>
             <div style={{marginTop:"18px",fontSize:"14px",fontWeight:"500"}}>
                <h2>Have a question? We can help.</h2>
            </div>
          <Box width={"100%"} style={{height:"700px",marginTop:"25px",display:"flex"}}>
            <Box style={{width:"43%",height:"700px"}}>
                <Box>
                <Image src="https://www.jcrew.com/brand_creative/2022/202210-Oct/m_newarrivals/2022oct_0927_m_na_img8.jpg" alt="" width="100%" height="700px" />
                </Box>
                <Box style={{marginTop:"-350px",color:"white"}}>
                    <h1 style={{fontSize:"60px",fontStyle:"normal" ,cursor:"pointer"}}>The October Collection</h1>
                    <h2 style={{fontSize:"25px"}}>As seen on the streets of Paris</h2>
                    <h2 style={{fontSize:"20px",marginTop:"10px", borderBottom:"5px solid white",cursor:"pointer"}}>shop new fall arrival</h2>
                </Box>
               
            </Box>

            <Box  style={{width:"57%",height:"700px"}}>
                <Box>
                <Image src="https://www.jcrew.com/brand_creative/2022/202210-Oct/m_newarrivals/2022oct_0927_m_na_img4.jpg" alt="" width="100%" height="700px" />
                </Box>
               

             
            </Box>
        </Box>
        <div>
             
             <p style={{fontSize:"32px",marginTop:"30px" ,fontWeight:"500"}}>Recommended for Y-O-U</p>
        </div>
        <Stack direction="vertical"  width="95%" height="210px" gap="10px" margin={"auto"} marginTop="40px">
        {NewData2.map((el,i)=>(
            <Box width="100%" height={"210px"}   Key={i} cursor="pointer">
               <Box>
                <Image src={el.img} width="100%"></Image>
               </Box>
            </Box>
        ))}

        </Stack>
        <div style={{fontSize:"32px",marginTop:"30px" ,fontWeight:"500"}}>
                <h2>Shops, stories & more</h2>
            </div>


        <Stack direction="vertical" gap="20px"  width="90%" height={"400px"}  margin={"auto"} marginTop="50px">
        
        {NewData1.map((el,i)=>(
            <Box width="100%" height={"400px"}   Key={i} cursor="pointer">
              
              <Box>
                <img src={el.img} alt="" />

              </Box>
              <Box>
                <h1 style={{fontSize:"16px",textAlign:"left" ,marginTop:"8px",color:"black",fontWeight:"600"}}>{el.h}</h1>
              </Box>
             
            </Box>
        ))}
     </Stack>

     <div style={{marginTop:"100px",fontWeight:"500"}}>
           <h2 style={{fontSize:"34px"}}>More you need to see</h2>
           
            </div>

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
        </div>
       
    )
}
export default Men;