export enum Actions {
  SET_SORT = "SET_SORT",
}

export function setSort(desc: Boolean) {
  return {
    type: Actions.SET_SORT,
    sortDesc: desc,
  };
}
