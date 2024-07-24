import Image from "next/image";
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
    <RedirectToSignIn />
    <SignedIn>
    <h1>HELLO USER</h1>
    </SignedIn>
    </>
  )
}
