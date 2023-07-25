const callBackendAPI = async (path) => {
  const serverIp = 'http://192.168.102.211/api'
  // const serverIp = 'http://localhost/api'

  const response = await fetch(`${serverIp}/${path}`)
  const body = await response.json()

  if (response.status !== 200) {
    throw Error(body.message)
  }
  return body
}

export default callBackendAPI