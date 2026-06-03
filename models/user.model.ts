import mongoose from "mongoose";
import bcrypt from "bcryptjs";

interface IUser extends mongoose.Document {
  name: string;
  email: string;
  password: string;

  role: "admin" | "counsler";

  phone?: string;

  adhaarNo?: string;

  isActive: boolean;
}

const userSchema = new mongoose.Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    role: {
      type: String,
      enum: ["admin", "counsler"],
      default: "counsler",
    },
    isActive : {
      type : Boolean,
      default : true
    }
  },
  { timestamps: true },
);

// Hash password before saving
userSchema.pre("save", async function (this: IUser) {
  if (!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password, 10);
});

// Compare password method
userSchema.methods.comparePassword = async function (password: string) {
  return bcrypt.compare(password, this.password);
};

export const User = mongoose.models.User || mongoose.model<IUser>("User", userSchema);

