import React, { useState } from "react";

import HEADER_QUERY_DATA from "./header-query.data";

import { IoIosArrowDown as Arrow } from "react-icons/io";

import {
  AccordionContainer,
  AccordionArrowContainer,
  AccordionContent,
  AccordionContentText,
  AccordionTitle,
  AccordionLink,
  HeaderQueryContainer,
  AccordionButton,
} from "./header-query.styles";

const HeaderQuery = ({ isActive, signOut, onClick, currentUser }) => {
  const [accordion, setAccordion] = useState(HEADER_QUERY_DATA);

  const click = (i) => {
    const newAccordion = accordion.slice();
    const index = newAccordion.indexOf(i);

    newAccordion[index].open = !newAccordion[index].open;
    setAccordion(newAccordion);
  };

  return (
    <HeaderQueryContainer isActive={isActive}>
      <AccordionContainer>
        {accordion.map((i) => (
          <div key={accordion.indexOf(i)}>
            <AccordionTitle
              onClick={i.linksOfValues ? click.bind(null, i) : null}
            >
              {i.linksOfValues ? (
                <AccordionArrowContainer isOpen={i.open}>
                  <Arrow />
                </AccordionArrowContainer>
              ) : null}
              <p>{i.title}</p>
            </AccordionTitle>
            <AccordionContent isOpen={i.open}>
              <AccordionContentText isOpen={i.open}>
                {i.linksOfValues
                  ? i.linksOfValues.map((linksOfValue) => (
                      <AccordionLink
                        key={linksOfValue[0]}
                        to={linksOfValue[2]}
                        onClick={onClick}
                      >
                        {linksOfValue[1]}
                      </AccordionLink>
                    ))
                  : null}
              </AccordionContentText>
            </AccordionContent>
          </div>
        ))}
        {currentUser ? (
          <AccordionButton onClick={signOut}>Sign out</AccordionButton>
        ) : null}
      </AccordionContainer>
    </HeaderQueryContainer>
  );
};

export default HeaderQuery;
