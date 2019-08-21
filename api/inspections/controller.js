const data = require('../../data/mock-data.json');
const { paginate, PER_PAGE } = require('../../helper/paging');

const getInspections = (req, res) => {
  const { page } = req.query;
  const { events } = data;
  const pagination = paginate(events.length, page);
  const { page: currentPage } = pagination;
  const start = PER_PAGE * (Number(currentPage) - 1);
  const end = PER_PAGE * Number(currentPage);
  res.json({
    success: true,
    data: events.slice(start, end),
    pagination
  })
}

module.exports = {
  getInspections
}