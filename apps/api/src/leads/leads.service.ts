import { prisma } from "../../../../packages/database/client";

export class LeadsService {

    async create(data: any) {
        return prisma.lead.create({
            data
        });
    }

    async findAll() {
        return prisma.lead.findMany();
    }

}