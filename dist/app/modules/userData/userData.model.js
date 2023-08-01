'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.UserData = exports.UserDataSchema = void 0;
const mongoose_1 = require('mongoose');
exports.UserDataSchema = new mongoose_1.Schema(
  {
    user: {
      type: mongoose_1.Schema.Types.ObjectId,
      ref: 'User',
      unique: true,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    sector: { type: [String], required: true },
    agreeTerms: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);
exports.UserData = (0, mongoose_1.model)('UserData', exports.UserDataSchema);
