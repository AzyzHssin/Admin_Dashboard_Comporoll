const express = require("express");
const {createNews,fetchNews,deleteOne,updateOne,fetchAllNews
} = require("../controllers/actualiteController");


const router = express.Router();

router.route("/").post(createNews);
router.route("/").get(fetchNews);
router.route("/:id").delete(deleteOne);
router.route("/:id").put(updateOne);
router.route("/fetchAll").get(fetchAllNews)

module.exports = router;