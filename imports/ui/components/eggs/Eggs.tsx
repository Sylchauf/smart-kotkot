import React from "react";
import moment, { Moment } from "moment";
import { FormattedMessage } from "react-intl";

import { styled } from "@mui/system";
import { Grid } from "@mui/material";

import { Eggs as EggsType } from "../../hooks/useEggs";

interface Props {
  list: EggsType[];
  isLoading: boolean;
}

const Title = styled("div")`
  color: gray;
`;

const Value = styled("div")`
  font-size: 24px;
`;

const Eggs: React.FC<Props> = ({ list, isLoading }) => {
  if (isLoading) return null;

  const startWeek = moment().startOf("week");
  const startMonth = moment().startOf("month");
  const startYear = moment().startOf("year");
  const lastYear = moment().subtract(1, "year").startOf("year");

  const countSince = (date: Moment): number => {
    return list.reduce((previous, current) => {
      if (moment(current.date).isAfter(date)) return previous + current.value;
      else return previous;
    }, 0);
  };

  const numberTotalWeek = countSince(startWeek);
  const numberTotalMonth = countSince(startMonth);
  const numberTotalYear = countSince(startYear);
  const numberTotalLastYear = list.reduce((previous, current) => {
    if (
      moment(current.date).isAfter(lastYear) &&
      moment(current.date).isBefore(startYear)
    )
      return previous + current.value;
    else return previous;
  }, 0);

  return (
    <Grid container spacing={4} textAlign={"center"}>
      <Grid item xs={6} sm={3}>
        <Title>
          <FormattedMessage id={"Eggs.ThisWeek"} defaultMessage={"This week"} />
        </Title>
        <Value>{numberTotalWeek} 🥚</Value>
      </Grid>

      <Grid item xs={6} sm={3}>
        <Title>
          <FormattedMessage
            id={"Eggs.ThisMonth"}
            defaultMessage={"This month"}
          />
        </Title>
        <Value>{numberTotalMonth} 🥚</Value>
      </Grid>

      <Grid item xs={6} sm={3}>
        <Title>
          <FormattedMessage id={"Eggs.ThisYear"} defaultMessage={"This Year"} />
        </Title>
        <Value>{numberTotalYear} 🥚</Value>
      </Grid>

      <Grid item xs={6} sm={3}>
        <Title>
          <FormattedMessage id={"Eggs.LastYear"} defaultMessage={"Last Year"} />
        </Title>
        <Value>{numberTotalLastYear} 🥚</Value>
      </Grid>
    </Grid>
  );
};

export default Eggs;
