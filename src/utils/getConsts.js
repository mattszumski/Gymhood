const items = {
  BASE_URL: "http://localhost:4000",
};

const getConst = (constant) => {
  return items[constant] ? items[constant] : null;
};

export default getConst;
