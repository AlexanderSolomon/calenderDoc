
// import { Table } from 'semantic-ui-react'
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';



// export default function Read() {
//     const [APIData, setAPIData] = useState([]);
//     useEffect(() => {
//         axios.get(`https://62e9890401787ec712197e2f.mockapi.io/DateTime`)
//         .then((response) => {
//             setAPIData(response.data);
//             console.log(response.data)
//                 setAPIData(response.data);
//         })
//     }, [])

//     const setData = (data) => {
//         let { id, title, comments, endDate, startDate, checkbox } = data;
//         localStorage.setItem('ID', id);
//         localStorage.setItem('title', title);
//         localStorage.setItem('Last Name', comments);
//         localStorage.setItem('Last Name', endDate);
//         localStorage.setItem('Last Name', startDate);
//         localStorage.setItem('Checkbox Value', checkbox)
//     }

//     const getData = () => {
//         axios.get(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`)
//             .then((getData) => {
//                 setAPIData(getData.data);
//             })
//     }


//     return (
//         <div>
//             <Table singleLine>
//                 <Table.Header>
//                     <Table.Row>
//                         <Table.HeaderCell>id</Table.HeaderCell>
//                         <Table.HeaderCell>title</Table.HeaderCell>
//                         <Table.HeaderCell>comments</Table.HeaderCell>
//                         <Table.HeaderCell>endDate</Table.HeaderCell>
//                         <Table.HeaderCell>startDate</Table.HeaderCell>
//                         <Table.HeaderCell>Checked</Table.HeaderCell>
//                     </Table.Row>
//                 </Table.Header>

//                 <Table.Body>
//     {APIData.map((data) => {
//      return (
//        <Table.Row>
//           <Table.Cell>{data.id}</Table.Cell>
//           <Table.Cell>{data.endDate}</Table.Cell>
//            <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
//            <Table.Cell>{data.startDate}</Table.Cell>
//            <Table.Cell>{data.title}</Table.Cell>
//            <Table.Cell>{data.comments}</Table.Cell>
//                 </Table.Row>
//    )})}
//             </Table.Body>
//             </Table>
//         </div>
//     )
// }

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function Read() {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://62e9890401787ec712197e2f.mockapi.io/DateTime`)
            .then((response) => {
                console.log(response.data)
                setAPIData(response.data);
            })
    }, []);

    const setData = (data) => {
        let { id, firstName, lastName, checkbox } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Checkbox Value', checkbox)
    }

    const getData = () => {
        axios.get(`https://62e9890401787ec712197e2f.mockapi.io/DateTime`)
            .then((getData) => {
                setAPIData(getData.data);
            })
    }

    const onDelete = (id) => {
        axios.delete(`https://62e9890401787ec712197e2f.mockapi.io/DateTime${id}`)
        .then(() => {
            getData();
        })
    }

    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Title</Table.HeaderCell>
                        <Table.HeaderCell>Comments</Table.HeaderCell>
                        <Table.HeaderCell>AllDay?</Table.HeaderCell>
                        <Table.HeaderCell>StartDate</Table.HeaderCell>
                        <Table.HeaderCell>EndDate</Table.HeaderCell>
                        <Table.HeaderCell>Checkbox Value</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.title}</Table.Cell>
                                <Table.Cell>{data.comments}</Table.Cell>
                                <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
                                <Table.Cell>{data.startDate}</Table.Cell>
                                <Table.Cell>{data.endDate}</Table.Cell>
                                <Link to='/update'>
                                    <Table.Cell> 
                                        <Button onClick={() => setData(data)}>Update</Button>
                                    </Table.Cell>
                                </Link>
                                <Table.Cell>
                                    <Button onClick={() => onDelete(data.id)}>Delete</Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </div>
    )
}