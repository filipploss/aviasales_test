const fetchData = (payload) => ({ type: "FETCH_DATA", payload });

const filterData = (payload) => ({ type: "FILTER_DATA", payload });

// const changeVolumeSelect = (payload) => ({
//   type: "CHANGE_VOLUME_SELECT",
//   payload,
// });

// const favButtonSelect = (payload) => ({f
//   type: "FAV_BUTTON_SELECT",
//   payload,
// });

// const searchDataInit = (payload) => ({
//   type: "SEARCH_DATA_INIT",
//   payload,
// });

export { fetchData, filterData };
