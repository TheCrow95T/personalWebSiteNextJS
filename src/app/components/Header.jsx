import Link from "next/link";

export default function Header() {
  return (
    <>
      <navbar>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/skills">Skills</Link>
        <Link href="/tools">Tools</Link>
        <Link href="/contact">Contact</Link>
      </navbar>
    </>
  );
}
