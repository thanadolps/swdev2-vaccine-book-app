import { getHospital } from "@/libs/hospital";
import Image from "next/image";

export default async function HospitalDetail(props: {
  params: { hid: string };
}) {
  const hid = props.params.hid;
  const hospital = await getHospital(hid);

  const { picture, name, ...rest } = hospital;

  return (
    <div className="h-screen flex items-center">
      <div className="flex justify-center m-auto">
        <Image
          src={picture || "www.picsum.photos/256"}
          alt={name}
          width={256}
          height={256}
          className="my-2 hover:animate-pulse hover:rounded-xl transition-all duration-150 rounded-lg"
        />

        <div className="flex flex-col justify-between text-left mx-6">
          <h2 className="text-center text-2xl">{name}</h2>

          <div>
            <span>
              {hospital.province} <br />
              {hospital.district} <br />
              {hospital.address} <br />
              {hospital.postalcode} <br />
              {hospital.tel}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
