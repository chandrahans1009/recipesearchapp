import {FaHamburger,FaPizzaSlice,} from 'react-icons/fa'
import {GiChopsticks,GiNoodles, GiIndianPalace, GiFrenchFries} from 'react-icons/gi'
import { styled } from "styled-components";
import {NavLink} from 'react-router-dom'
const Category = () => {
  return (
    <List>
        <Slink to={'/cuisine/american'}>
            <FaHamburger/>
            <h4>American</h4>
        </Slink>
        <Slink to={'/cuisine/italian'}>
            <FaPizzaSlice />
            <h4>Italian</h4>
        </Slink>
        <Slink to={'/cuisine/indian'}>
            <GiIndianPalace/>
            <h4>Indian</h4>
        </Slink>
        <Slink to={'/cuisine/thai'}>
            <GiNoodles/>
            <h4>Thai</h4>
        </Slink>
        <Slink to={'/cuisine/japanese'}>
            <GiChopsticks/>
            <h4>Japanese</h4>
        </Slink>
        <Slink to={'/cuisine/french'}>
            <GiFrenchFries/>
            <h4>French</h4>
        </Slink>
    </List>
  )
}

const List = styled.div`
display: flex;
justify-content: center;
// align-items:center;
margin: 2rem 0rem;
`
const Slink = styled(NavLink)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 50%;
margin-right: 2rem;
text-decoration: none;
background: linear-gradient(35deg, #494949, #313131);
width: 6rem;
height: 6rem;
cursor: pointer;
transform: scale(0.5);
transition: transform .3s ease-out; 
h4{
color: white;
font-size: 0.8rem;
}

svg{
    color: white;
    font-size: 1.5rem;
}

&.active{
    transform: scale(0.7);
    // background: linear-gradient(to-right, #f27121, #e94057);
    background: rgb(206, 140, 53);
    svg{
        color: white;
    }
    h4{
        color: white;
    }
}


`

export default Category