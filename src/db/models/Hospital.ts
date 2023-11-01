import mongoose, { Document, Model, Schema, Types } from "mongoose";

export interface IHospital extends Document {
  name: string;
  address: string;
  district: string;
  province: string;
  postalcode: string;
  tel?: string;
  picture?: string;
}

const HospitalSchema: Schema<IHospital> = new Schema<IHospital>(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
      unique: true,
      trim: true,
      maxlength: [50, "Name cannot be more than 50 characters"],
    },
    address: {
      type: String,
      required: [true, "Please add an address"],
    },
    district: {
      type: String,
      required: [true, "Please add a district"],
    },
    province: {
      type: String,
      required: [true, "Please add a province"],
    },
    postalcode: {
      type: String,
      required: [true, "Please add a postalcode"],
      maxlength: [5, "Postalcode cannot be more than 5 digits"],
    },
    tel: {
      type: String,
    },
    picture: {
      type: String,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Cascade delete bookings when a hospital is deleted
HospitalSchema.pre<IHospital>("deleteOne", async function (next) {
  console.log(`Booking being removed from hospital ${this._id}`);
  await this.model("Booking").deleteMany({ hospital: this._id });
  next();
});

// Reverse populate with virtuals
HospitalSchema.virtual("bookings", {
  ref: "Booking",
  localField: "_id",
  foreignField: "hospital",
  justOne: false,
});

const HospitalModel: Model<IHospital> =
  mongoose.models.Hospital ||
  mongoose.model<IHospital>("Hospital", HospitalSchema);

export default HospitalModel;
