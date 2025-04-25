"use client";

import { NAVBAR_HEIGHT } from "@/lib/constants";
import { useAppDispatch, useAppSelector } from "@/state/redux";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import FiltersBar from "./FiltersBar";
import FiltersFull from "./FiltersFull";
import { cleanParams } from "@/lib/utils";
import { setFilters } from "@/state";
import Listings from "./Listings";
import FooterSection from "../landing/FooterSection";

const SearchPage = () => {
  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();
  const isFiltersFullOpen = useAppSelector(
    (state) => state.global.isFiltersFullOpen
  );

  useEffect(() => {
    const initialFilters = Array.from(searchParams.entries()).reduce(
      (acc: any, [key, value]) => {
        if (key === "priceRange" || key === "squareFeet") {
          acc[key] = value.split(",").map((v) => (v === "" ? null : Number(v)));
        } else if (key === "coordinates") {
          acc[key] = value.split(",").map(Number);
        } else {
          acc[key] = value === "any" ? null : value;
        }
        return acc;
      },
      {}
    );

    const cleanedFilters = cleanParams(initialFilters);
    dispatch(setFilters(cleanedFilters));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      className="w-full mx-auto px-5"
      style={{
        height: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
      }}
    >
      <FiltersBar />

      <div
        className="grid gap-4 mb-5 transition-all duration-300"
        style={{
          gridTemplateColumns: isFiltersFullOpen ? "1fr 3fr" : "0fr 1fr",
          height: `calc(100% - 50px)`,
        }}
      >
        {/* Sidebar */}
        <div
          className={`overflow-auto transition-opacity duration-300 ${
            isFiltersFullOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <FiltersFull />
        </div>

        {/* Listings Grid */}
        <div className="overflow-y-auto p-2">
          <Listings />
        </div>
      </div>
      <FooterSection/>
    </div>
    
  );
};

export default SearchPage;
