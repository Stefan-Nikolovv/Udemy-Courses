import Link from "next/link";
import Navigation from "./componets/Navigation";

export default function Page() {
  return (
    <div>
      <Navigation />
      <h1>Hello Next</h1>
      <Link href="/cabins">Explore cabins</Link>
    </div>
  );
}
