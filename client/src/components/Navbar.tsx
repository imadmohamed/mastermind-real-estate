// "use client";

// import { NAVBAR_HEIGHT } from "@/lib/constants";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import { Button } from "./ui/button";
// import { useGetAuthUserQuery } from "@/state/api";
// import { usePathname, useRouter } from "next/navigation";
// import { signOut } from "aws-amplify/auth";
// import { Bell, MessageCircle, Plus, Search } from "lucide-react";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "./ui/dropdown-menu";
// import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
// import { SidebarTrigger } from "./ui/sidebar";

// const Navbar = () => {
//   const { data: authUser } = useGetAuthUserQuery();
//   const router = useRouter();
//   const pathname = usePathname();

//   const isDashboardPage =
//     pathname.includes("/managers") || pathname.includes("/tenants");

//   const handleSignOut = async () => {
//     await signOut();
//     window.location.href = "/";
//   };
//   // bg-primary-700

//   return (
//     <div
//       className="fixed top-0 left-0 w-full z-50 shadow-xl "
//       style={{ height: `${NAVBAR_HEIGHT}px` }}
//     >
//       <div className="flex justify-between items-center w-full  px-8  text-white bg-primary-700">
//         <div className="flex items-center gap-4 md:gap-6 ">
//           {isDashboardPage && (
//             <div className="md:hidden">
//               <SidebarTrigger />
//             </div>
//           )}
//           <Link
//             href="/"
//             className="cursor-pointer hover:!text-primary-300"
//             scroll={false}
//           >
//             <div className="flex items-center gap-3 ">
//               <Image
//                 src="/logo1.svg"
//                 alt="Master Minde Real Estate  Logo"
//                 width={64}
//                 height={64}
//                 className="w-16 h-16"
//               />
//             </div>
//           </Link>
//           {isDashboardPage && authUser && (
//             <Button
//               variant="secondary"
//               className="md:ml-4 bg-primary-50 text-primary-700 hover:bg-secondary-500 hover:text-primary-50"
//               onClick={() =>
//                 router.push(
//                   authUser.userRole?.toLowerCase() === "manager"
//                     ? "/managers/newproperty"
//                     : "/search"
//                 )
//               }
//             >
//               {authUser.userRole?.toLowerCase() === "manager" ? (
//                 <>
//                   <Plus className="h-4 w-4" />
//                   <span className="hidden md:block ml-2">Add New Property</span>
//                 </>
//               ) : (
//                 <>
//                   <Search className="h-4 w-4" />
//                   <span className="hidden md:block ml-2">
//                     Search Properties
//                   </span>
//                 </>
//               )}
//             </Button>
//           )}
//         </div>
//         {!isDashboardPage && (
//           <p className="text-primary-200 hidden md:block">
//             Discover your perfect rental apartment with our advanced search
//           </p>
//         )}
//         <div className="flex items-center gap-5">
//           {authUser ? (
//             <>
//               <div className="relative hidden md:block">
//                 <MessageCircle className="w-6 h-6 cursor-pointer text-primary-200 hover:text-primary-400" />
//                 <span className="absolute top-0 right-0 w-2 h-2 bg-secondary-700 rounded-full"></span>
//               </div>
//               <div className="relative hidden md:block">
//                 <Bell className="w-6 h-6 cursor-pointer text-primary-200 hover:text-primary-400" />
//                 <span className="absolute top-0 right-0 w-2 h-2 bg-secondary-700 rounded-full"></span>
//               </div>

//               <DropdownMenu>
//                 <DropdownMenuTrigger className="flex items-center gap-2 focus:outline-none">
//                   <Avatar>
//                     <AvatarImage src={authUser.userInfo?.image} />
//                     <AvatarFallback className="bg-primary-600">
//                       {authUser.userRole?.[0].toUpperCase()}
//                     </AvatarFallback>
//                   </Avatar>
//                   <p className="text-primary-200 hidden md:block">
//                     {authUser.userInfo?.name}
//                   </p>
//                 </DropdownMenuTrigger>
//                 <DropdownMenuContent className="bg-white text-primary-700">
//                   <DropdownMenuItem
//                     className="cursor-pointer hover:!bg-primary-700 hover:!text-primary-100 font-bold"
//                     onClick={() =>
//                       router.push(
//                         authUser.userRole?.toLowerCase() === "manager"
//                           ? "/managers/properties"
//                           : "/tenants/favorites",
//                         { scroll: false }
//                       )
//                     }
//                   >
//                     Go to Dashboard
//                   </DropdownMenuItem>
//                   <DropdownMenuSeparator className="bg-primary-200" />
//                   <DropdownMenuItem
//                     className="cursor-pointer hover:!bg-primary-700 hover:!text-primary-100"
//                     onClick={() =>
//                       router.push(
//                         `/${authUser.userRole?.toLowerCase()}s/settings`,
//                         { scroll: false }
//                       )
//                     }
//                   >
//                     Settings
//                   </DropdownMenuItem>
//                   <DropdownMenuItem
//                     className="cursor-pointer hover:!bg-primary-700 hover:!text-primary-100"
//                     onClick={handleSignOut}
//                   >
//                     Sign out
//                   </DropdownMenuItem>
//                 </DropdownMenuContent>
//               </DropdownMenu>
//             </>
//           ) : (
//             <>
//               <Link href="/signin">
//                 <Button
//                   variant="outline"
//                   className="text-white border-white bg-transparent hover:bg-white hover:text-primary-700 rounded-lg"
//                 >
//                   Sign In
//                 </Button>
//               </Link>
//               <Link href="/signup">
//                 <Button
//                   variant="secondary"
//                   className="text-white bg-secondary-600 hover:bg-white hover:text-primary-700 rounded-lg"
//                 >
//                   Sign Up
//                 </Button>
//               </Link>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

