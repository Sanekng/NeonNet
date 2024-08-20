import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["buyer", "seller", "admin"], default: "buyer" }, // Differentiating roles
  profile: {
    name: { type: String, required: true },
    address: { type: String },
    phone: { type: String },
    avatar: { type: String }, // URL of the user's avatar image
  },
  sellerInfo: {
    // Only applicable if the user is a seller
    storeName: { type: String },
    storeDescription: { type: String },
    products: [{ type: Schema.Types.ObjectId, ref: "Product" }], // Products sold by the seller
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", userSchema);
