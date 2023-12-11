import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import {styled} from 'styled-components'
import { useNavigate } from 'react-router-dom'
const Search = () => {
    const [input,setInput] = useState("");
    const navigate = useNavigate();
    // Used to prevent the reloading of searchbar and category after submition 
    const submitHandler = (e) =>{
        e.preventDefault();
        navigate('/Searched/'+input);
    }

  return (
    <Formstyle onSubmit={submitHandler}>
        <div>
        <FaSearch></FaSearch>
        <input onChange={(e) =>setInput(e.target.value)} type='text' value={input}/>
        </div>
    </Formstyle>
  )
}

const Formstyle = styled.form`
margin: 0rem 4rem;

div{
    width: 100%;
    position: relative;
}

input{
    border: none;
    font-size:1.5rem;
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
    padding: 1rem 3rem;
    border-radius: 1rem;
    outline: none;
    width: 100%
}

svg{
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
}

`

export default Search