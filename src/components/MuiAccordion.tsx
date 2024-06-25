import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useState } from 'react'
export const MuiAccordion = ()=>{
    const [expanded, setExpanded] = useState<string | false>(false)
    const handleChange =(isExpanded: boolean , panel: string)=>{
        setExpanded(isExpanded? panel: false)
    }
  return(
    <div>
    <Accordion 
    expanded={expanded === 'panel1'}
    onChange={(_event, isExpanded)=> handleChange(isExpanded, 'panel1')}
    >
    <AccordionSummary
    expandIcon={<ExpandMoreIcon/>}
    aria-label="painel1-Content"
    aria-controls="-content"
    id="painel1-header"
  >
    <Typography>Accordion 1</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, molestias! Hic, expedita architecto. 
    Mollitia nostrum eum et velit hic nam vel praesentium suscipit, consequatur sit laborum amet vitae quia tempore.
    </Typography> 
  </AccordionDetails>
    </Accordion>

    <Accordion  expanded={expanded === 'panel2'}
    onChange={(_event, isExpanded)=> handleChange(isExpanded, 'panel2')}>
    <AccordionSummary
    expandIcon={<ExpandMoreIcon/>}
    aria-label="painel2-Content"
    aria-controls="-content"
    id="painel2-header"
  >
    <Typography>Accordion 2</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, molestias! Hic, expedita architecto. 
    Mollitia nostrum eum et velit hic nam vel praesentium suscipit, consequatur sit laborum amet vitae quia tempore.
    </Typography> 
  </AccordionDetails>
    </Accordion>

    <Accordion  expanded={expanded === 'panel3'}
    onChange={(_event, isExpanded)=> handleChange(isExpanded, 'panel3')}>
    <AccordionSummary
    expandIcon={<ExpandMoreIcon/>}
    aria-label="painel3-Content"
    aria-controls="-content"
    id="painel3-header"
  >
    <Typography>Accordion 3</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, molestias! Hic, expedita architecto. 
    Mollitia nostrum eum et velit hic nam vel praesentium suscipit, consequatur sit laborum amet vitae quia tempore.
    </Typography> 
  </AccordionDetails>
    </Accordion>
    </div>
  )
}