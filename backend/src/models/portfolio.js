const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const portfolioSchema = new Schema(
  {
    portfolio:
    {
      type: String,
      unique: true,
      required: [true, 'Portfolio name is required'],
      max: [255, 'Portfolio name is too long'],
      set: v => v.toLowerCase()
    },
    exchange:
    {
      type: Schema.Types.ObjectId,
      ref: 'Exchange',
      required: true
    },
    user:
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    description:
    {
      type: String,
      max: [512, 'Description is too long'],
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Portfolio', portfolioSchema);
