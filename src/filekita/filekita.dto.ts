import { IsNotEmpty, IsOptional } from "class-validator";

export class FileKitaDto{
    @IsNotEmpty()
    nama: string;

    @IsNotEmpty()
    deskripsi: string;
    
    @IsOptional()
    isPublik: boolean;
}