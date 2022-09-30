import {Box,Image} from "@chakra-ui/react"
const Box1=()=>
{
    return (
        <Box width={"100%"} style={{height:"700px",marginTop:"25px",display:"flex"}}>
            <Box style={{width:"43%",height:"700px"}}>
               <Image src="https://www.jcrew.com/brand_creative/2022/202210-Oct/w_newarrivals/2022oct_0927_w_na_img0.jpg" alt="" width="100%" height="700px" />
            </Box>

            <Box  style={{width:"57%",height:"700px"}}>
                <Box>
                <Image src="https://www.jcrew.com/brand_creative/2022/202210-Oct/w_newarrivals/2022oct_0927_w_na_img8.jpg" alt="" width="100%" height="700px" />
                </Box>
                <Box style={{marginTop:"-350px",color:"white"}}>
                    <h1 style={{fontSize:"60px",fontStyle:"italic" ,cursor:"pointer"}}>Postcards from Paris</h1>
                    <h2 style={{fontSize:"25px"}}>Featuring the October Collection</h2>
                    <h2 style={{fontSize:"20px",marginTop:"10px", borderBottom:"5px solid white",cursor:"pointer"}}>shop new fall arrival</h2>
                </Box>

             
            </Box>
        </Box>
    )
}
export default Box1;