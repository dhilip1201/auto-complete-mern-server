const Cart = require('../models/cart')

exports.addItemToCart=(req,res)=>{


    const cart = new Cart({
        cartItems: req.body.cartItems
    })
    cart.save((error, cart) =>{
        if(error){
            return res.status(400).json({
                error
            })
        }
        if(cart){
            return res.status(201).json({
                message:'Cart Item Added Successfully'
            })
        }
    })

   

    
}

exports.getCartItems = (req,res)=>{
  Cart.find({}).exec((error, cart) =>{
      if(error){
          return res.status(400).json({
              message:'Something went wrong'
          })
      }
      if(cart){
          return res.status(200).json({
            cart
          })
      }

  })
  }





