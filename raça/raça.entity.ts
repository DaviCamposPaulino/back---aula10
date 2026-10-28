import{
    Entity,
    PrimaryGeneratedColumn,
    Column
}from 'typeorm';

@Entity('raças')
export class Raça{
    @PrimaryGeneratedColumn()
    id!:number;

    @Column({length: 100})
    nome!:string;

    @Column({length:50})
    porte!:string;

    @Column({type:'text'})
    descrição!:string;

    @Column({type:'int'})
    expectativaVida!:number;

    @Column({ default:true})
    ativo!:boolean;
}
