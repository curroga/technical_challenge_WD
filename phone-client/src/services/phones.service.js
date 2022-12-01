import service from './config.service'

const getAllPhones = () => {
  return service.get("/phones")
}

const getOnePhones = (id) => {
  return service.get(`/phones/${id}`)
}

export {
  getAllPhones,
  getOnePhones
}