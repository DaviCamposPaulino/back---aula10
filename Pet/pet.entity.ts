import{
    Entity,
    PrimaryGeneratedColumn,
    Column
}from 'typeorm';

@Entity('pets')
export class Pet{

    @PrimaryGeneratedColumn()
    id!:number;

    @Column({length:100})
    nome!:string;

    @Column({type:'date'})
    dataNascimento:Date;

    @Column({length:100})
    sexo!:string;

    @Column({type:'decimal'})
    peso!:number;

    @Column({length:100})
    cor!:string;

    @Column({ default:true})
    cadastrado!:boolean;

    @Column({ default:true})
    ativo!:boolean;

}