
const movie=require("../model/bookSchema");

  
     //get all movies
const getAllMovies=async(req,res,next)=>{
    let movies;
    try{
        movies=await movie.find();
    }
    catch(err){
        console.log(err);
        console.log("error occured")
    }
    if(!movies){
        return res.status(404).json({message:"no records found"})

    }
    return res.status(200).json({movies})

}; 
   // add movies list 
const addMovies = async (req, res, next) => {
    const { movieName, movieDirecter, language, ticketPrice,movieDiscription,moviePoster} = req.body;
    let movies;
    try {
        movies = new movie({
        movieName,
        movieDirecter,
        language,
        ticketPrice,
        movieDiscription,
        moviePoster
       
      });
      await movies.save();
    } catch (err) {
      console.log(err);
    }
  
    if (!movies) {
      return res.status(500).json({ message: "Unable To Add" });
    }
    return res.status(201).json({ movies });
  };

   // update movies
  const updateMovies = async (req, res, next) => {
    const id = req.params.id;
    const { movieName, movieDirecter, language, ticketPrice,movieDiscription,moviePoster } = req.body;
    let movies;
    try {
        movies = await movie.findByIdAndUpdate(id, {
        movieName,
        movieDirecter,
        language,
        ticketPrice,
        movieDiscription,
        moviePoster
      
      });
      movies = await movies.save();
    } catch (err) {
      console.log(err);
    }
    if (!movies) {
      return res.status(404).json({ message: "Unable To Update By this ID" });
    }
    return res.status(200).json({ movies });
  };
  






           //get movie by id
const getById = async (req, res, next) => {
    const id = req.params.id;
    let movies;
    try {
        movies = await movie.findById(id);
    } catch (err) {
      console.log(err);
    }
    if (!movies) {
      return res.status(404).json({ message: "No Book found" });
    }
    return res.status(200).json({ book });
  };


           //delete movies
  const deleteMovies = async (req, res, next) => {
    const id = req.params.id;
    let movies;
    try {
        movies = await movie.findByIdAndRemove(id);
    } catch (err) {
      console.log(err);
    }
    if (!movies) {
      return res.status(404).json({ message: "Unable To Delete By this ID" });
    }
    return res.status(200).json({ message: "Product Successfully Deleted" });
  };


  exports.getAllMovies = getAllMovies;
  exports.getById = getById;
  exports.addMovies= addMovies;
  exports.updateMovies= updateMovies;
  exports.deleteMovies= deleteMovies;

  




