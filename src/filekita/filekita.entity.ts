import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class FileKita extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 255})
    nama: string;

    @Column('text')
    deskripsi: string;

    @Column()
    isPublik: boolean;
}