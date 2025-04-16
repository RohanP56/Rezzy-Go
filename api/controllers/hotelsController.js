import Hotel from "../models/hotelModel.js"

// Create
export const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (error) {
    next(error);
  }
};

// Update
export const updateHotel = async (req, res, next) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (error) {
    next(error);
  }
};

//Delete
export const deleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotes has been Deleted");
  } catch (error) {
    next(error);
  }
};

//Get
export const getHotel = async (req, res, next) => {
  try {
    const getHotel = await Hotel.findById(req.params.id);
    res.status(200).json(getHotel);
  } catch (error) {
    next(error);
  }
};

//Get All
export const getHotels = async (req, res, next) => {
  try {
    const getHotels = await Hotel.find();
    res.status(200).json(getHotels);
  } catch (error) {
    next(error);
  }
};
