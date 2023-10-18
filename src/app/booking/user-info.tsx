import { Profile } from "@/models/user";
import dayjs from "dayjs";

export default function UserInfo(props: { profile: Profile }) {
  const { name, email, tel, createdAt } = props.profile;

  return (
    <div className="rounded-md shadow-md bg-white text-black">
      <div className="m-4 my-6 p-3">
        <h2 className="text-2xl font-bold mb-4 border-b border-neutral-600">
          {name}
        </h2>
        <div className="flex flex-col gap-2">
          <div>
            <span className="font-bold">Email: </span>
            {email}
          </div>
          <div>
            <span className="font-bold">Tel: </span>
            {tel}
          </div>
          <div>
            <span className="font-bold">Member Since: </span>
            {dayjs(createdAt).format("YYYY-MM-DD")}
          </div>
        </div>
      </div>
    </div>
  );
}
