import React, { useEffect } from 'react'
import { Box, Card, Grid, TextField, Typography } from '@mui/material'
import { isValidName, isValidNumerical, isValidEmail, isValidPhoneNumber } from '../utils/helpers'
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import useValidation, { isForSubmit } from '../hooks/useValidation'

const JobCreate:React.FC<any> = () => {

  useEffect(() => {
    // ClassicEditor
    //   .create( document.getElementById( 'editor' ) as HTMLElement )
    //   .then( editor => {
    //     let window: any
    //     window.editor = editor;
    //   } )
    //   .catch( error => {
    //     console.error( 'There was a problem initializing the editor.', error );
    //   } );
  }, [])

  const [validation, setValidation] = useValidation([
    'title',
    'company',
    'email',
    'phoneNumber',
    'location',
    'yearsOfExperience',
    'technologiesUsed',
    'content'
  ])

  const testFields = [
    {
      label: 'Job Title',
      type: 'title'
    },
    {
      label: 'Company Name',
      type: 'company'
    },
    {
      label: 'Email',
      type: 'email'
    },
    {
      label: 'Phone Number',
      type: 'phoneNumber'
    },
    {
      label: 'Location',
      type: 'location'
    },
    {
      label: 'Years of experience needed',
      type: 'yearsOfExperience'
    },
    {
      label: 'Technologies Used',
      type: 'technologiesUsed'
    },
    {
      label: 'Content',
      type: 'content'
    }
  ]

  const isReadySubmit = (validation: any) => isForSubmit(validation)

  const triggerError = ({isError, field, message, value}: any) => setValidation({ ...validation, [field]: { error: isError, message, value } })

  const validate = ({ fieldType, fieldName }: any) => (e: any) => {
    const value = e.target.value

    if (['title', 'company', 'technologiesUsed', 'location'].includes(fieldType)) {
      if (!isValidName(value)) {
        triggerError({ isError: true, field: fieldType, message: `Invalid ${fieldName}`, value })
      } else {
        triggerError({ isError: false, field: fieldType, message: '', value })
      }
    } else if (fieldType === 'phoneNumber') {
      const { limit, valid } = isValidPhoneNumber(value)
      if (!valid) {
        triggerError({ isError: true, field: fieldType, message: `Invalid ${fieldName}`, value })
      } else if (!limit) {
        triggerError({ isError: true, field: fieldType, message: `${fieldName} must be 11 digits`, value })
      } else {
        triggerError({ isError: false, field: fieldType, message: '', value })
      }
    } else if (fieldType === 'email') {
      if (!isValidEmail(value)) {
        triggerError({ isError: true, field: fieldType, message: `Invalid ${fieldName}`, value })
      } else {
        triggerError({ isError: false, field: fieldType, message: '', value })
      }
    } else if (fieldType === 'yearsOfExperience') {
      if (!isValidNumerical(value)) {
        triggerError({ isError: true, field: fieldType, message: `Invalid ${fieldName}`, value })
      } else {
        triggerError({ isError: false, field: fieldType, message: '', value })
      }
    } else {
      triggerError({ isError: false, field: fieldType, message: '', value })
    }
  }

  return (
    <>
      <Box sx={{ p: 2 }}>
        <Typography sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>
          Post a Job
        </Typography>
      </Box>
      <Grid container sx={{
        display: 'flex',
        justifyContent: 'center'
      }}>
        <Grid xs={10} md={8} lg={5}>
          <Card sx={{ px: 5, py: 2 }}>
            <form>
              {testFields.map((field, index) => (
                <Box key={index} sx={{
                  my: 2
                }}>
                  <TextField
                    label={field.label}
                    onChange={validate({ fieldType: field.type, fieldName: field.label})}
                    error={validation[field.type].error}
                    helperText={validation[field.type].message}
                    size='small'
                    fullWidth
                  />
                </Box>
              ))}
              <div id='editor'/>
              <Box sx={{
                display: 'flex'
              }}>
                <Box sx={{
                  borderTopLeftRadius: 6,
                  borderBottomLeftRadius: 6,
                  width: '100%',
                  backgroundColor: '#e1e1e1',
                  p: 1,
                  cursor: 'pointer',
                  transition: '0.3s',
                  '&:hover': {
                    backgroundColor: '#f0f0f0'
                  }
                }}>
                  <Typography sx={{
                    textAlign: 'center'
                  }}>
                    Cancel
                  </Typography>
                </Box>
                <Box sx={{
                  borderTopRightRadius: 6,
                  borderBottomRightRadius: 6,
                  width: '100%',
                  backgroundColor: !isReadySubmit ? 'gray' : '#002f7f',
                  cursor: !isReadySubmit ? 'disabled' : 'pointer',
                  p: 1,
                  color: !isReadySubmit ? '#e1e1e1' : '#fff',
                  transition: '0.3s',
                  '&:hover': {
                    backgroundColor: !isReadySubmit ? 'gray' : '#005eff'
                  }
                }}>
                  <Typography sx={{
                    textAlign: 'center'
                  }}>
                    Submit
                  </Typography>
                </Box>
              </Box>
            </form>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}

export default JobCreate