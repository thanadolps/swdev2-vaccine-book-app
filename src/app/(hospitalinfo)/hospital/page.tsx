import { LinearProgress, List, ListItemButton } from "@mui/material";
import { exhaustiveGuard } from "@/libs/utils";
import Image from "next/image";
import { Suspense, useReducer } from "react";
import Link from "next/link";
import HospitalCatalog from "@/components/HospitalCatalog";
import { getHospitals } from "@/libs/hospital";

export default function Hospital() {
  // const [ratingMap, dispatch] = useReducer(reducer, {});
  const hospitals = getHospitals();

  return (
    <>
      <h1 className="text-center text-2xl mt-6">
        see <b className="text-3xl text-red-600 tracking-wide">SHOT</b> site
      </h1>

      <Suspense fallback={<LinearProgress />}>
        <HospitalCatalog
          hospitals={hospitals}
          ratingMap={{}}
          // onRatingChange={() => {}}
        />
      </Suspense>

      {/* <List className="bg-gray-900">
        {Object.entries(ratingMap).map(([hospital, rating]) => (
          <ListItemButton
            key={hospital}
            className="hover:line-through"
            onClick={() =>
              dispatch({
                type: "unset",
                hospital: hospital,
              })
            }
          >
            <i>{hospital}</i> &nbsp; rating = {rating}
          </ListItemButton>
        ))}
      </List> */}
    </>
  );
}

// Below are CardPanel from week 6

type State = Partial<{ [key in string]: number }>;
type Action =
  | { type: "set"; hospital: string; rating: number }
  | { type: "unset"; hospital: string };
function reducer(state: State, action: Action) {
  switch (action.type) {
    case "set":
      return { ...state, [action.hospital]: action.rating };
    case "unset":
      const newState = { ...state };
      delete newState[action.hospital];
      return newState;
    default:
      exhaustiveGuard(action);
  }
}
