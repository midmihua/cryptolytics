const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const portfolioSchema = new Schema(
  {
    portfolio:
    {
      type: String,
      required: [true, 'Portfolio name is required'],
      max: [255, 'Portfolio name is too long']
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

portfolioSchema.set('toJSON', {
  transform: (doc, { __v, createdAt, updatedAt, ...rest }, options) => rest
});

portfolioSchema.index({ portfolio: 1, user: 1 }, { unique: true });

module.exports = mongoose.model('Portfolio', portfolioSchema);
