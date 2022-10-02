import {Box,Image,Heading,Text} from "@chakra-ui/react"
const Box2=()=>
{
    return (
    <Box style={{width:"90%",height:"2100px",margin:"auto",marginTop:"40px",}}>
        <Box style={{width:"100%",height:"700px", display:"flex"}} >
             <Box style={{width:"50%",height:"700px"}}>
                 <Box>
                  <Image src="https://www.jcrew.com/brand_creative/2022/202210-Oct/flyout/2022oct_0927_flyouts_women_img1.jpg" height="700px" width="100%">
                    
                  </Image>
                 </Box>
                 <Box style={{marginTop:"-330px",color:"white",fontStyle:"normal"}}>
                    <Heading as='h1' size="2xl" fontWeight="400">The coats of the season</Heading>
                      
                <Text fontSize='18px' marginTop="15px" fontWeight="700" borderBottom="2px solid white" cursor="pointer">shop forever layer</Text>
                </Box>

             </Box>
             <Box style={{width:"50%",height:"700px"}}>
               <Box>
                <Image src="https://www.jcrew.com/brand_creative/2022/202210-Oct/flyout/2022oct_0927_flyouts_women_img2.jpg" width="100%" height="700px"></Image>
               </Box>
               <Box style={{marginTop:"-150px",color:"white",fontStyle:"normal"}}>
                <Heading as='h2' fontSize="40px" fontWeight="400">A new generation of cashmere</Heading>
                <Text fontSize='18px' marginTop="15px" fontWeight="700" borderBottom="2px solid white" cursor="pointer">Shop our softest sweaters</Text>
                </Box>
             </Box>
        </Box>
        <Box style={{width:"100%",height:"700px",display:"flex"}}>
            <Box  style={{width:"50%",height:"700px"}}>
                <Box>
                    <Image src="https://www.jcrew.com/brand_creative/2022/202210-Oct/flyout/2022oct_0927_flyouts_women_img3.jpg" width="100%" height="700px">
                    </Image>
                    </Box>
                <Box style={{marginTop:"-650px",color:"black",fontStyle:"italic"}}>
                    <Heading as='h2' fontSize="50px" fontWeight="400">A Classic Remix</Heading>
                    <Text fontSize='18px' marginTop="15px" fontWeight="700" borderBottom="2px solid white" cursor="pointer">shop our fall campaign</Text>
                </Box>
               </Box>
            <Box  style={{width:"50%",height:"700px"}}>
                  <Box>
                    <Image src="https://www.jcrew.com/s7-img-facade/BK251_BK0001_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540" width="100%" height="700px"></Image>
                    </Box>
                  <Box style={{marginTop:"-450px",color:"white",fontStyle:"normal"}}>
                    <h2 style={{fontSize:"20px"}}>Pant Spotlight</h2>
                    <Heading as='h2' fontSize="35px" fontWeight="400" >The Cate Pant,now in faux leather</Heading>
                    <Text fontSize='18px' marginTop="15px" fontWeight="700" borderBottom="2px solid white" cursor="pointer">Pick your pair</Text>
                    </Box>
               </Box> 
        </Box>
        <Box style={{width:"100%",height:"700px",display:"flex"}}>
            <Box style={{width:"50%",height:"700px"}}>
                <Box>
                    <Image src="https://www.jcrew.com/s7-img-facade/BA555_BK0001?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480" width="100%" height="700px">

                    </Image>
                    </Box>
                <Box style={{marginTop:"-200px",color:"white",fontStyle:"normal" }}>
                    <Heading as='h2' fontSize="35px" fontWeight="400" cursor="pointer">The Stevie ankle boot</Heading>
                    <Text fontSize='18px' marginTop="15px" fontWeight="700" borderBottom="2px solid white" cursor="pointer">shop shoes</Text>
                    </Box>
               </Box>
            <Box style={{width:"50%",height:"700px"}}>
                  <Box>
                    <Image src="https://www.jcrew.com/s7-img-facade/BJ597_SU9601_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540" width="100%" height="700px"></Image>
                    </Box>
                  <Box style={{marginTop:"-200px",color:"white",fontStyle:"normal" }}>
                    <Heading as='h2' fontSize="45px" fontWeight="400" cursor="pointer">New in SuperSoft</Heading>
                    <Text fontSize='18px' marginTop="15px" fontWeight="700" borderBottom="2px solid white" cursor="pointer" >Shop all sweaters</Text>
                    </Box>
               </Box>
        </Box>

    </Box>

    )
}
export default Box2 