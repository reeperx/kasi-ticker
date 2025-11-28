"use client";

import { Button } from "./ui/button";
import { Authenticated, Unauthenticated } from "convex/react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <div className="border-b">
      <div className="flex flex-col lg:flex-row items-center gap-4 p-4">
        <div className="flex items-center justify-between w-full lg:w-auto">
          <Link href="/" className="font-bold shrink-0">
            <Image
              src={logo}
              alt="logo"
              width={100}
              height={100}
              className="w-24 lg:w-28"
            />
          </Link>

          <div className="lg:hidden">
            <Authenticated>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </Authenticated>

            <Unauthenticated>
              <SignedOut>
                <SignInButton mode="modal">
                  <Button className="bg-gray-100 text-gray-800 px-3 py-1.5 text-sm rounded-lg hover:bg-gray-200 transition border border-gray-300">
                    Sign In
                  </Button>
                </SignInButton>
              </SignedOut>
            </Unauthenticated>
          </div>
        </div>

        {/* Search Bar - Full width on mobile */}
        <div className="w-full lg:max-w-2xl">
          <SearchBar />
        </div>

        <div className="hidden lg:block ml-auto">
          <Authenticated>
            <SignedIn>
              <div className="flex items-center gap-3">
                <Link href="/seller">
                  <Button className="bg-blue-600 text-white px-3 py-1.5 text-sm rounded-lg hover:bg-blue-700 transition">
                    Sell Tickets
                  </Button>
                </Link>

                <Link href="/tickets">
                  <Button className="bg-gray-100 text-gray-800 px-3 py-1.5 text-sm rounded-lg hover:bg-gray-200 transition border border-gray-300">
                    My Tickets
                  </Button>
                </Link>
                <UserButton />
              </div>
            </SignedIn>
          </Authenticated>

          <Unauthenticated>
            <SignedOut>
              <SignInButton mode="modal">
                <Button className="bg-gray-100 text-gray-800 px-3 py-1.5 text-sm rounded-lg hover:bg-gray-200 transition border border-gray-300">
                  Sign In
                </Button>
              </SignInButton>
            </SignedOut>
          </Unauthenticated>
        </div>

        {/* Mobile Action Buttons */}
        <div className="lg:hidden w-full flex justify-center gap-3">
          <Authenticated>
            <SignedIn>
              <Link href="/seller" className="flex-1">
                <Button className="w-full bg-blue-600 text-white px-3 py-1.5 text-sm rounded-lg hover:bg-blue-700 transition">
                  Sell Tickets
                </Button>
              </Link>

              <Link href="/tickets" className="flex-1">
                <Button className="w-full bg-gray-100 text-gray-800 px-3 py-1.5 text-sm rounded-lg hover:bg-gray-200 transition border border-gray-300">
                  My Tickets
                </Button>
              </Link>
            </SignedIn>
          </Authenticated>
        </div>
      </div>
    </div>
  );
}

export default Header;
