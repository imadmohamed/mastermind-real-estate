

"use client";

import { CustomFormField } from "@/components/FormField";

import { Form } from "@/components/ui/form";
import { PropertyFormData, propertySchema } from "@/lib/schemas";
import { useCreatePropertyMutation, useGetAuthUserQuery } from "@/state/api";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";


const Mappointer = () => {
  const [createProperty] = useCreatePropertyMutation();
  const { data: authUser } = useGetAuthUserQuery();

  const form = useForm<PropertyFormData>({
    resolver: zodResolver(propertySchema),
    defaultValues: {
      name: "",
      description: "",
      pricePerMonth: 0,
      securityDeposit: 0,
      applicationFee: 0,
      isPetsAllowed: true,
      isParkingIncluded: true,
      photoUrls: [],
      amenities: "",
      highlights: "",
      beds: 0,
      baths: 0,
      squareFeet: 0,
      address: "",
      city: "",
      state: "",
      country: "",
      postalCode: "",
    },
  });

  const onSubmit = async (data: PropertyFormData) => {
    if (!authUser?.cognitoInfo?.userId) {
      throw new Error("No manager ID found");
    }

    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (key === "photoUrls") {
        const files = value as File[];
        files.forEach((file: File) => {
          formData.append("photos", file);
        });
      } else if (Array.isArray(value)) {
        formData.append(key, JSON.stringify(value));
      } else {
        formData.append(key, String(value));
      }
    });

    formData.append("managerCognitoId", authUser.cognitoInfo.userId);

    await createProperty(formData);
  };

  return (
    <div className="dashboard-container">
      
      <div className="bg-white rounded-xl p-6">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="p-4 space-y-10"
          >
           

            <hr className="my-6 border-gray-200" />

           
              
              <div className="flex justify-between gap-4">
                <CustomFormField 
                type="number"
                name="latitude" 
                label="Latitude" 
                placeholder="25.25809"
                className="w-full" />
                
                <CustomFormField
                  type="number"
                  name="longitude"
                  label="Longitude"
                  placeholder="55.30471"
                  className="w-full"
                />
              </div>
              <div className="flex justify-between gap-4">
                <CustomFormField 
                type="number"
                name="latitude" 
                label="Latitude" 
                placeholder="25.25809"
                className="w-full" />
                
                <CustomFormField
                  type="number"
                  name="longitude"
                  label="Longitude"
                  placeholder="55.30471"
                  className="w-full"
                />
              </div>
              
              <div className="flex justify-between gap-4">
                <CustomFormField 
                type="number"
                name="latitude" 
                label="Latitude" 
                placeholder="25.25809"
                className="w-full" />
                
                <CustomFormField
                  type="number"
                  name="longitude"
                  label="Longitude"
                  placeholder="55.30471"
                  className="w-full"
                />
              </div>
              
              <div className="flex justify-between gap-4">
                <CustomFormField 
                type="number"
                name="latitude" 
                label="Latitude" 
                placeholder="25.25809"
                className="w-full" />
                
                <CustomFormField
                  type="number"
                  name="longitude"
                  label="Longitude"
                  placeholder="55.30471"
                  className="w-full"
                />
              </div>
              
              <div className="flex justify-between gap-4">
                <CustomFormField 
                type="number"
                name="latitude" 
                label="Latitude" 
                placeholder="25.25809"
                className="w-full" />
                
                <CustomFormField
                  type="number"
                  name="longitude"
                  label="Longitude"
                  placeholder="55.30471"
                  className="w-full"
                />
              </div>
              
              <div className="flex justify-between gap-4">
                <CustomFormField 
                type="number"
                name="latitude" 
                label="Latitude" 
                placeholder="25.25809"
                className="w-full" />
                
                <CustomFormField
                  type="number"
                  name="longitude"
                  label="Longitude"
                  placeholder="55.30471"
                  className="w-full"
                />
              </div>
              
              <div className="flex justify-between gap-4">
                <CustomFormField 
                type="number"
                name="latitude" 
                label="Latitude" 
                placeholder="25.25809"
                className="w-full" />
                
                <CustomFormField
                  type="number"
                  name="longitude"
                  label="Longitude"
                  placeholder="55.30471"
                  className="w-full"
                />
              </div>
              
              <div className="flex justify-between gap-4">
                <CustomFormField 
                type="number"
                name="latitude" 
                label="Latitude" 
                placeholder="25.25809"
                className="w-full" />
                
                <CustomFormField
                  type="number"
                  name="longitude"
                  label="Longitude"
                  placeholder="55.30471"
                  className="w-full"
                />
              </div>
              
              <div className="flex justify-between gap-4">
                <CustomFormField 
                type="number"
                name="latitude" 
                label="Latitude" 
                placeholder="25.25809"
                className="w-full" />
                
                <CustomFormField
                  type="number"
                  name="longitude"
                  label="Longitude"
                  placeholder="55.30471"
                  className="w-full"
                />
              </div>
              
              <div className="flex justify-between gap-4">
                <CustomFormField 
                type="number"
                name="latitude" 
                label="Latitude" 
                placeholder="25.25809"
                className="w-full" />
                
                <CustomFormField
                  type="number"
                  name="longitude"
                  label="Longitude"
                  placeholder="55.30471"
                  className="w-full"
                />
              </div>
              
              <div className="flex justify-between gap-4">
                <CustomFormField 
                type="number"
                name="latitude" 
                label="Latitude" 
                placeholder="25.25809"
                className="w-full" />
                
                <CustomFormField
                  type="number"
                  name="longitude"
                  label="Longitude"
                  placeholder="55.30471"
                  className="w-full"
                />
              </div>
              
              <div className="flex justify-between gap-4">
                <CustomFormField 
                type="number"
                name="latitude" 
                label="Latitude" 
                placeholder="25.25809"
                className="w-full" />
                
                <CustomFormField
                  type="number"
                  name="longitude"
                  label="Longitude"
                  placeholder="55.30471"
                  className="w-full"
                />
              </div>
              
              <div className="flex justify-between gap-4">
                <CustomFormField 
                type="number"
                name="latitude" 
                label="Latitude" 
                placeholder="25.25809"
                className="w-full" />
                
                <CustomFormField
                  type="number"
                  name="longitude"
                  label="Longitude"
                  placeholder="55.30471"
                  className="w-full"
                />
              </div>
              
              <div className="flex justify-between gap-4">
                <CustomFormField 
                type="number"
                name="latitude" 
                label="Latitude" 
                placeholder="25.25809"
                className="w-full" />
                
                <CustomFormField
                  type="number"
                  name="longitude"
                  label="Longitude"
                  placeholder="55.30471"
                  className="w-full"
                />
              </div>
              
              <div className="flex justify-between gap-4">
                <CustomFormField 
                type="number"
                name="latitude" 
                label="Latitude" 
                placeholder="25.25809"
                className="w-full" />
                
                <CustomFormField
                  type="number"
                  name="longitude"
                  label="Longitude"
                  placeholder="55.30471"
                  className="w-full"
                />
              </div>
              
              <div className="flex justify-between gap-4">
                <CustomFormField 
                type="number"
                name="latitude" 
                label="Latitude" 
                placeholder="25.25809"
                className="w-full" />
                
                <CustomFormField
                  type="number"
                  name="longitude"
                  label="Longitude"
                  placeholder="55.30471"
                  className="w-full"
                />
              </div>
              
              <div className="flex justify-between gap-4">
                <CustomFormField 
                type="number"
                name="latitude" 
                label="Latitude" 
                placeholder="25.25809"
                className="w-full" />
                
                <CustomFormField
                  type="number"
                  name="longitude"
                  label="Longitude"
                  placeholder="55.30471"
                  className="w-full"
                />
              </div>
              
              <div className="flex justify-between gap-4">
                <CustomFormField 
                type="number"
                name="latitude" 
                label="Latitude" 
                placeholder="25.25809"
                className="w-full" />
                
                <CustomFormField
                  type="number"
                  name="longitude"
                  label="Longitude"
                  placeholder="55.30471"
                  className="w-full"
                />
              </div>
              
              <div className="flex justify-between gap-4">
                <CustomFormField 
                type="number"
                name="latitude" 
                label="Latitude" 
                placeholder="25.25809"
                className="w-full" />
                
                <CustomFormField
                  type="number"
                  name="longitude"
                  label="Longitude"
                  placeholder="55.30471"
                  className="w-full"
                />
              </div>
              
              <div className="flex justify-between gap-4">
                <CustomFormField 
                type="number"
                name="latitude" 
                label="Latitude" 
                placeholder="25.25809"
                className="w-full" />
                
                <CustomFormField
                  type="number"
                  name="longitude"
                  label="Longitude"
                  placeholder="55.30471"
                  className="w-full"
                />
              </div>
              
              
            <Button
              type="submit"
              className="bg-primary-700 text-white w-full mt-8"
            >
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Mappointer;


