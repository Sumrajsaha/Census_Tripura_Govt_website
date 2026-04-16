$content = @"
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = "file:./dev.db"
}

model News {
  id        Int      @id @default(autoincrement())
  title     String
  content   String?
  createdAt DateTime @default(now())
}

model Document {
  id        Int      @id @default(autoincrement())
  title     String
  fileName  String
  type      String
}

model CensusData {
  id        Int      @id @default(autoincrement())
  district  String
  population Int
  literacyRate Float
  sexRatio   Int
}
"@

$content | Out-File -FilePath "prisma\schema.prisma" -Encoding ascii
npx prisma generate
