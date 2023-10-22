const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
      default: new Types.ObjectId(),
    },
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    friendCount: {
      type: Number,
      default: 0,
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thoughts',
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const User = model('User', userSchema);

module.exports = User;
