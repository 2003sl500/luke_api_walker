import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router'

const People = () => {
    const [data, setData] = useState('')
    const {id} = useParams()
  
    useEffect(() => {
      
      axios.get("https://swapi.dev/api/people/" + id)
      .then(res => {
        setData(res.data)
      })
      .catch(err => console.log("These are not the droids you are looking for, people"))
    }, [id])
    console.log("data: ", data)
  
  
    return (
      <div>
       <h1 className = "name">{data.name}</h1>
       <h2 className = "textBody">Height: {data.height}</h2>
       <h2 className = "textBody">Mass: {data.mass}</h2>
       <h2 className = "textBody">Hair Color: {data.hair_color}</h2>
       <h2 className = "textBody">Skin Color: {data.skin_color}</h2>
  
      </div>
    );
  }
export default People