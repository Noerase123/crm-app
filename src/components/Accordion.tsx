import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { Typography, Box } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import { Link } from 'react-router-dom'

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

interface IAccordionChildren {
  label: string
  to: string
  navigate: any
  children?: IAccordion[]
}

interface IAccordion {
  label: string
  navigate: any
  children: IAccordionChildren[]
}

interface IProps {
  data: IAccordion[]
  expanded?: boolean
}

const CustomAccordion:React.FC<IProps> = ({ data, expanded }) => {

  const [expand, setExpand] = React.useState(expanded)

  return (
    <div>
      {data.map((dt, i) => (
        <Accordion key={i} sx={{ border: 'none' }} expanded={expand} onChange={() => setExpand(!expand)}>
          <AccordionSummary sx={{
            backgroundColor: '#fff'
          }}>
            <Typography>{dt.label}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {dt.children.map(child => (
              <Link to={child.to}>
                <Box sx={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  p: 1,
                  cursor: 'pointer',
                  color: '#000',
                  textDecoration: 'none',
                  '&:hover': {
                    color: '#1976d2'
                  }
                }}>
                  <CircleIcon sx={{ width: 10, height: 10, marginRight: 1, opacity: 0.6 }} />
                  <Typography>{child.label}</Typography>
                </Box>
              </Link>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

export default CustomAccordion