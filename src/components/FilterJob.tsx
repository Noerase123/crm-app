import React from 'react'
import {
  Card,
  Typography,
  Box, 
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button
} from '@mui/material'

const FilterJob:React.FC<any> = () => {
  return (
    <Card sx={{ p: 2, color: '#000', backgroundColor: '#fff', boxShadow: 3 }}>
      <Typography>Filter your search</Typography>
      <Box sx={{ my: 2 }}>
        <FormControl size='small' fullWidth>
          <InputLabel>Job Type</InputLabel>
          <Select
            value={null}
            label="Job Type"
            onChange={() => console.log('hello world')}
          >
            <MenuItem value={10}>By Contract</MenuItem>
            <MenuItem value={10}>Part-Time</MenuItem>
            <MenuItem value={20}>Full-Time</MenuItem>
            <MenuItem value={30}>Internship</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ my: 2 }}>
        <FormControl size='small' fullWidth>
          <InputLabel>Experience</InputLabel>
          <Select
            value={null}
            label="Experience"
            onChange={() => console.log('hello world')}
          >
            <MenuItem value={10}>None</MenuItem>
            <MenuItem value={10}>Junior (1 - 3 yrs)</MenuItem>
            <MenuItem value={20}>Medior (3 - 6 yrs)</MenuItem>
            <MenuItem value={30}>Senior (5 - 10 yrs)</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ my: 2 }}>
        <FormControl size='small' fullWidth>
          <InputLabel>Technologies</InputLabel>
          <Select
            value={null}
            label="Experience"
            onChange={() => console.log('hello world')}
          >
            <MenuItem value={10}>None</MenuItem>
            {[
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
            ].map((dt, i) => (
              <MenuItem key={i} value={10}>{dt}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ my: 2 }}>
        <Button variant='contained' fullWidth>
          search
        </Button>
      </Box>
    </Card>
  )
}

export default FilterJob