import { useState } from 'react'

const useValidation = (initialState: string[]) => {

  let objData: any = {}
  initialState.forEach(state => {
    objData[state] = {
      error: false,
      message: '',
      value: ''
    }
  })

  const [validation, setValidation] = useState(objData)

  return [
    validation,
    setValidation
  ]
}

export const isForSubmit = (validation: any) => [...Object.values(validation)].every((data: any) => data.error === false && data.value.length !== 0)

export default useValidation