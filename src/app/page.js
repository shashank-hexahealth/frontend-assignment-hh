import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex gap-4 items-center flex-col">
          <p className="text-lg">HexaHealth</p>
          <div>
            <Link href="/book-appoinment" className="bg-red-100 p-1 px-2 rounded mr-2">Book Appoinment</Link>
            <Link href="/check-services" className="bg-red-100 p-1 px-2 rounded">Check Services</Link>

          </div>
        </div>
      </main>
    </div>
  );
}
