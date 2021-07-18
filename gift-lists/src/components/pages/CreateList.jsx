import React, { useState } from 'react'
import axios from 'axios'

function CreateList() {
    const [list, setList] = useState([])
    const [item, setItem] = useState({ name: '', url: '' })
    
    const api = axios.create({
        baseURL: 'https://localhost:5001',
        headers: { 'Access-Control-Allow-Origin': true }
    })

    const handleAddItemToList = () => {
        setList([...list, item]);
        setItem({ name: '', url: '' });
    }
    const handleSaveList = () => {
        api.post('api/giftlist/create', list).then(res => {
            alert(`List created!`)
            console.log("List created response", res);
        }, (error) => console.log(error));  
    }
    const handleNameChange = (e) => setItem({...item, name: e.target.value})
    const handleUrlChange = (e) => setItem({...item, url: e.target.value})

    return (
        <div>
            <h1>Create List</h1>
            <ul>
                {list.map(item => {
                    return <li><b>Name:</b> {item.name} | <b>URl:</b> {item.url}</li>
                })}
            </ul>

            <label>Name</label>
            <input type="text" value={item.name} id="itemName" name="itemName" onChange={handleNameChange} />
            <br />
            <label>Url</label>
            <input type="url" value={item.url} id="itemUrl" name="itemUrl" onChange={handleUrlChange} />
            <br />
            <button onClick={handleAddItemToList}>Add</button>
            <button onClick={handleSaveList}>Save List</button>
        </div>
    )
}

export default CreateList
