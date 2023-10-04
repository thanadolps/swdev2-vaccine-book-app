"use client";

import ProductCard from "@/components/ProductCard";
import { List, ListItemButton } from "@mui/material";
import { exhaustiveGuard } from "@/utils";
import Image from "next/image";
import { useReducer } from "react";
import Link from "next/link";

const mockHospitals = [
  {
    id: "5883c4aa-eaec-4a89-a9cf-123fc8ba88e3",
    name: "Chulalongkorn Hospital",
    imgSrc: "/hospital/chula.jpg",
  },
  {
    id: "65c67747-6414-4d80-938f-01d225df6177",
    name: "Rajavithi Hospital",
    imgSrc: "/hospital/rajavithi.jpg",
  },
  {
    id: "8760f471-d4dd-4615-94a9-24b5955a95ec",
    name: "Thammasat University Hospital",
    imgSrc: "/hospital/thammasat.jpg",
  },
] as const;

export default function Hospital() {
  const [ratingMap, dispatch] = useReducer(reducer, {});

  return (
    <>
      <h1 className="text-center text-2xl mt-6">
        see <b className="text-3xl text-red-600 tracking-wide">SHOT</b> site
      </h1>

      <div>
        <div className="flex flex-wrap justify-center md:mx-16 py-8 gap-8">
          {mockHospitals.map((hospital) => (
            <Link href={`/hospital/${hospital.id}`}>
              <ProductCard
                name={hospital.name}
                imgSrc={hospital.imgSrc}
                rating={ratingMap[hospital.name]}
                onRatingChange={(rating) => {
                  dispatch({ type: "set", hospital: hospital.name, rating });
                }}
              />
            </Link>
          ))}
        </div>
      </div>

      <List className="bg-gray-900">
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
      </List>
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
