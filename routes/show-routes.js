const express=require('express');
const router=express.Router();
const movie=require("../controllers/movie_controllers")
const moviecontroler=require('../controllers/movie_controllers');



router.get("/",moviecontroler.getAllMovies);
router.post("/", moviecontroler.addMovies);
router.get("/:id", moviecontroler.getById);
router.put("/:id", moviecontroler.updateMovies);
router.delete("/:id", moviecontroler.deleteMovies);

module.exports=router;
