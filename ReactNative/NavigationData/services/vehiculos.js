const baseURL = 'https://us-central1-api-nt2-ejemplo.cloudfunctions.net/app/api/read'

const getAll = () => {
  return new Promise((accepted, rejected) => {
    fetch(`${baseURL}/`)
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

export default {
  getAll
}