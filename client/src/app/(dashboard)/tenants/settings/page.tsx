"use client";

import SettingsForm from "@/components/SettingsForm";
import {
  useGetAuthUserQuery,
  useUpdateTenantSettingsMutation,
} from "@/state/api";
import React from "react";

const TenantSettings = () => {
  const { data: authUser, isLoading } = useGetAuthUserQuery();
  const [updateTenant] = useUpdateTenantSettingsMutation();

  if (isLoading) return <>Loading...</>;

  const initialData = {
    name: authUser?.userInfo.name,
    email: authUser?.userInfo.email,
    phoneNumber: authUser?.userInfo.phoneNumber,
  };

  const handleSubmit = async (data: typeof initialData) => {
    await updateTenant({
      cognitoId: authUser?.cognitoInfo?.userId,
      ...data,
    });
  };

  return (
    <SettingsForm
      initialData={initialData}
      onSubmit={handleSubmit}
      userType="tenant"
    />
  );
};

export default TenantSettings;

// "use client";

// import SettingsForm from "@/components/SettingsForm";
// import {
//   useGetAuthUserQuery,
//   useUpdateTenantSettingsMutation,
// } from "@/state/api";
// import React from "react";

// const TenantSettings = () => {
//   const { data: authUser, isLoading } = useGetAuthUserQuery();
//   const [updateTenant] = useUpdateTenantSettingsMutation();

//   if (isLoading) return <>Loading...</>;

//   // Safely access nested properties with proper fallbacks
//   const initialData = {
//     name: authUser?.userInfo?.name || "",
//     email: authUser?.userInfo?.email || "",
//     phoneNumber: authUser?.userInfo?.phoneNumber || "",
//   };

//   const handleSubmit = async (data: typeof initialData) => {
//     if (!authUser?.cognitoInfo?.userId) {
//       console.error("No user ID found");
//       return;
//     }
    
//     await updateTenant({
//       cognitoId: authUser.cognitoInfo.userId,
//       ...data,
//     });
//   };

//   return (
//     <SettingsForm
//       initialData={initialData}
//       onSubmit={handleSubmit}
//       userType="tenant"
//     />
//   );
// };

// export default TenantSettings;