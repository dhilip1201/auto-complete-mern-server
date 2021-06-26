const Item = require('../models/item')
exports.addProduct = (req,res) => {
    Item.findOne({product: req.body.product}).exec((error , products)=>{
    if(products){
        return res.status(201).json({
            message: 'This Product already stored'
        })
    }
    const {product} = req.body;
    
    const _item = new Item({product})
    _item.save((error, data)=>{
    if(error) {
        return res.status(400).json({
            message:'Something went wrong'
        })
    }
    if(data){
        return res.status(201).json({
            message: "Product stored successfully"
        })
    }
    
    })
    });
    }

    exports.allProducts = (req,res)=>{
        Item.find({}).exec((error, data) =>{
            if(error){
                return res.status(400).json({
                    message:'Something went wrong'
                })
            }
            if(data){
                return res.status(200).json({
                    data
                })
            }
        })
        }