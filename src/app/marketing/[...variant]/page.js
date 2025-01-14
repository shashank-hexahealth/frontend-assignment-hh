import { notFound } from "next/navigation";

const TreatmentOfDeseaseArr = [
  "superthin",
  "faqthin",
  "cost",
  "doctor",
  "lens",
];

export default function Variant({ params }) {
  
  if (params.variant.length === 2) {
    if (TreatmentOfDeseaseArr.includes(params.variant[0])) {
      return <div>{params.variant[0]}</div>;
    } else {
      notFound();
    }
  }
  return (
    <div>
      <h1>Welcome to the Cataract Page</h1>
      <p>This is the default content for Cataract.</p>
    </div>
  );
}
