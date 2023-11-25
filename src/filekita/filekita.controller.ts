import { Body, Controller, Delete, Get, Param, Post, Put, Render, Res } from '@nestjs/common';
import { FilekitaService } from './filekita.service';
import { FileKitaDto } from './filekita.dto';
import { Response } from 'express';

@Controller('filekita')
export class FilekitaController {
    constructor(private fileKitaService: FilekitaService){}

    @Get('jsondata')
    async getAll(){
        const data = await this.fileKitaService.getAll()
        return {data}
    }

    @Post('tambah_data')
    async insert(@Body() data: FileKitaDto, @Res() res: Response){
        data.isPublik = Boolean(data.isPublik)
        await this.fileKitaService.create(data);
        return res.redirect('/filekita')
    }

    @Get('detail/:id')
    detailData(@Param('id') id : string){
        return this.fileKitaService.viewPerData(id);
    }

    // update
    @Put('update/:id')
    udpateData(@Param('id') id: string, @Body() data: Partial<FileKitaDto>){
        return this.fileKitaService.updateData(id,data)
    }

    // Delete
    @Delete('delete/:id')
    deleteData(@Param('id') id: string){
        return this.fileKitaService.deleteData(id)
    }

    // get data using hbs
    @Get()
    @Render('filekita/index')
    root(){
        return {message: 'Daftar Peserta', title: 'Index filekita' }
    }

    // tambah data using hbs
    @Get('tambah_data')
    @Render('filekita/tambah_data')
    addData(){
        return {message: 'Tambah Data', title: 'Form Tambah Data'}
    }
}
