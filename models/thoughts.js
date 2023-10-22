const { Schema, model } = require('mongoose');

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
    // reactions: [
    //   {
    //     reactionID: {
    //       type: Schema.Types.ObjectId,
    //       default: new Types.ObjectId(),
    //     },
    //     createdAt: {
    //       type: Date,
    //       default: Date.now,
    //     },
    //     id: {
    //       type: Schema.Types.ObjectId,
    //       ref: 'thoughts',
    //     },
    //     reactionBody: {
    //       type: String,
    //       required: true,
    //     },
    //     username: {
    //       type: String,
    //       required: true,
    //     },
    //   },
    // ],
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
