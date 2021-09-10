import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router'

const Planets = () => {
    const [data, setData] = useState('')
    const {id} = useParams()
  
    useEffect(() => {
      
      axios.get("https://swapi.dev/api/planets/" + id)
      .then(res => {
        setData(res.data)
      })
      .catch(err => console.log("These are not the droids you are looking for, planets"))
    }, [id])
    console.log("data: ", data)
  
  
    return (
      <div>
        <h1 className = "name">{data.name}</h1>
        <h2 className = "textBody">Climate: {data.climate}</h2>
        <h2 className = "textBody">Terrain: {data.terrain}</h2>
        <h2 className = "textBody">Surface Water: {data.surface_water}</h2>
        <h2 className = "textBody">Population: {data.population}</h2>
  
      </div>
    );
  }
export default Planets
