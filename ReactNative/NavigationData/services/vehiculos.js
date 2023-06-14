const baseURL = 'https://us-central1-api-nt2-ejemplo.cloudfunctions.net/app/api/read'

const getAll = (params) => {
  return new Promise((accepted, rejected) => {
    
    // params: {'order_by': 'name'}
    fetch(`${baseURL}/?${params}`)
    .then(res => {
      return res.json()
    })
    .then(data => {
      return accepted(data)
    })
    .catch(error => {
      //TODO: Missing error handler
      console.error(error)
      rejected(error)
    })
  })
}

const getById = (id) => {
  return new Promise((accepted, rejected) => {
    fetch(`${baseURL}/${id}`)
    .then(res => {
      return res.json()
    })
    .then(data => {
      return accepted(data)
    })
    .catch(error => {
      //TODO: Missing error handler
      console.error(error)
      rejected(error)
    })
  })
}

const deleteById = (id) => {
  
}

export default {
  getAll,
  getById
}