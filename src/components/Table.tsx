import React, { useState } from 'react'
import { Card, Grid, Typography, Box, Checkbox, IconButton, Input, Pagination, Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import PersonRemoveAlt1Icon from '@mui/icons-material/PersonRemoveAlt1'
import SearchIcon from '@mui/icons-material/Search'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt'
import GridViewIcon from '@mui/icons-material/GridView'
import ViewListIcon from '@mui/icons-material/ViewList'
import CustomCard from './CustomCard'

const properStyle = {
  textAlign: 'left',
  width: '15%',
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
              <Box sx={{ pl: 5 }}>
                <IconButton>
                  <DeleteIcon
                    sx={{
                      color: 'red'
                    }}
                  />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  )
}

const CustomRow:React.FC<any> = ({ data, columns }) => {
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
                  <IconButton>
                    <PersonRemoveAlt1Icon />
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
              table display:
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

const SearchTab:React.FC<any> = ({ setList, isList, onFocus, onBlur, onCreate }) => {
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
              backgroundColor: '#fff',
              mx: 5
            }}>
              <Button sx={{ borderRadius: 4 }} onClick={onCreate}>
                <PersonAddAltIcon />
              </Button>
            </Box>
            <Box sx={{
              display: 'flex',
              backgroundColor: '#fff'
            }}>
              <Button onClick={() => setList(true)}>
                <ViewListIcon style={{ color: isList ? '#1976d2' : '#e1e1e1' }} />
              </Button>
              <Button onClick={() => setList(false)}>
                <GridViewIcon style={{ color: !isList ? '#1976d2' : '#e1e1e1' }} />
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

const CardFormat:React.FC<any> = () => {
  return (
    <Grid container spacing={2}>
      {[...new Array(8)].map(dt => (
        <Grid item xs={3}>
          <CustomCard />
        </Grid>
      ))}
    </Grid>
  )
}

const CustomTable:React.FC<any> = ({ rows, columns, create }) => {

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
        />
        {isList ? (
          <React.Fragment>
            <CustomColumn columns={columns} />
            <CustomRow data={rows} columns={columns} />
          </React.Fragment>
        ) : (
          <CardFormat />
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