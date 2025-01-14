import Link from "next/link";

export default function DoctorPage({ params }) {
  return (
    <div>
      <p className="text-cls">
        To book appoinment for {params.doctorName}, Connect at +91 98765 54321
      </p>
      <div className="h-screen">
        <Link href="#reviews">Reviews</Link>
      </div>
      <div id="reviews" className="h-screen">
        <h1>Reviews</h1>
        <p>Reviews 1</p>
        <p>Reviews 2</p>
        <p>Reviews 3</p>
        <p>Reviews 4</p>
      </div>
    </div>
  );
}
