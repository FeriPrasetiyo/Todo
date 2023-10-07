const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  userName: String,
  todos: [{ type: Schema.Types.ObjectId, ref: "Todo" }],
});

module.exports = model("User", userSchema);
