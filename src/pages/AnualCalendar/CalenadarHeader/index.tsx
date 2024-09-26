import React from 'react';
import { Sc } from "./style";

interface AnnualHeaderProps {
  month: string;
  year: string;
}

function AnnualHeader({ month, year }: AnnualHeaderProps) {
  return (
    <Sc.Header>
      <Sc.HeaderTitle>
        <Sc.CurrentMonth>{month}</Sc.CurrentMonth> de{" "}
        <Sc.CurrentYear>{year}</Sc.CurrentYear>
      </Sc.HeaderTitle>
    </Sc.Header>
  );
}

export default AnnualHeader;
