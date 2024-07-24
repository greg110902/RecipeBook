import Image from "next/image";
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
    <SignedIn>
      <div>
        Hello world
      </div>
    </SignedIn>
    </>
  )
}
