import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { Hospital } from "@/models/hospital";

type HospitalCatalogProps = {
  hospitals: Hospital[] | PromiseLike<Hospital[]>;
  ratingMap: { [key in string]: number | undefined };
  onRatingChange?: (hospital: Hospital, rating: number) => void;
};

export default async function HospitalCatalog(props: HospitalCatalogProps) {
  const hospitals = await props.hospitals;

  return (
    <div className="flex flex-wrap justify-center md:mx-16 py-8 gap-8">
      {hospitals.map((hospital) => (
        <Link href={`/hospital/${hospital.id}`} key={hospital.id}>
          <ProductCard
            name={hospital.name}
            imgSrc={hospital.picture || "www.picsum.photos/256"}
            rating={props.ratingMap[hospital.name]}
            onRatingChange={
              props.onRatingChange
                ? (rating) => props.onRatingChange?.(hospital, rating)
                : undefined
            }
          />
        </Link>
      ))}
    </div>
  );
}
