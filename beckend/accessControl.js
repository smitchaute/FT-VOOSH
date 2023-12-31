accessController = (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "https://ft-voosh-jfpw.vercel.app");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "PUT, GET, POST, DELETE, OPTIONS"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type"
    );
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
};

module.exports = { accessController: accessController };