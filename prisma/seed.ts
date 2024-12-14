import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";
const prisma = new PrismaClient();

async function deleteAllData(fileNames: string[]){
  const modelNames = fileNames.map((file)=> {
    const modelName = path.basename(file, path.extname(file));
    return modelName.charAt(0).toUpperCase() + modelName.slice(1);
  });

  for (const modelName of modelNames){
    const model:any = prisma[modelName as keyof typeof prisma];
    try{
      await model.deleteMany({});
      console.log(`Cleared data from ${modelName}`);
    } catch (error) {
      console.log (`Error clearing data from ${modelName}:`, error )
    }
  }
}

async function main() {
  const dataDirectory = path.join(__dirname, "seedData")
  const fileNames = [
    "user.json",
    "appliedJob.json",
    "savedJob.json"
  ];

  await deleteAllData(fileNames);

  for (const file of fileNames){
    const filePath = path.join(dataDirectory, file);
    const jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    const modelName = path.basename(file, path.extname(file));
    const model:any = prisma[modelName as keyof typeof prisma];

    try{
      for (const data of jsonData){
        await model.create({data});
      }
      console.log(`Seeded ${modelName} with data from ${file}`)
    } catch (error){
      console.error(`Error seeding data for ${modelName}:`, error);
    }
  }
}

main()
.catch((e) => console.error(e))
.finally(async () => await prisma.$disconnect());