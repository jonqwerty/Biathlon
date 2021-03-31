import React, { useEffect, useState } from 'react'
import faker from 'faker'
import './App.css'
import { createUsers } from './fn/createData'
import {theadStyle, tbodyStyle, errorStyle, sortMenu, table} from './fn/style'

const App = () => {

  const [fakeUsers, setFakeUsers] = useState([])
  const [name, setName] = useState(6)

  const sortByPlace = () => {
    const g = [...fakeUsers]
    setFakeUsers(g.sort((a, b) => a.place - b.place ))
  }

  const sortByFirstName = () => {
    const g = [...fakeUsers]
    setFakeUsers(g.sort(function(a, b) {
      var nameA=a.firstName.toLowerCase(), nameB=b.firstName.toLowerCase()
      if (nameA < nameB) 
        return -1
    })
  )}

  const sortByHit = () => {
    const g = [...fakeUsers]
    setFakeUsers(g.sort((a, b) => b.hit - a.hit ))
  }

  const sortByRateOfFire = () => {
    const g = [...fakeUsers]
    setFakeUsers(g.sort((a, b) => b.rateOfFire - a.rateOfFire ))
  }

  let searchWord = React.createRef()
  let search = () => {  
    let text = searchWord.current.value;
    setName(text)
    searchWord.current.value = '';    
  }
   
  useEffect(() => {

    setFakeUsers(() => createUsers(10))
  
  },[])

  return (
    <div className="App">
      <div style={{paddingTop: '100px'}}>Table with the results of shooting in the biathlon race</div>
     <table style={table } >
        <thead>
          <tr >
            <th style={theadStyle}>Place</th>
            <th style={theadStyle}>Sportsman</th>
            <th style={theadStyle}>Hit</th>
            <th style={theadStyle}>Rate of fire</th>
            
          </tr>
        </thead>
         <tbody>

          {fakeUsers.map((user, index) => (
            <tr key={index}>
              <td style={tbodyStyle}>{user.place}</td>
              { 
              user.firstName === name
                ? <td style={errorStyle }>{user.firstName} {user.lastName} </td>
                : <td style={tbodyStyle}>{user.firstName} {user.lastName} </td>
              }
              <td style={tbodyStyle}>{user.hit}</td>
              <td style={tbodyStyle}>{user.rateOfFire}</td>

            </tr>
          ))
          }

        </tbody> 
      </table>
      <div style={sortMenu }> 
        <div>Sort menu</div>
        <button onClick={ sortByPlace } >Sort by place</button> 
        <button onClick={ sortByFirstName } >Sort by name</button>
        <button onClick={ sortByHit } >Sort by hit</button>
        <button onClick={ sortByRateOfFire } >Sort by rate of fire</button>
      </div>
      
      <div>
        <div>Search area</div>
        <input placeholder='Enter the name ' ref={searchWord}  />
        <button onClick = {search}>Search</button>
      </div>
      
    </div>
  );
}

export default App
