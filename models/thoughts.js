const { Schema, model, Types } = require('mongoose');

const thoughtsSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    userId: {
      type: Types.ObjectId,
      ref: 'User', // Reference the User model
      required: true,
    },
    reactions: [
      {
        reactionID: {
          type: Types.ObjectId,
          default: new Types.ObjectId(),
        },
        createdAt: {
          type: Date,
          default: Date.now,
        },
        reactionBody: {
          type: String,
          required: true,
        },
        username: {
          type: String,
          required: true,
        },
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

const Thoughts = model('Thoughts', thoughtsSchema);

module.exports = Thoughts;
