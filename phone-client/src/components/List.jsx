import React, { useEffect, useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import { getAllPhones } from '../services/phones.service'
import {Link} from 'react-router-dom'
import Details from '../components/Details'

function List() {

  const [listPhones, setListPhones] = useState([])
  const [isFetching, setIsFetching] = useState(true)

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {

      const response = await getAllPhones()
      console.log(response.data)
      setListPhones(response.data)
      setIsFetching(false)
      
    } catch (error) {
      console.log(error)
    }
  }

  if (isFetching === true) {
    return(
      <h3>...loading</h3>
    )
  }


  return (
    <div>
      <h2>List Phones</h2>
      {listPhones.map ((eachPhone) => {
        return(
          <div key={eachPhone.id}>
            <Link to={`/phones/${eachPhone.id}`}><p>{eachPhone.name}</p></Link>            
          </div>
        )
      })}
      <Routes>        
        <Route path='/phones/:id'element={<Details />} />        
      </Routes>
    </div>
  )
}

export default List