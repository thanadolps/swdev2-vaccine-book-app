import { Hospital } from "@/models/hospital";
import ky from "ky";

const backendUrl = "http://localhost:5000/api/v1";

export async function getHospitals() {
  // TODO: remove once client complain
  await new Promise((resolve) => setTimeout(resolve, 5000));

  const response = await ky
    .get("hospitals", { prefixUrl: backendUrl, fetch })
    .json<{ data: Hospital[] }>();
  return response.data;
}

export async function getHospital(id: string) {
  const response = await ky
    .get(`hospitals/${id}`, { prefixUrl: backendUrl })
    .json<{ data: Hospital }>();

  return response.data;
}
