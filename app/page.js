import Image from "next/image";
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/nextjs";

export const runtime = 'edge'

export default function Home() {
  return (
    <>
    <SignedIn>
    <h1>HELLO USER</h1>
    </SignedIn>
    <SignedOut>
      <h1>HELLO NON USER</h1>
    </SignedOut>
    </>
  )
}
