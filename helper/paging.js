const PER_PAGE = 5;

const paginate = (total, page = 1, perPage = PER_PAGE) => {
  const pages = Math.ceil(total / perPage);
  return {
    page,
    total,
    pages,
    has_more: parseInt(page) < pages,
  };
};

module.exports = { paginate, PER_PAGE };