const fs = require('fs');
const path = require('path');
// Get absolute path to dev.db in root
const dbPath = path.resolve('dev.db').replace(/\\/g, '/');
const url = `file:${dbPath}`;

const schema = `
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = "${url}"
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
`;

fs.writeFileSync('prisma/schema.prisma', schema.trim());
console.log('Schema written successfully with absolute path:', url);