"use client";

import { NAVBAR_HEIGHT } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useGetAuthUserQuery } from "@/state/api";
import { usePathname, useRouter } from "next/navigation";
import { signOut } from "aws-amplify/auth";
import { Bell, ChevronDown, MessageCircle, Plus, Search } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { SidebarTrigger } from "./ui/sidebar";

const Navbar = () => {
  const { data: authUser } = useGetAuthUserQuery();
  const router = useRouter();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  const isDashboardPage =
    pathname.includes("/managers") || pathname.includes("/tenants");

  const handleSignOut = async () => {
    await signOut();
    window.location.href = "/";
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-1" : "bg-transparent py-4"
      }`}
      style={{ height: `${NAVBAR_HEIGHT}px` }}
    >
      <div className="flex justify-between items-center w-full px-6 transition-all duration-300">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          {isDashboardPage && (
            <div className="md:hidden">
              <SidebarTrigger />
            </div>
          )}
          <Link
            href="/"
            className={`cursor-pointer ${
              isScrolled ? "text-black" : "text-white"
            }`}
            scroll={false}
          >
            <div className="flex items-center gap-3">
              <Image
                src={isScrolled ? "/logo.svg" : "/logo1.svg"}
                alt="Master Mind Real Estate Logo"
                width={isScrolled ? 110 : 140}
                height={isScrolled ? 110 : 140}
                className="transition-all duration-300"
              />
            </div>
          </Link>
        </div>

        {/* Center Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/about"
            className={`hover:text-primary-400 font-medium transition ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            ABOUT
          </Link>
          <Link
            href="/sold"
            className={`hover:text-primary-400 font-medium transition ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            SOLD PRODUCTS
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger
              className={`flex items-center gap-1 font-medium hover:text-primary-400 transition ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              Off Plan Projects <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white text-primary-700 min-w-[200px]">
              <DropdownMenuItem asChild>
                <Link href="/off-plan/apartment">Apartment</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/off-plan/villa">Villa</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/off-plan/townhouse">Townhouse</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/off-plan/land">Land</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger
              className={`flex items-center gap-1 font-medium hover:text-primary-400 transition ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              Residential Plots <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white text-primary-700 min-w-[220px]">
              <DropdownMenuItem asChild>
                <Link href="/residential/luxury-villa">Luxury Villa Plot</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/residential/building">Residential Building Plots</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger
              className={`flex items-center gap-1 font-medium hover:text-primary-400 transition ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              Commercial Plots <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white text-primary-700 min-w-[250px]">
              <DropdownMenuItem asChild>
                <Link href="/commercial/building">Commercial Building Plots</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/commercial/labor-camps">Labor Camps Plots</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/commercial/warehouse">Warehouse Plots</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/commercial/hotel">Hotel Plots</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/commercial/industrial">Industrial Plots</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/commercial/school-hospital">School/Hospital Plot</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/commercial/other">Other Commercial Plot</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href="/contact"
            className={`hover:text-primary-400 font-medium transition ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            Maps
          </Link>
          <Link
            href="/contact"
            className={`hover:text-primary-400 font-medium transition ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Right Side - Auth or Avatar */}
        <div className="flex items-center gap-4">
          {authUser ? (
            <>
              {isDashboardPage && (
                <Button
                  variant="secondary"
                  className="bg-primary-600 text-white hover:bg-primary-800"
                  onClick={() =>
                    router.push(
                      authUser.userRole?.toLowerCase() === "manager"
                        ? "/managers/newproperty"
                        : "/search"
                    )
                  }
                >
                  {authUser.userRole?.toLowerCase() === "manager" ? (
                    <>
                      <Plus className="h-4 w-4" />
                      <span className="hidden md:block ml-2">
                        Add Property
                      </span>
                    </>
                  ) : (
                    <>
                      <Search className="h-4 w-4" />
                      <span className="hidden md:block ml-2">
                        Search Properties
                      </span>
                    </>
                  )}
                </Button>
              )}

              <div className="hidden md:block relative">
                <MessageCircle
                  className={`w-6 h-6 cursor-pointer ${
                    isScrolled ? "text-black" : "text-white"
                  }`}
                />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </div>

              <div className="hidden md:block relative">
                <Bell
                  className={`w-6 h-6 cursor-pointer ${
                    isScrolled ? "text-black" : "text-white"
                  }`}
                />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage src={authUser.userInfo?.image} />
                    <AvatarFallback className="bg-primary-600">
                      {authUser.userRole?.[0].toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <p
                    className={`hidden md:block ${
                      isScrolled ? "text-black" : "text-white"
                    }`}
                  >
                    {authUser.userInfo?.name}
                  </p>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white text-primary-700">
                  <DropdownMenuItem
                    onClick={() =>
                      router.push(
                        authUser.userRole?.toLowerCase() === "manager"
                          ? "/managers/properties"
                          : "/tenants/favorites"
                      )
                    }
                  >
                    Go to Dashboard
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={() =>
                      router.push(
                        `/${authUser.userRole?.toLowerCase()}s/settings`
                      )
                    }
                  >
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleSignOut}>
                    Sign out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <Link href="/signin">
                <Button
                  variant="outline"
                  className={`rounded-lg ${
                    isScrolled
                      ? "text-black border-black"
                      : "text-white border-white"
                  }`}
                >
                  Sign In
                </Button>
              </Link>
              <Link href="/signup">
                <Button className="bg-primary-600 text-white hover:bg-black rounded-lg">
                  Sign Up
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
