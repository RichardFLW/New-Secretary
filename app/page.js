import TestFirestore from "../app/TestFirestore/page";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <Link href="/register">register</Link>
      <h1>Home Page</h1>
      <TestFirestore />
    </div>
  );
}
