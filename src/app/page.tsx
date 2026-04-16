import HomeContent from '@/components/HomeContent';
import prisma from '@/lib/prisma';

export default async function Home() {
  let latestNews: { id: number; title: string }[] = [];
  try {
    latestNews = await prisma.news.findMany({
      orderBy: { createdAt: 'desc' },
      take: 8
    });
  } catch (error) {
    console.error("Prisma lookup failed, using fallback news:", error);
    latestNews = [
      { id: 1, title: "Provisional Population Totals of Census 2011 released" },
      { id: 2, title: "Directorate of Census Operations, Tripura - Official Portal launched" },
      { id: 3, title: "Interactive GIS Maps now available for all districts of Tripura" },
      { id: 4, title: "Census 2027 pre-census activities update from DCO Tripura" },
      { id: 5, title: "Civil Registration System (CRS) – New guidelines issued" },
      { id: 6, title: "Sample Registration System (SRS) data for Tripura published" },
      { id: 7, title: "House Listing Operations scheduled to commence shortly" },
      { id: 8, title: "Right to Information (RTI) disclosures updated for 2025" },
    ];
  }

  return (
    <HomeContent latestNews={latestNews} />
  );
}
