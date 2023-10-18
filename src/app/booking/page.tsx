import { getHospitals } from "@/libs/hospital";
import { getUserProfile } from "@/libs/user";
import { getServerSession } from "next-auth";
import BookingForm from "./booking-form";
import UserInfo from "./user-info";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import invariant from "tiny-invariant";

export default async function Booking() {
  const [hospitals, profile] = await Promise.all([
    getHospitals(),
    getServerSession(authOptions).then((session) => {
      invariant(session, "session must be defined (user login)");
      return getUserProfile(session!.user.token);
    }),
  ]);

  return (
    <div className="flex flex-col justify-center items-center my-8">
      <UserInfo profile={profile} />
      <BookingForm hospitals={hospitals} />
    </div>
  );
}
