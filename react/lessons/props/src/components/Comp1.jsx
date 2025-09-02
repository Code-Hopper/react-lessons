import React from 'react'

let persons = [
    { name: "person 1", phone: 123 },
    { name: "person 2", phone: 124 },
    { name: "person 3", phone: 125 },
    { name: "person 4", phone: 126 },
    { name: "person 5", phone: 127 },
    { name: "person 6", phone: 128 },
]

const Comp1 = () => {

    function displayRow(props){
        return(
            <tr>
                <td>{props.name}</td>
                <td>{props.phone}</td>
            </tr>
        )
    }
    
    return (
        <div>
            <table border={1}>
                <tr>
                    <th>Name</th>
                    <th>Phone</th>
                </tr>
                {
                    persons.map(displayRow)
                }
            </table>
        </div>
    )
}

export default Comp1
