import React, { useEffect, useState } from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import { getOnePhones } from '../services/phones.service'

function Details() {

  const {id} = useParams()
  const navigate = useNavigate()

  const [details, setDetails] = useState(null)
  const [isFetching, setIsFetching] = useState(true)

  console.log(id)

  useEffect(() => {
    getData()
  }, [id])

  const getData = async () => {
    try {
      const response = await getOnePhones(id)
      console.log(response.data)
      setDetails(response.data)
      setIsFetching(false)
      navigate(`/phones/${id}`)
      
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
      <h3>{details.name}</h3>
      <h3>{details.color}</h3>
      <h3>{details.manufacturer}</h3>
      <h3>{details.description}</h3>
    </div>
  )
}

export default Details