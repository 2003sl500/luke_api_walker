import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'

const Form = () => {

    const [cat, setCat] = useState()
    const [id, setId] = useState()

    const history = useHistory()

    const submitHandler = (e) => {
        e.preventDefault()
        // console.log(`/${cat}/${id}`)
        history.push(`/${cat}/${id}`)
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <p>
                    <span id="spanCat">Search For:</span>
                    <select name="category" id="selectCat" onChange={e => setCat(e.target.value)}>
                        <option value="">Select Category</option>
                        <option value="people">People</option>
                        <option value="planets">Planets</option>    
                    </select>   
                    <span id="spanId">ID:</span> 
                    <input type="number" name="id" id="inputId" onChange={e => setId(e.target.value)}/>
                    <button>Search</button>
                </p>
            </form>
        </div>
    )
}

export default Form
