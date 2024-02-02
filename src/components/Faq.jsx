

import { Accordion, AccordionItem, AccordionItemButton, AccordionItemPanel} from "react-accessible-accordion"
import 'react-accessible-accordion/dist/fancy-example.css';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import { information } from "./Accordion";
import { AccordionStyle, StyledSection} from "./styles/Home.styled";
export const Faq = () => {
  return (
    <AccordionStyle>
        <Accordion
        allowMultipleExpanded={false}
        preExpanded={[0]}
        >
           {
           information.map((item, i) => (
          
                <AccordionItem key={i} uuid={item.id}>
                    
                        <AccordionItemButton>
                        <StyledSection>
                               {item.title} <MdOutlineArrowDropDown />  
                               </StyledSection>
                  
                        </AccordionItemButton>
                        
                    <AccordionItemPanel>
                        {item.content}
                    </AccordionItemPanel>

                </AccordionItem>
            ))}

        </Accordion>
    </AccordionStyle>
  )
}
