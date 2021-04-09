const router = require("express").Router();
const apiContoller = require("../controllers/apiController");
const { upload_member } = require("../middlewares/multer");
const cors = require("cors");

router.use(cors());
router.get("/landing-page", apiContoller.landingPage);
router.get("/detail-page/:id", apiContoller.detailPage);
router.post("/booking-page", upload_member, apiContoller.bookingPage);

module.exports = router;
