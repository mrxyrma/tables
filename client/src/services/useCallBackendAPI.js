import { useState, useCallback } from 'react'

const useCallBackendAPI = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const serverIp = 'http://192.168.102.211/api'
  
  const request = useCallback(async (path, method = 'GET', body = null, headers = {'Content-Type': 'application/json'}) => {
    setLoading(true)
    
    try {
      const response = await fetch(`${serverIp}${path}`, {method, body, headers});

      if (!response.ok) {
        throw new Error(`Could not fetch ${serverIp}${path}, status: ${response.status}`)
      }

      const data = await response.json()
      
      setLoading(false)
      return data
    } 
    catch(e) {
      setLoading(false)
      setError(e.message)
      throw e
    }
  }, [])

  return {loading, request, error}
}

export default useCallBackendAPI