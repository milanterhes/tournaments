import React from "react";
import { useSelector, useDispatch } from "react-redux";
import DateSort from "../presentational/DateSort";
import { setSort } from "../../actions";

const Sort = () => {
  const sortDesc = useSelector((state: any) => state.sortDesc);
  const dispatch = useDispatch();
  return (
    <DateSort desc={sortDesc} setSort={() => dispatch(setSort(!sortDesc))} />
  );
};

export default Sort;
