import Image from "next/image"
import Link from "next/link"
import NavItems from "./navItems";
// import { cn } from "@/lib/utils";
import { SignInButton,SignedIn , SignedOut , UserButton } from "@clerk/nextjs";
export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/">
    <div className="flex items-center gap-2.5 cursor-pointer">

      <Image src='/images/logo.svg' alt="logo" width={50} height={50} className="rounded-full" />

    </div>


      </Link>


      <div className="flex items-center gap-8">
        <NavItems />


    <SignedOut>
      <SignInButton>
         <button className="btn-signin">Sign In</button>
      </SignInButton>
    </SignedOut>

    <SignedIn>
      <UserButton />
    </SignedIn>

       
      </div>
    </nav>
  )

}