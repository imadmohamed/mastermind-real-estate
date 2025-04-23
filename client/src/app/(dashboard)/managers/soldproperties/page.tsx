"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Loading from "@/components/Loading";
import { useGetAuthUserQuery } from "@/state/api";
import { useGetSoldPropertiesQuery, useAddSoldPropertyMutation } from "@/state/api/soldApi";
import { uploadToS3 } from "@/lib/s3";
import SoldPropertyForm from "@/components/ui/SoldPropertyForm";
import SoldPropertyCard from "@/components/ui/SoldPropertyCard";

export default function AdminSoldProperties() {
  const { data: authUser } = useGetAuthUserQuery();
  const { data: properties, isLoading, error } = useGetSoldPropertiesQuery();
  const [addProperty] = useAddSoldPropertyMutation();

  if (isLoading) return <Loading />;
  if (error) return <div>Error loading properties</div>;

  return (
    <div className="dashboard-container">
      <Header 
        title="Sold Properties Management" 
        subtitle="Add and manage sold properties" 
      />
      
      <SoldPropertyForm 
        onSubmit={async (formData) => {
          const imageUrl = await uploadToS3(formData.image);
          await addProperty({
            ...formData,
            price: Number(formData.price),
            imageUrl
          }).unwrap();
        }} 
      />
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties?.map((property) => (
          <SoldPropertyCard key={property.id} {...property} />
        ))}
      </div>
    </div>
  );
}