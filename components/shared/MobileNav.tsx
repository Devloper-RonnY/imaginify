import { SignedIn, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
  

const MobileNav = () => {
  return (
    <header className="header">
        <Link href="/" className="flex items-center gap-2 md:py-2">
        <Image 
        src="/assets/images/logo-text.svg"
        alt="logo"
        width={180}
        height={28}
        />
        </Link>

        <Link href="/" className="flex gap-2">
            <SignedIn>
                <UserButton />
            </SignedIn>
        </Link>
    </header>
  )
}

export default MobileNav