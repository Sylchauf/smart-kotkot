import { Card, CardContent } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

interface Props {
  title: React.ReactNode | string;
  content: React.ReactNode | string;
  actions?: React.ReactNode | string;
}

const Container = styled("div")`
  font-weight: 600;
  margin-bottom: 16px;
  border-bottom: 1px solid #fc7100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 34px;

  div:first-letter {
    color: #fc7100;
    font-size: 130%;
  }
`;

const HomeCard: React.FC<Props> = ({ content, title, actions }) => {
  return (
    <Card>
      <CardContent>
        <Container>
          <div>{title}</div>
          <div>{actions}</div>
        </Container>
        {content}
      </CardContent>
    </Card>
  );
};

export default React.memo(HomeCard);
