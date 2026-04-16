// Mock Prisma for emergency presentation fix
// The Prisma CLI is having issues generating on this environment.
// This mock allows the website to run without crashing and provides realistic data.

const prisma = {
  news: {
    findMany: async () => [
      { id: 1, title: "Provisional Population Totals of Census 2011" },
      { id: 2, title: "Directorate of Census Operations, Tripura - Official Portal" },
      { id: 3, title: "Interactive GIS Maps now available for all districts" },
      { id: 4, title: "Census 2021 pre-census activities update" },
      { id: 5, title: "District-wise literacy rate analysis released" }
    ],
  },
  document: {
    findMany: async () => [
      { id: 1, title: "Census 2011 Tripura Abstract", fileName: "tripura_abstract.pdf", type: "PDF" },
      { id: 2, title: "Administrative Atlas of Tripura", fileName: "atlas_tripura.pdf", type: "PDF" }
    ],
  },
  censusData: {
    findMany: async () => [
      { id: 1, district: "West Tripura", population: 917534, literacyRate: 91.31, sexRatio: 964 },
      { id: 2, district: "Khowai", population: 327564, literacyRate: 87.78, sexRatio: 961 },
      { id: 3, district: "Sepahijala", population: 483687, literacyRate: 84.14, sexRatio: 963 },
      { id: 4, district: "Gomati", population: 441538, literacyRate: 84.53, sexRatio: 959 },
      { id: 5, district: "South Tripura", population: 430751, literacyRate: 85.09, sexRatio: 957 },
      { id: 6, district: "Unakoti", population: 298574, literacyRate: 86.91, sexRatio: 967 },
      { id: 7, district: "North Tripura", population: 417441, literacyRate: 87.50, sexRatio: 968 },
      { id: 8, district: "Dhalai", population: 378230, literacyRate: 85.72, sexRatio: 944 }
    ],
  }
} as any;

export default prisma;
