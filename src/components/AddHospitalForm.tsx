import { dbConnect } from "@/db/dbConnect";
import HospitalModel, { IHospital } from "@/db/models/Hospital";
import { TextField, Paper, Button } from "@mui/material";
import { revalidatePath } from "next/cache";

export default function AddHospitalForm() {
  return (
    <Paper className="m-4 p-6" elevation={4}>
      <h2 className="text-2xl font-bold mb-4">Add Hospital</h2>
      <form className="flex flex-col gap-3" action={addHospital}>
        <TextField
          required
          label="Hospital Name"
          variant="outlined"
          name="name"
        />
        <TextField required label="Address" variant="outlined" name="address" />
        <TextField
          required
          label="District"
          variant="outlined"
          name="district"
        />
        <TextField
          required
          label="Province"
          variant="outlined"
          name="province"
        />
        <TextField
          required
          label="Postalcode"
          variant="outlined"
          name="postalcode"
        />
        <TextField required label="Tel" variant="outlined" name="tel" />
        <TextField required label="Picture" variant="outlined" name="picture" />

        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </Paper>
  );
}

async function addHospital(formData: FormData) {
  "use server";

  await dbConnect();
  const hospital = {
    name: formData.get("name") as string,
    address: formData.get("address") as string,
    district: formData.get("district") as string,
    province: formData.get("province") as string,
    postalcode: formData.get("postalcode") as string,
    tel: formData.get("tel") as string | undefined,
    picture: formData.get("picture") as string | undefined,
  };
  await HospitalModel.create(hospital);

  revalidatePath("/hospital");
}
