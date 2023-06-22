accessController = (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*", "https://3eco-assets.s3.ap-south-1.amazonaws.com");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "PUT, GET, POST, DELETE, OPTIONS"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials"
    );
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
};

module.exports = { accessController: accessController };