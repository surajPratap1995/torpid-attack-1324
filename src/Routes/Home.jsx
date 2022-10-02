import Box1 from "../Componants/Container1/Box1"
import Box2 from "../Componants/Container2/Box2";
import Box3 from "../Componants/Container3/Box3";
import Box4 from "../Componants/Container4/Box4";
import Box5 from "../Componants/Container5/Box5.jsx";
import Box6 from "../Componants/Container6/Box6";
import Box7 from "../Componants/Container7/Box7"
const Home= () => {
    return (
        <div>
            <div style={{marginTop:"18px",fontSize:"14px",fontWeight:"500"}}>
                <h2>Have a question? We can help.</h2>
            </div>
            <Box1/>
            <Box2/>
            <Box3/>
            <Box4/>
            <div style={{marginTop:"60px",fontSize:"38px",fontWeight:"400"}} >
                <h2>You’ll Also Love</h2>
            </div>
            <Box5/>
            <div style={{marginTop:"60px",fontWeight:"500"}}>
           <h2 style={{fontSize:"34px"}}>Shop our Instagram</h2>
           <p style={{fontSize:"20px"}}>(and join the fun with #injcrew)</p>
            </div>
            <Box6/>
            <div style={{marginTop:"80px",fontWeight:"500"}}>
           <h2 style={{fontSize:"34px"}}>More you need to see</h2>
           
            </div>
            <Box7/>
            <p style={{borderBottom:"1px solid grey", marginTop:"60px"}}></p>

        </div>
    )
}
export default Home;