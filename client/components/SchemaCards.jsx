import React, { useEffect, useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption } from "@chakra-ui/react"


const SchemaCards = () => {

  const [schemaResponse, setResponse] = useState([])

  // fetch request to get all the table names and field information for our tables
  // useEffect(() => {
  //   fetch('/schemas')
  //   .then(res => {
  //     setResponse(res)
  //   }, [])
  //   .then(res => console.log(res))
  //   .catch(err => {
  //     console.log(err)
  //   })
  // })


  return (
    <>
     <br></br>
     <br></br>
     <table>
      <div>
        <tr>
        <h2 className="tableHeader">THIS IS YOUR TABLE NAME BITCH</h2>
        </tr>
        <tr>
        <th className="table">Field Name</th>
        <th className="table">Field Type</th>
        </tr>
        <tr>
          <td>
            id
          </td>
          <td>
            id
          </td>
        </tr>
        <tr>
          <td>
            Name
          </td>
          <td>
            String
          </td>
        </tr>
        <button className="updateDelete">Delete</button>
        <button className="updateDelete">Update</button>
      </div>
    </table>
    </>
  );
};

export default SchemaCards;