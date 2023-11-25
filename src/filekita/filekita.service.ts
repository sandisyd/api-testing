import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FileKita } from './filekita.entity';
import { Repository } from 'typeorm';
import { FileKitaDto } from './filekita.dto';

@Injectable()
export class FilekitaService {
  constructor(
    @InjectRepository(FileKita)
    private filekitaRepo: Repository<FileKita>,
  ) {}
  async getAll() {
    return await this.filekitaRepo.find();
  }

  async create(data: FileKitaDto) {
    const filek = await this.filekitaRepo.create(data);
    await this.filekitaRepo.save(filek);
    return filek;
  }
// get data by id
  async viewPerData(id) {
    return await this.filekitaRepo.findOne({ where: { id } });
  }

// update data
  async updateData(id: string, data: Partial<FileKitaDto>){
    await this.filekitaRepo.update({id: parseInt(id)}, data);
    return await this.filekitaRepo.findOne({where: {id: parseInt(id)}});
  }

//   Delete data
  async deleteData(id: string){
     await this.filekitaRepo.delete({id: parseInt(id)})
     return {deleted: true}
  }
}
