
import { Button, Checkbox, Form } from 'semantic-ui-react';
import './Create.css'
import React, { useState } from 'react';
import axios from 'axios';

export default function Create() {
    const [title, setTitle] = useState('');
    const [comments, setComments] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    const postData = () => {
        axios.post(`https://62e9890401787ec712197e2f.mockapi.io/DateTime`, {
            title,
            comments,
            startDate,
            endDate,
            checkbox
        })

        console.log(title);
        console.log(comments);
        console.log(startDate);
        console.log(endDate);
        console.log(checkbox);
}
    
    return(
        <div>

    <Form className='create-form'>
        <Form.Field>
            <label>title</label>
            <input placeholder='Doc Lyngby' onChange={(e)=> setTitle(e.target.value)} />
        </Form.Field>
        <Form.Field>
            <label>comments</label>
            <input placeholder='Something' onChange={(e)=> setComments(e.target.value)} />
        </Form.Field>
        <Form.Field>
            <label>startDate</label>
            <input placeholder='2205-22' onChange={(e)=> setStartDate(e.target.value)}  />
        </Form.Field>
        <Form.Field>
            <label>endDate</label>
            <input placeholder='2205-22' onChange={(e)=> setEndDate(e.target.value)}  />
        </Form.Field>
        <Form.Field>
            <Checkbox label='allDAy' onChange={(e) => setCheckbox(!checkbox)}/>
        </Form.Field>
            <Button onClick={postData} type='submit'>Submit</Button>
    </Form>
        </div>
    )

}
