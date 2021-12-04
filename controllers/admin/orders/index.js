const asyncHandler = require('../../../helpers/asyncHandler');
const getOrders = require('./getOrders');
const addOrder = require('./addOrder');
const updateOrder = require('./updateOrder');
const deleteOrder = require('./deleteOrder');
const getDetailOrder = require('./getDetailOrder');
const getLoggedInUserOrders = require('./getLoggedInUserOrders')
const updateOrderToPaid = require('./updateOrderToPaid')
const updateOrderToDelivered = require('./updateOrderToDelivered')

module.exports = {
    getOrders: asyncHandler(getOrders),
    addOrder: asyncHandler(addOrder),
    updateOrder: asyncHandler(updateOrder),
    deleteOrder: asyncHandler(deleteOrder),
    getDetailOrder: asyncHandler(getDetailOrder),
    getLoggedInUserOrders: asyncHandler(getLoggedInUserOrders),
    updateOrderToPaid: asyncHandler(updateOrderToPaid),
    updateOrderToDelivered: asyncHandler(updateOrderToDelivered),
};