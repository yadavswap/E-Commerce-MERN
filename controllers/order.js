const {
  Order,
  ProductCart
} = require("../models/order");
exports.getOrderById = (req, res, next, id) => {
  Order.findById(id)
    .populate("products.product", "name price")
    .exec((err, order) => {
      if (err) {
        return res.status(400).json({
          error: "Order not found in DB",
        });
      }
      req.order = order;
      next();
    });
};

// create
exports.createOrder = (req, res) => {
  req.body.order.user = req.profile;
  const order = new Order(req.body.order);
  order.save((err, order) => {
    if (err) {
      return res.status(400).json({
        error: "Failed to save order in DB",
      });
    }
    res.josn(order);
  })
}

// get all orders
exports.getAllOrders = (req,res)=>{
  Order.find()
  .populate('user',"_id name")
  .exec((err, order) => {
    if (err) {
      return res.status(400).json({
        error: "NO Order Found",
      });
    }
    res.josn(order);
  })
}

// order status 
exports.getOrderStatus=(req,res)=>{
  res.json(Order.schema.path("status").enumValues);
};
// order update
exports.updateOrderStatus = (req,res)=>{
  Order.update(
    {_id:req.body.orderId},
    {$set: {status:req.body.status}},
    (err,order)=>{
      if(err){
        return res.status(400).json({
          error:"Cannot update order status"
        });
      }
      res.json(order);
    }
  ) 
}