import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import messagesValidations from '../utils/messages'

const useSearchInput = ( ) => {
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)
  const history = useHistory()

  const onChange = ({ target }) => {
    const { value } = target
    setQuery(value)
    if(value.length < 3) {
      setError(messagesValidations.minimium) 
      return
    }
    setError('')
  }

  const handleSubmit = () => {
    if(!query.length) {
      setError(messagesValidations.required) 
      return
    }
    if(!error) {
      history.push(`/results/${query}`)
      setQuery('')
    }
  }

  return { query, onChange, error, handleSubmit }
}

export default useSearchInput
