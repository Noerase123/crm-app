import React, { useState, useEffect } from 'react'
import { isValidName, isValidEmail, isValidURL } from '../utils/helpers'
import LandingAppBar from '../components/LandingAppBar'
import {
  Box, Container, Typography, Card, TextField, FormControl,
  InputLabel, Select, MenuItem, Checkbox, Grid, Divider, Chip
} from '@mui/material'
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import Footer from '../components/Footer';
import Stepper from '../components/Stepper';
import useValidation, { isForSubmit } from '../hooks/useValidation';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const PostJob:React.FC<any> = () => {
  const [value, setValue] = useState<any>({
    jobTitle: '',
    region: '',
    jobType: '',
    experience: '',
    technologies: [],
    companyName: '',
    email: '',
    jobUrl: '',
    description: ''
  })

  const [validation, setValidation] = useValidation([
    'jobTitle',
    'region',
    'jobType',
    'experience',
    'technologies',
    'companyName',
    'email',
    'jobUrl',
    'description'
  ])

  const isReadySubmit = (validation: any) => isForSubmit(validation)

  useEffect(() => {
    console.log('trigger ckeditor')
    ClassicEditor
      .create( document.getElementById('editor') as HTMLElement )
      .then( editor => {
        let window: any
        window.editor = editor;
      } )
      .catch( error => {
        console.error( 'There was a problem initializing the editor.', error );
      } );
  }, [])

  useEffect(() => {
    if (validation) {
      console.log('validation', validation)
    }
  }, [validation])

  const validate = (field: any, label: string) => (e: any) => {
    const value = e.target.value

    if (['jobTitle', 'region', 'companyName'].includes(field)) {
      if (!isValidName(value)) {
        setValidation({ ...validation, [field]: { error: true, message: `Invalid ${label}`, value } })
      } else {
        setValidation({ ...validation, [field]: { error: false, message: '', value } })
      }
    } else if (['email'].includes(field)) {
      if (!isValidEmail(value)) {
        setValidation({ ...validation, [field]: { error: true, message: `Invalid ${label}`, value } })
      } else {
        setValidation({ ...validation, [field]: { error: false, message: '', value } })
      }
    } else if (['jobUrl'].includes(field)) {
      if (!isValidURL(value)) {
        setValidation({ ...validation, [field]: { error: true, message: `Invalid ${label}`, value } })
      } else {
        setValidation({ ...validation, [field]: { error: false, message: '', value } })
      }
    } else {
      setValidation({ ...validation, [field]: { error: false, message: '', value } })
    }

  }

  const handleTextChange = (prop: any, label: string) => (e: any) => {
    validate(prop, label)(e)
    setValue({ ...value, [prop]: e.target.value })
  }

  const handleSelectionChange = ({ prop, member, label }: any) => {
    const dataSelected: any[] = []
    dataSelected.push(member)
    setValue({ ...value, [prop]: [ ...value[prop], ...dataSelected ] })
    validate(prop, label)({
      target: {
        value: [ ...value[prop], ...dataSelected ]
      }
    })
  }

  const fields = [
    {
      type: 'textField',
      name: 'jobTitle',
      label: 'Job title',
      hint: 'Example: Senior Software Engineer'
    },
    {
      type: 'textField',
      name: 'region',
      label: 'Candidate region',
      hint: 'Optional: if you need the candidate to be in a particular location and timezone'
    },
    {
      type: 'selectField',
      name: 'jobType',
      label: 'Job Type',
      items: [
        'By Contract',
        'Part-time',
        'Full-time',
        'Internship'
      ]
    },
    {
      type: 'selectField',
      name: 'experience',
      label: 'Experience',
      items: [
        'None',
        'Junior (1 - 3 yrs)',
        'Medior (3 - 6 yrs)',
        'Senior (5 - 10 yrs)',
      ]
    },
    {
      type: 'selectionCheckedField',
      name: 'technologies',
      label: 'Select Programming Technologies',
      items: [
        'ReactJS',
        'Angular',
        'Vue.js',
        'Node.js',
        'Javascript',
        'Typescript',
        'Svetle',
        'Java',
        'Kotlin',
        'PHP',
        'Bash',
        'Swift',
        'Python',
        'Ruby',
        'C#',
        'C++',
        'Objective-C',
        'Rust',
        'Flutter',
        'Dart'
      ]
    },
    {
      type: 'textField',
      name: 'companyName',
      label: 'Company Name',
      hint: 'Enter your company or organization name'
    },
    {
      type: 'textField',
      name: 'email',
      label: 'Email',
      hint: 'Enter your email address'
    },
    {
      type: 'textField',
      name: 'jobUrl',
      label: 'Apply job URL',
      hint: 'Enter your application link to your website'
    },
    {
      type: 'textField',
      name: 'description',
      label: 'Job description',
      hint: 'Enter description of the job minimum of 100 characters'
    },
    {
      type: 'ckeditor',
      name: 'description',
      label: 'Job description',
      hint: 'Enter description of the job minimum of 100 characters'
    },
  ]

  return (
    <LandingAppBar currentPage='new-job'>
      <>
        <Box sx={{ backgroundColor: 'rgb(34, 43, 69)' }}>
          <Container sx={{ py: 8 }}>
            <Typography variant='h5' sx={{ fontWeight: 'bold', textAlign: 'center' }}>
              Post your job ad for just <span style={{ fontSize: 30 }}>$49</span> for the next 3 months!
            </Typography>
            <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
              <Grid item xs={12} md={9} lg={8}>
                <Typography sx={{ color: 'rgb(174, 176, 180)', textAlign: 'center' }}>
                  Share your job ad with 50,000+ remote JavaScript developers that are searching for new opportunities. It will be featured in a yellow box at the top of the job list and featured in our weekly newsletter.
                </Typography>
              </Grid>
            </Grid>
            <Box sx={{ mt: 12 }}>
              <Card sx={{ py: 5, px: 5, backgroundColor: '#f1f1f1', color: '#000', boxShadow: 1 }}>
                <Typography variant='h4' sx={{ fontWeight: '600', mb: 3 }}>Tell us about your job</Typography>
                <Stepper
                  isReadySubmit={isReadySubmit(validation)}
                  steps={['About the job', 'Preview', 'Payment']}
                  stepContainers={[
                    <>
                      <Typography variant='h2' sx={{ pb: 8 }}>
                        About the job
                      </Typography>
                      <Grid container spacing={3}>
                        {fields.map((field, index) => (
                          <>
                            {field.type === 'textField' && (
                              <Grid item xs={12} md={8} lg={6}>
                                <TextField
                                  {...field.name === 'description' && { multiline: true, rows: 15 }}
                                  label={field.label}
                                  helperText={validation[field.name].message || field.hint}
                                  error={validation[field.name].error}
                                  size='small'
                                  onChange={handleTextChange(field.name, field.label)}
                                  fullWidth
                                />
                              </Grid>
                            )}
                            {field.type === 'selectField' && (
                              <Grid item xs={12} md={8} lg={6}>
                                <FormControl size='small' fullWidth>
                                  <InputLabel>{field.label}</InputLabel>
                                  <Select
                                    value={value[field.name]}
                                    label={field.label}
                                    onChange={handleTextChange(field.name, field.label)}
                                  >
                                    {field.items?.map((item, i) => (
                                      <MenuItem key={i} value={item}>{item}</MenuItem>
                                    ))}
                                  </Select>
                                </FormControl>
                              </Grid>
                            )}
                            {field.type === 'selectionCheckedField' && (
                              <Grid item xs={12}>
                                <Typography>{field.label}</Typography>
                                <Box sx={{ mt: 1, border: '1px solid #000', p: 1 }}>
                                  <Grid container spacing={2}>
                                    {field.items?.map((dt, i) => (
                                      <Grid item key={i}>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                          <Checkbox onClick={() => handleSelectionChange({ prop: field.name, member: dt, label: field.label })} />
                                          <Typography>
                                            {dt}
                                          </Typography>
                                        </Box>
                                      </Grid>
                                    ))}
                                  </Grid>
                                </Box>
                              </Grid>
                            )}
                            {field.type === 'ckeditor' && (
                              <Grid item xs={12}>
                                <Typography>{field.label}</Typography>
                                <Box sx={{ mt: 1, border: '1px solid #000', p: 1 }}>
                                  <span id='editor'></span>
                                </Box>
                              </Grid>
                            )}
                          </>
                        ))}
                      </Grid>
                    </>,
                    <>
                      <Typography variant='h2'>
                        Preview
                      </Typography>
                      <Container sx={{ py: 8 }}>
                        <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                          <Grid item xs={12} md={6} lg={6}>
                            <Typography variant='h4'>
                              {value.jobTitle}
                            </Typography>
                            <Typography>
                              {value.region} - {value.jobType}
                            </Typography>
                          </Grid>
                        </Grid>
                        <Divider sx={{ my: 4, backgroundColor: 'gray' }} />
                        <Grid container spacing={3}>
                          <Grid item xs={12} md={8} lg={8}>
                            <Box>
                              <Typography>
                                {value.description}
                              </Typography>
                            </Box>
                            <Box>
                              <Typography variant='h5' sx={{ fontWeight: '600', mb: 1 }}>Who we are</Typography>
                              <Typography sx={{ mb: 1, lineHeight: 1.6 }}>
                                We believe lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus feugiat elit vitae enim lacinia semper. Cras nulla lectus, porttitor vitae urna iaculis, malesuada tincidunt lectus. Proin nec tellus sit amet massa auctor imperdiet id vitae diam. Aenean gravida est nec diam suscipit iaculis. Praesent urna velit, auctor nec turpis et, vehicula lobortis sem. Vivamus convallis mi sagittis eleifend laoreet. Praesent vitae venenatis enim. Nulla tincidunt felis et lectus rhoncus laoreet.
                              </Typography>
                            </Box>
                            <Box>
                              <Typography variant='h5' sx={{ fontWeight: '600', mb: 1 }}>What we’re looking for</Typography>
                              <Typography sx={{ mb: 1, lineHeight: 1.6 }}>
                                Aenean gravida est nec diam suscipit iaculis. Praesent urna velit, auctor nec turpis et, vehicula lobortis sem. Vivamus convallis mi sagittis eleifend laoreet. Praesent vitae venenatis enim. Nulla tincidunt felis et lectus rhoncus laoreet.
                              </Typography>
                            </Box>
                            <Box sx={{ m: 2 }}>
                              {[...new Array(5)].map((dt, i) => (
                                <Box key={i} sx={{ display: 'flex', mb: 1 }}>
                                  <CheckCircleOutlineOutlinedIcon sx={{ mr: 1 }} />
                                  <Typography>Our sign up is dead simple. We only require your basic company information</Typography>
                                </Box>
                              ))}
                            </Box>
                            <Box>
                              <Typography variant='h5' sx={{ fontWeight: '600', mb: 1 }}>Why to apply</Typography>
                              <Typography sx={{ mb: 1, lineHeight: 1.6 }}>
                                We believe lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus feugiat elit vitae enim lacinia semper. Cras nulla lectus, porttitor vitae urna iaculis, malesuada tincidunt lectus. Proin nec tellus sit amet massa auctor imperdiet id vitae diam. Aenean gravida est nec diam suscipit iaculis. Praesent urna velit, auctor nec turpis et, vehicula lobortis sem. Vivamus convallis mi sagittis eleifend laoreet. Praesent vitae venenatis enim. Nulla tincidunt felis et lectus rhoncus laoreet.
                              </Typography>
                            </Box>
                          </Grid>
                          <Grid item xs={12} md={8} lg={8}>
                            <Typography variant='h5' sx={{ fontWeight: '600', mb: 1 }}>Technologies Required</Typography>
                            <Grid container spacing={1}>
                              {value.technologies.map((tech: any, index: any) => (
                                <Grid item>
                                  <Chip key={index} label={tech} variant="filled" color='primary' />
                                </Grid>
                              ))}
                            </Grid>
                          </Grid>
                        </Grid>
                      </Container>
                    </>,
                    <>
                      <Typography variant='h2'>
                        Payment
                      </Typography>
                    </>,
                    <>
                      <Typography variant='h2'>
                        All Done!
                      </Typography>
                    </>
                  ]}
                />
              </Card>
            </Box>
          </Container>
        </Box>
        <Footer />
      </>
    </LandingAppBar>
  )
}

export default PostJob