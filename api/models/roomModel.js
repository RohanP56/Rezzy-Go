import mongoose from "mongoose";
const { Schema } = mongoose;

const roomSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  maxPeopleAllowed:{
    type: Number,
    required: true,
  },
  roomNumbers: [{
    number: Number,
    unAvailableDates: {type: [Date]}
  }]
});

export default mongoose.model("Room", roomSchema);

/*

roomNumbers: [{
    number: Number,
    unavailabledates: [{type: Date}]
}]

example:
[
    {number:101, unavailabledates:[18.04.2002, 19.04.2002]}
    {number:101, unavailabledates:[8.04.2002, 20.04.2002]}
]
*/