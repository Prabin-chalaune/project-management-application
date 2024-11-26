import { PrismaClient } from "@prisma/client";
import fs from "fs"
import path from "path"
const prisma = new PrismaClient();

async function deleteAllData(orderedFileNames:string[]) {
    const modelNames = orderedFileNames.map((fileName)=>{
        const modelName = path.basename(fileName, path.extname(fileName));
        return modelName.charAt(0).toUpperCase() + modelName.slice(1);
    })

    for (const modelName of modelNames) {
        const model: any = prisma[modelName as keyof typeof prisma];
        try{
            await model.deleteMany({})
            console.log(`Cleared data from ${modelName}`)

        }catch(error){
            console.log(`Error clearing data from ${modelName}:`,error)
        }
    }

}

async function  main() {
    const dataDirectory = path.join(__dirname,"seedData");

    const orderedFileNames = [
        "team.json",
        "project.json",
        "projectTeam.json",
        "user.json",
        "task.json",
        "attachment.json",
        "comment.json",
        "taskAssignment.json",
    ]

}