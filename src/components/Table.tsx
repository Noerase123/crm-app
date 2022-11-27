import React, { useState, useEffect } from 'react'
import {
  Card,
  Grid,
  Typography,
  Box,
  Checkbox,
  IconButton,
  Input,
  Pagination,
  Button,
  Tooltip,
  Container
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import SearchIcon from '@mui/icons-material/Search'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt'
import GridViewIcon from '@mui/icons-material/GridView'
import ViewListIcon from '@mui/icons-material/ViewList'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import MoreVertIcon from '@mui/icons-material/MoreVert'

import EmployeeCard from './EmployeeCard'
import JobCard from './JobCard'

const properStyle = {
  textAlign: 'left',
  width: 100,
  flexGrow: 1
}

const CustomColumn:React.FC<any> = ({ columns }) => {
  return (
    <Grid container spacing={1} sx={{ my: 1 }}>
      <Grid item xs={12}>
        <Card sx={{
          boxShadow: 'none',
          p: 1
        }}>
          <Grid container>
            <Grid sx={{ textAlign: 'left' }}>
              <Checkbox />
            </Grid>
            {columns.map((col: any, index: any) => (
              <Grid sx={properStyle}>
                <Typography
                  key={index}
                  sx={{
                    p: 1,
                    fontWeight: 'bold'
                  }}
                >
                  {col.label}
                </Typography>
              </Grid>
            ))}
            <Grid>
              <IconButton>
                <DeleteIcon
                  sx={{
                    color: 'red'
                  }}
                />
              </IconButton>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  )
}

const CustomRow:React.FC<any> = ({ data, columns, view }) => {
  return (
    <Grid container spacing={1}>
      {data.map((dt: any, i: any) => (
        <Grid item xs={12} key={i}>
          <Card sx={{
            boxShadow: 'none',
            p: 1,
            display: 'flex',
            justifyContent: 'space-between'
          }}>
            <Grid container>
              <Grid sx={{ textAlign: 'left' }}>
                <Checkbox />
              </Grid>
              {columns.map((col: any, key: any) => (
                <>
                  {col.id === 'status' ? (
                    <Grid key={key} sx={properStyle}>
                      <Box sx={{
                        backgroundColor: 'green',
                        width: '50%',
                        borderRadius: 10
                      }}>
                        <Typography
                          variant='body2'
                          sx={{
                            p: 1,
                            color: '#fff',
                            textAlign: 'center'
                          }}
                        >
                          {dt[col.id]}
                        </Typography>
                      </Box>
                    </Grid>
                  ) : (
                    <Grid key={key} sx={properStyle}>
                      <Typography
                        variant='body2'
                        sx={{
                          p: 1,
                          width: '85%',
                          overflow: 'hidden'
                        }}
                      >
                        {dt[col.id]}
                      </Typography>
                    </Grid>
                  )}
                </>
              ))}
              <Grid>
                <Box sx={{
                  display: 'flex'
                }}>
                  <IconButton>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={view}>
                    <RemoveRedEyeIcon />
                  </IconButton>
                </Box>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

const CustomPagination:React.FC<any> = () => {
  return (
    <Box sx={{ my: 1 }}>
      <Card sx={{
        p: 1,
        boxShadow: 'none',
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <Box sx={{
          display: 'flex'
        }}>
          <Box sx={{
            display: 'flex',
            alignItems: 'center'
          }}>
            <Typography variant='caption'>
              Total items:
            </Typography>
            <Typography variant='body1' sx={{ fontWeight: 'bold' }}>
              346
            </Typography>
          </Box>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            marginLeft: 3
          }}>
            <Typography variant='caption'>
              showing:
            </Typography>
            <Typography variant='body1' sx={{ fontWeight: 'bold' }}>
              1-5 of 100
            </Typography>
          </Box>
        </Box>
        <Pagination count={5} variant="outlined" shape="rounded" />
      </Card>
    </Box>
  )
}

const SearchTab:React.FC<any> = ({ setList, isList, onFocus, onBlur, onCreate, onViewClient = true }) => {

  const [openModal, setOpenModal] = useState(false)

  const handleModal = (val: boolean) => () => setOpenModal(val)

  useEffect(() => {
    setOpenModal(false)
  }, [isList])

  return (
    <Box>
      <Grid container sx={{ mb: 5 }}>
        <Grid item xs={3}>
          <Box sx={{
            backgroundColor: '#fff',
            display: 'flex'
          }}>
            <Input
              sx={{
                boxShadow: 'none',
                p: 1
              }}
              onFocus={onFocus}
              onBlur={onBlur}
              size='small'
              placeholder='search...'
              fullWidth
            />
            <IconButton>
              <SearchIcon />
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={9}>
          <Box sx={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}>
            <Box sx={{
              backgroundColor: '#fff'
            }}>
              <Tooltip title="Create new invoice" placement="top">
                <Button sx={{ borderRadius: 4 }} onClick={onCreate}>
                  <PersonAddAltIcon />
                </Button>
              </Tooltip>
            </Box>
            <Box sx={{
              position: 'relative'
            }}>
              <Box sx={{
                backgroundColor: '#fff',
                ml: 1
              }}>
                <Tooltip title="Export file" placement="top">
                  <Button sx={{ borderRadius: 4 }} onClick={handleModal(!openModal)}>
                    <MoreVertIcon />
                  </Button>
                </Tooltip>
              </Box>
              {openModal && (
                <Box sx={{
                  position: 'absolute',
                  bottom: -240,
                  left: -40,
                  zIndex: 1
                }}>
                  <Box sx={{
                    backgroundColor: '#fff',
                    p: 1,
                    alignContent: 'end'
                  }}>
                    <Tooltip title="Export to CSV" placement="left-start">
                      <Button variant='contained' sx={{ m: 1 }}>
                        CSV
                      </Button>
                    </Tooltip>
                    <Tooltip title="Export to Excel" placement="left-start">
                      <Button variant='contained' sx={{ m: 1 }}>
                        Excel
                      </Button>
                    </Tooltip>
                    <Tooltip title="Export to Print" placement="left-start">
                      <Button variant='contained' sx={{ m: 1 }}>
                        Print
                      </Button>
                    </Tooltip>
                    <Tooltip title="Export to PDF" placement="left-start">
                      <Button variant='contained' sx={{ m: 1 }}>
                        PDF
                      </Button>
                    </Tooltip>
                  </Box>
                </Box>
              )}
            </Box>
            {onViewClient && (
              <Box sx={{
                display: 'flex',
                backgroundColor: '#fff',
                ml: 5
              }}>
                <Button onClick={() => setList(true)}>
                  <ViewListIcon style={{ color: isList ? '#1976d2' : '#e1e1e1' }} />
                </Button>
                <Button onClick={() => setList(false)}>
                  <GridViewIcon style={{ color: !isList ? '#1976d2' : '#e1e1e1' }} />
                </Button>
              </Box>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

const CardFormat:React.FC<any> = ({ type = 'employee' }) => {
  return (
    <Container>
      <Grid container spacing={2}>
        {[...new Array(8)].map(dt => (
          <Grid item xs={6}>
            {type === 'employee' && (
              <EmployeeCard />
            )}
            {type === 'job' && (
              <JobCard />
            )}
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

const CustomTable:React.FC<any> = ({ rows, columns, create, view, isDisabledClientView, type }) => {

  const [isList, setList] = useState(true)
  
  const [isSearch, setSearchOpen] = useState(false)
  const onFocus = () => setSearchOpen(true)
  const onBlur = () => setSearchOpen(false)
  
  return (
    <>
      <Box sx={{ position: 'relative' }}>
        <SearchTab
          setList={setList}
          isList={isList}
          onFocus={onFocus}
          onBlur={onBlur}
          onCreate={create}
          onViewClient={isDisabledClientView}
        />
        {isList ? (
          <React.Fragment>
            <CustomColumn columns={columns} />
            <CustomRow data={rows} columns={columns} view={view} />
          </React.Fragment>
        ) : (
          <CardFormat type={type} />
        )}
        <CustomPagination />
        {isSearch && (
          <Box sx={{ position: 'absolute', top: 50 }}>
            <Card sx={{ width: 500, zIndex: 1, height: 230, p: 2, overflowY: 'scroll', overflowX: 'hidden' }}>
              <Grid container spacing={2}>
                {[...new Array(10)].map((dt, i) => (
                  <Grid item xs={12} key={i}>
                    <Typography>awdawd</Typography>
                  </Grid>
                ))}
              </Grid>
            </Card>
          </Box>
        )}
      </Box>
    </>
  )
}

export default CustomTable