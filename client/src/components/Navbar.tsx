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

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useGetAuthUserQuery } from "@/state/api";
import { signOut } from "aws-amplify/auth";
import { AnimatePresence, motion } from "framer-motion";
import { NAVBAR_HEIGHT } from "@/lib/constants";
import {
  Bell,
  ChevronDown,
  MessageCircle,
  Plus,
  Search,
  Menu,
  X,
} from "lucide-react";

import { Button } from "./ui/button";
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
  const [menuOpen, setMenuOpen] = useState(false);

  const isDashboardPage =
    pathname.includes("/managers") || pathname.includes("/tenants");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSignOut = async () => {
    await signOut();
    window.location.href = "/";
  };

  const navTextColor = isScrolled
    ? "text-black hover:text-primary-500"
    : "text-white hover:text-primary-300";
  const navLinkClass = `text-lg font-medium transition-colors ${navTextColor}`;
  const dropdownTriggerClass = `flex items-center gap-1 text-lg font-medium transition-colors ${navTextColor}`;
  const iconColorClass = isScrolled ? "text-black" : "text-white";

  return (
    // <div
    //   className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
    //     isScrolled ? "bg-white shadow-md py-1" : "bg-transparent py-3"
    //   }`}
    //   style={{ height: `${NAVBAR_HEIGHT}px` }}
    // >
    //   <div className="flex justify-between items-center w-full px-4">
    //     {/* Logo & Sidebar */}
    //     <div className="flex items-center gap-4">
    //       {isDashboardPage && <SidebarTrigger className="md:hidden" />}
    //       <Link href="/" scroll={false}>
    //         <Image
    //           src={isScrolled ? "/logo.svg" : "/logo1.svg"}
    //           alt="Logo"
    //           width={isScrolled ? 140 : 200}
    //           height={isScrolled ? 140 : 200}
    //           className="transition-all duration-300"
    //         />
    //       </Link>
    //     </div>

    <div
  className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 text-black ${
    isScrolled ? "bg-white shadow-md py-1" : "bg-transparent py-3"
  }`}
  style={{ height: `${NAVBAR_HEIGHT}px` }}
>
  <div className="flex justify-between items-center w-full px-4 text-black"> {/* Added text-black here too */}
    {/* Logo & Sidebar */}
    <div className="flex items-center gap-4 text-black"> {/* And here */}
      {isDashboardPage && <SidebarTrigger className="md:hidden text-black" />} {/* And here if needed */}
      <Link href="/" scroll={false} className="text-black"> {/* Important for Link elements */}
        <Image
          src={isScrolled || pathname === "/search" ? "/logo.svg" : "/logo1.svg"}
          alt="Logo"
          width={isScrolled || pathname === "/search" ? 140 : 200}
          height={isScrolled || pathname === "/search" ? 140 : 200}
          className="transition-all duration-300"
        />
      </Link>
    </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 items-center">
        <Link href="/" className={navLinkClass}>HOME</Link>

          <Link href="/about" className={navLinkClass}>ABOUT</Link>
          <Link href="/soldproperties" className={navLinkClass}>SOLD PROPERTIES</Link>

         {/* <DropdownMenu>
            <DropdownMenuTrigger className={dropdownTriggerClass}>
              OFF PLAN PROJECTS<ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white text-primary-700 min-w-[200px]">
              {["apartment", "villa", "townhouse", "land"].map((type) => (
                <DropdownMenuItem asChild key={type}>
                  <Link href={`/off-plan/${type}`}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>  */}

          <DropdownMenu>
            <DropdownMenuTrigger className={dropdownTriggerClass}>
            OFF PLAN PROJECTS <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white text-primary-700 min-w-[200px]">
              <DropdownMenuItem asChild>
                <Link href="/search?location=Dubai&propertyType=Apartment&coordinates=55.2708%2C25.2048">Apartment</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/search?location=Dubai&propertyType=Villa&coordinates=55.2708%2C25.2048">Villa</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/search?location=Dubai&propertyType=Townhouse&coordinates=55.2708%2C25.2048">Townhouse</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/search?location=Dubai&propertyType=Land&coordinates=55.2708%2C25.2048">Land</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className={dropdownTriggerClass}>
              RESIDENTIAL PLOTS <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white text-primary-700 min-w-[200px]">
              <DropdownMenuItem asChild>
                <Link href="/search?location=Dubai&propertyType=LuxuryVillaPlots&coordinates=55.2708%2C25.2048">Luxury Villa Plot</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/search?location=Dubai&propertyType=ResidentialBuildingPlots&coordinates=55.2708%2C25.2048">Residential Building Plots</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* <DropdownMenu>
            <DropdownMenuTrigger className={dropdownTriggerClass}>
              COMMERCIAL PLOTS <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white text-primary-700 min-w-[200px]">
              {[
                "building",
                "labor-camps",
                "warehouse",
                "hotel",
                "industrial",
                "school-hospital",
                "other",
              ].map((type) => (
                <DropdownMenuItem asChild key={type}>
                  <Link href={`/commercial/${type}`}>
                    {type.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu> */}

          <DropdownMenu>
            <DropdownMenuTrigger className={dropdownTriggerClass}>
            COMMERCIAL PLOTS <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white text-primary-700 min-w-[200px]">
              <DropdownMenuItem asChild>
                <Link href="/search?location=Dubai&propertyType=CommercialBuildingPlots&coordinates=55.2708%2C25.2048">Commercial Building Plots</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/search?location=Dubai&propertyType=LaborCampsPlots&coordinates=55.2708%2C25.2048">Labor Camps Plots</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/search?location=Dubai&propertyType=WarehousePlots&coordinates=55.2708%2C25.2048">Warehouse Plots</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/search?location=Dubai&propertyType=HotelPlots&coordinates=55.2708%2C25.2048">Hotel Plots</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/search?location=Dubai&propertyType=IndustrialPlots&coordinates=55.2708%2C25.2048">Industrial Plots</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/search?location=Dubai&propertyType=SchoolOrHospitalPlots&coordinates=55.2708%2C25.2048">School / Hospital Plot</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/search?location=Dubai&propertyType=OtherCommercialPlot&coordinates=55.2708%2C25.2048">Other Commercial Plot</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>


          {/* <DropdownMenu>
            <DropdownMenuTrigger className={dropdownTriggerClass}>
              MAPS <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white text-primary-700 min-w-[200px]">
              <DropdownMenuItem asChild>
                <Link href="/map">Map View</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/search">Our Properties</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}
          <Link href="/map" className={navLinkClass}>MAP VIEW</Link>


          <Link href="/contact" className={navLinkClass}>CONTACT</Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {authUser ? (
            <>
              {isDashboardPage && (
                <Button
                  variant="secondary"
                  className="bg-primary-50 text-primary-700 hover:bg-secondary-500 hover:text-white"
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
                      <span className="ml-2 hidden md:block">Add Property</span>
                    </>
                  ) : (
                    <>
                      <Search className="h-4 w-4" />
                      <span className="ml-2 hidden md:block">Search</span>
                    </>
                  )}
                </Button>
              )}
              <MessageCircle className={`hidden md:block w-6 h-6 cursor-pointer ${iconColorClass}`} />
              <Bell className={`hidden md:block w-6 h-6 cursor-pointer ${iconColorClass}`} />
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage src={authUser.userInfo?.image} />
                    <AvatarFallback>{authUser.userRole?.[0].toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <p className={`hidden md:block font-medium ${iconColorClass}`}>
                    {authUser.userInfo?.name}
                  </p>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white text-primary-700">
                  <DropdownMenuItem onClick={() =>
                    router.push(authUser.userRole?.toLowerCase() === "manager"
                      ? "/managers/properties"
                      : "/tenants/favorites"
                    )}>
                    Go to Dashboard
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() =>
                    router.push(`/${authUser.userRole?.toLowerCase()}s/settings`)
                  }>
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleSignOut}>Sign out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <Link href="/signin">
                <Button variant="outline" className={`border ${iconColorClass}`}>Sign In</Button>
              </Link>
              <Link href="/signup">
                <Button variant="secondary" className="bg-black text-white">Sign Up</Button>
              </Link>
            </>
          )}

          {/* Mobile menu toggle */}
          <button className="md:hidden z-[60]" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <X className={`w-6 h-6 ${iconColorClass}`} />
            ) : (
              <Menu className={`w-6 h-6 ${iconColorClass}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu with AnimatePresence */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Slide-in Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white text-black z-50 px-6 py-8 shadow-lg overflow-y-auto"
            >
              <div className="flex justify-end mb-4">
                <X className="h-6 w-6 cursor-pointer" onClick={() => setMenuOpen(false)} />
              </div>

              <Link href="/about" onClick={() => setMenuOpen(false)} className="block text-base font-semibold mb-4">About</Link>
              <Link href="/soldproperties" onClick={() => setMenuOpen(false)} className="block text-base font-semibold mb-4">Sold Products</Link>

               {/* <details className="group mb-4">
                <summary className="flex justify-between items-center font-semibold cursor-pointer">
                  Off Plan Projects
                  <ChevronDown className="h-4 w-4 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="ml-4 mt-2 flex flex-col gap-2 text-sm text-gray-700">
                  {["apartment", "villa", "townhouse", "land"].map((type) => (
                    <Link key={type} href={`${type}`} onClick={() => setMenuOpen(false)} className="hover:text-primary-500">
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </Link>
                  ))}
                </div>
              </details>  */}

<DropdownMenu>
  <DropdownMenuTrigger className="flex justify-between items-center font-semibold cursor-pointer">
    Off Plan Projects
    <ChevronDown className="h-4 w-4 group-open:rotate-180 transition-transform" />
  </DropdownMenuTrigger>
  <DropdownMenuContent className="ml-4 mt-2 flex flex-col gap-2 text-sm text-gray-700 bg-white p-2 min-w-[200px]">
  <DropdownMenuItem asChild>
                <Link href="/search?location=Dubai&propertyType=Apartment&coordinates=55.2708%2C25.2048">Apartment</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/search?location=Dubai&propertyType=Villa&coordinates=55.2708%2C25.2048">Villa</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/search?location=Dubai&propertyType=Townhouse&coordinates=55.2708%2C25.2048">Townhouse</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/search?location=Dubai&propertyType=Land&coordinates=55.2708%2C25.2048">Land</Link>
              </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
              

<DropdownMenu>
  <DropdownMenuTrigger className="flex justify-between items-center font-semibold cursor-pointer">
    Residential Plots
    <ChevronDown className="h-4 w-4 group-open:rotate-180 transition-transform" />
  </DropdownMenuTrigger>
  <DropdownMenuContent className="ml-4 mt-2 flex flex-col gap-2 text-sm text-gray-700 bg-white p-2 min-w-[200px]">
  <DropdownMenuItem asChild>
                <Link href="/search?location=Dubai&propertyType=LuxuryVillaPlots&coordinates=55.2708%2C25.2048">Luxury Villa Plots</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/search?location=Dubai&propertyType=ResidentialBuildingPlots&coordinates=55.2708%2C25.2048">Residential Building Plots</Link>
              </DropdownMenuItem>
              
  </DropdownMenuContent>
</DropdownMenu>

<DropdownMenu>
  <DropdownMenuTrigger className="flex justify-between items-center font-semibold cursor-pointer">
  Commercial Plots    <ChevronDown className="h-4 w-4 group-open:rotate-180 transition-transform" />
  </DropdownMenuTrigger>
  <DropdownMenuContent className="ml-4 mt-2 flex flex-col gap-2 text-sm text-gray-700 bg-white p-2 min-w-[200px]">
  <DropdownMenuItem asChild>
                <Link href="/search?location=Dubai&propertyType=CommercialBuildingPlots&coordinates=55.2708%2C25.2048">Commercial Building Plots</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/search?location=Dubai&propertyType=LaborCampsPlots&coordinates=55.2708%2C25.2048">Labor Camps Plots</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/search?location=Dubai&propertyType=WarehousePlots&coordinates=55.2708%2C25.2048">Warehouse Plots</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/search?location=Dubai&propertyType=HotelPlots&coordinates=55.2708%2C25.2048">Hotel Plots</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/search?location=Dubai&propertyType=IndustrialPlots&coordinates=55.2708%2C25.2048">Industrial Plots</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/search?location=Dubai&propertyType=SchoolOrHospitalPlots&coordinates=55.2708%2C25.2048">School / Hospital Plots</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/search?location=Dubai&propertyType=OtherCommercialPlot&coordinates=55.2708%2C25.2048">Other Commercial Plot</Link>
              </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

              <Link href="/map" onClick={() => setMenuOpen(false)} className="block text-base font-semibold mb-4">Map</Link>
              <Link href="/contact" onClick={() => setMenuOpen(false)} className="block text-base font-semibold mb-4">Contact</Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
