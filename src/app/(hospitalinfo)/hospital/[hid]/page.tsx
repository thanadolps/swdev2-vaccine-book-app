import Image from "next/image";

const mockHospitals: { [id in string]: { name: string; imgSrc: string } } = {
  "5883c4aa-eaec-4a89-a9cf-123fc8ba88e3": {
    name: "Chulalongkorn Hospital",
    imgSrc: "/hospital/chula.jpg",
  },
  "65c67747-6414-4d80-938f-01d225df6177": {
    name: "Rajavithi Hospital",
    imgSrc: "/hospital/rajavithi.jpg",
  },
  "8760f471-d4dd-4615-94a9-24b5955a95ec": {
    name: "Thammasat University Hospital",
    imgSrc: "/hospital/thammasat.jpg",
  },
};

export default function HospitalDetail(props: { params: { hid: string } }) {
  const hid = props.params.hid;
  const hospital = mockHospitals[hid];

  {
    /* center in middle of screen */
  }
  return (
    <div className="h-screen flex items-center">
      <div className="flex justify-center m-auto">
        <Image
          src={hospital.imgSrc}
          alt={hospital.name}
          width={256}
          height={256}
          className="my-2 hover:animate-pulse hover:rounded-xl transition-all duration-150 rounded-lg"
        />

        <h2 className="text-center text-2xl mx-6">{hospital.name}</h2>
      </div>
    </div>
  );
}
