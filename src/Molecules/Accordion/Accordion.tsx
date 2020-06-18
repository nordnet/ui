import React from 'react';
import styled from 'styled-components';
import { Separator } from '../..';
import { Component } from './Accordion.types';

const Footer = styled.div`
  padding-top: ${p => p.theme.spacing.unit(3)}px;
`;

export const Accordion: Component = ({ children, footer }) => {
  return (
    <>
      {children}
      {footer && (
        <>
          <Separator />
          <Footer>{footer}</Footer>
        </>
      )}
    </>
  );
};
