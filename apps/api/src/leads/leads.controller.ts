import { Controller, Get, Post, Body } from '@nestjs/common';
import { LeadsService } from './leads.service';

@Controller('leads')
export class LeadsController {

    constructor(private service: LeadsService) { }

    @Post()
    create(@Body() body: any) {
        return this.service.create(body);
    }

    @Get()
    all() {
        return this.service.findAll();
    }
}