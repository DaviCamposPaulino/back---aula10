import{
    Entity,
    PrimaryGeneratedColumn,
    Column
}from 'typeorm';

@Entity('origemEspécies')
export class OrigemEspécies{
    @PrimaryGeneratedColumn()
    id!:number;

    @Column({length:100})
    continente!:string;

    @Column({length:100})
    país!:string;

    @Column({length:100})
    regiao!:string;

    @Column({type:'text'})
    descrição!:string;

    @Column({default:true})
    ativa!:boolean;

}