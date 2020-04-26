const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const portfolioSchema = new Schema(
  {
    name:
    {
      type: String,
      required: [true, 'Name is required'],
      min: [3, 'Name is too short'],
      max: [255, 'Name is too long']
    },
    exchangeId:
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

portfolioSchema.index({ name: 1, user: 1 }, { unique: true });

module.exports = mongoose.model('Portfolio', portfolioSchema);
