import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: {type: Number,required: true, unique: true},
    password: { type: String, required: true },
    joiningDate: {type: Date},
    role: {
      type: String,
      enum: ["admin", "employee"],
      default: "employee",
    },
    department: String,
    isDeleted: { type: Boolean, default: false },
    salary:{type: Number}
  },
  { timestamps: true }
);

// ✅ CORRECT MONGOOSE HOOK
userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password, 10);
});

// Compare password
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);
export default User;