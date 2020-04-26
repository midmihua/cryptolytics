const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exchangeSchema = new Schema(
  {
    name:
    {
      type: String,
      unique: true,
      required: [true, 'Name is required'],
      min: [3, 'Name is too short'],
      max: [50, 'Name is too long'],
      set: v => v.toLowerCase()
    },
    url:
    {
      type: String,
      max: [70, 'Url is too long'],
      set: v => v.toLowerCase()
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

exchangeSchema.set('toJSON', {
  transform: (doc, { __v, createdAt, updatedAt, ...rest }, options) => rest
});

module.exports = mongoose.model('Exchange', exchangeSchema);
