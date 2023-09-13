"use client";

import ProductCard from "@/components/ProductCard";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { useReducer, useState } from "react";
import Image from "../../node_modules/next/image";

const hospitals = [
  {
    name: "Chulalongkorn Hospital",
    imgSrc: "/hospital/chula.jpg",
  },
  {
    name: "Rajavithi Hospital",
    imgSrc: "/hospital/rajavithi.jpg",
  },
  {
    name: "Thammasat University Hospital",
    imgSrc: "/hospital/thammasat.jpg",
  },
] as const;

type Hospital = (typeof hospitals)[number]["name"];
type State = Partial<{ [key in Hospital]: number }>;
type Action =
  | { type: "set"; hospital: string; rating: number }
  | { type: "unset"; hospital: Hospital };
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

export default function CardPanel() {
  const [ratingMap, dispatch] = useReducer(reducer, {});

  return (
    <>
      <div>
        <div className="flex flex-wrap justify-center md:mx-16 py-16 gap-8">
          {hospitals.map((hospital) => (
            <ProductCard
              name={hospital.name}
              imgSrc={hospital.imgSrc}
              rating={ratingMap[hospital.name]}
              onRatingChange={(rating) => {
                console.log(rating);
                // alert(`You rated ${hospital.name} ${rating} stars!`);
                dispatch({ type: "set", hospital: hospital.name, rating });
              }}
            />
          ))}
        </div>
        <div className="fixed right-0 bottom-0 w-60 h-60">
          <Image src="/cover/medical-5459630_1280.png" alt="support" fill />
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
                hospital: hospital as Hospital,
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

function exhaustiveGuard(_value: never): never {
  throw new Error(
    `ERROR! Reached forbidden guard function with unexpected value: ${JSON.stringify(
      _value
    )}`
  );
}
