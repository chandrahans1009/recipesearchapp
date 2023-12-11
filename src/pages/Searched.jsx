import { motion } from 'framer-motion';
import React from 'react'
import { useEffect,useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import {styled} from 'styled-components'

const Searched = () => {

  const [searchedRecipies,setSearchedRecipies] = useState([]);

  let params = useParams();

  const getSearched = async (name) =>{
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}&number=9`)
    const recipes = await data.json();
    setSearchedRecipies(recipes.results);
}

  useEffect(()=>{
    getSearched(params.search);
  },[params.search])

  return (
    <Grid
    animate={{opacity:1}}
    initial={{opacity:0}}
    exit={{opacity:0}}
    transition={{duration: 0.5}}
    >
        {searchedRecipies.map((recipe)=>{
            return( 
              <LinkStyle to={'/recipe/'+recipe.id}>
              <Card key={recipe.id}>
                <img src={recipe.image} alt='/'/>
                <h4>{recipe.title}</h4>
            </Card>
              </LinkStyle> 
            )
        })}
    </Grid>
    // <div>{searchedRecipies.title}</div>
  )
}

const Grid = styled(motion.div)`
display: grid;
grid-template-columns : repeat(auto-fit,minmax(12rem, 1fr));
grid-gap: 1.5rem;

`
const Card = styled.div`

img{
    width:100%;
    border-radius:1rem;
}

a{
    text-decoration:none;
}

h4{
    text-align:center;
    padding: 1rem;
    text-decoration: none;
}

`
const LinkStyle = styled(Link)`
text-decoration: none;
`

export default Searched