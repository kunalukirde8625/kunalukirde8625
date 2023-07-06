const Product = require("../models/product");

const getAllProducts = async (req ,res ) => {

    const { company , name , featured ,sort , select} = req.query;

    const queryObject = {};

    if(company) {
        queryObject.company = { $regex : company , $options : "i"};
        // console.log(queryObject);
    }

    if(name){
        queryObject.name = { $regex : name , $options : "i" };
        // console.log(queryObject);
    }
    if(featured)
    {
        queryObject.featured = { $regex : featured , $options : "i" };
        // console.log(queryObject);
    }

    let apiData = Product.find(queryObject);
    // sort
    if(sort)
    {
        const sortFix = sort.replace(","," ");
        apiData = apiData.sort(sortFix)
    }
    // select
    if(select)
    {
        // const selectData = select.replace(","," ");
        const selectData = select.split(",").join(" ");
        apiData = apiData.select(selectData);
    }

    // pagination
    let page = Number(req.query.page)  || 1;
    let limit = Number(req.query.limit) || 3;

    let skip = (page - 1) + limit;

    apiData = apiData.skip(skip).limit(limit);

    console.log(queryObject);
    // const products = await Product.find(queryObject);
    const products = await apiData;

    res.status(200).json({ products });
}

const getAllProductsTesting = async (req , res) => {
    // const products = await Product.find(req.query)
    const products = await Product.find(req.query).sort("price");
    res.status(200).json({ products });
}

module.exports = { getAllProducts , getAllProductsTesting};