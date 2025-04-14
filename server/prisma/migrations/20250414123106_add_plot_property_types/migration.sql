-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "PropertyType" ADD VALUE 'Plote';
ALTER TYPE "PropertyType" ADD VALUE 'LuxuryVillaPlots';
ALTER TYPE "PropertyType" ADD VALUE 'ResidentialBuildingPlots';
ALTER TYPE "PropertyType" ADD VALUE 'CommercialBuildingPlots';
ALTER TYPE "PropertyType" ADD VALUE 'LaborCampsPlots';
ALTER TYPE "PropertyType" ADD VALUE 'WarehousePlots';
ALTER TYPE "PropertyType" ADD VALUE 'HotelPlots';
ALTER TYPE "PropertyType" ADD VALUE 'IndustrialPlots';
ALTER TYPE "PropertyType" ADD VALUE 'SchoolOrHospitalPlots';
ALTER TYPE "PropertyType" ADD VALUE 'OtherCommercialPlot';
ALTER TYPE "PropertyType" ADD VALUE 'Land';
