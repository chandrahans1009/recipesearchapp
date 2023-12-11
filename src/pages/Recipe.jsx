import { useState,useEffect } from "react";
import {styled} from 'styled-components'
import { useParams } from "react-router-dom";

import React from 'react'
import { motion } from "framer-motion";

const Recipe = () => {

  const params = useParams()
  const [details,setDetails] = useState({});
  const [activeTab,setActiveTab] = useState("Instructions");


  const fetchDetails = async () =>{
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
    const dataDetails = await data.json();
    setDetails(dataDetails);
    console.log(details)
    console.log("hi")
  }
  
  useEffect(()=>{
    fetchDetails();
  },[params.name])

  return (
    <DetailWrapper
    animate={{opacity:1}}
    initial={{opacity:0}}
    exit={{opacity:0}}
    transition={{duration: 0.5}}
    >
      <div>
        <h1>{details.title}</h1>
        <img src={details.image} alt={details.title}/>
      </div>
        <Info>
          <ButtonWrapper>
          <Button className={activeTab==="Instructions"? "active": ''} onClick={()=>{setActiveTab("Instructions")}}>Instructions</Button>
          <Button className={activeTab==="Ingridients"? "active": ''} onClick={()=>{setActiveTab("Ingridients")}}>Ingridients</Button>
          </ButtonWrapper>
            {activeTab==='Instructions' && (
          <div>
            <h2 dangerouslySetInnerHTML={{__html: details.summary}}></h2>
            <h2 dangerouslySetInnerHTML={{__html: details.instructions}}></h2>
          </div>
            )}
            {activeTab==='Ingridients'&&(
            <ul>
           {details.extendedIngredients.map((ingridients)=>(
            <li key={ingridients.id}>{ingridients.original}</li>
           ))}
            </ul>
            )}
        </Info>
    </DetailWrapper>
  )
}

const DetailWrapper = styled(motion.div)`
margin-top: 5rem;
margin-bottom: 5rem;
display: flex;
// font-family: "Lobster two", cursive;
// flex-direction: column;

.active{
  background: linear-gradient(35deg, #494949, #313131);
  color: white;
}
h1{
  margin-bottom: 2rem;
  margin-top: 2rem;
  font-size: 1.5rem;
}

h2{
  margin-bottom: 2rem;
  margin-top: 2rem;
  font-size: 0.9rem;
}

li{
  font-size: 1.2rem;
  line-height: 2.5rem;
}

ul{
  margin-top: 2rem;
}

`

const Button = styled.button`
padding : 1rem 2rem;
height: 3rem;
color: #494949;
background: white;
border: 2px solid black;
margin-right: 2rem;
font-weight: 600;
`

const Info = styled.div`
// border: 10px solid red;
margin-left: 5rem;
display: flex;
flex-direction : column;
width: 21rem;

h2 li{
  margin-bottom: 0rem;
    margin-top: 0rem;
    font-size: 0.9rem;
    line-height: 2rem;
}

`
const ButtonWrapper = styled.div`
display: flex;
`
export default Recipe