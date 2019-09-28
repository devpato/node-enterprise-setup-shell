/* Todo Controller */

const todoService = require('../services/todo');
const Task = require('../models/task');

module.exports = {
  //EXAMPLE CONTROLLER
  getTask: async (req, res, next) => {
    try {
      const tasks = await todoService.getTasks();
      return res.status(200).json({
        message: 'Fetched all data',
        tasks: tasks,
        status: 200
      });
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      return err;
    }
  }
};
