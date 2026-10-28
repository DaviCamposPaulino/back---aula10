import{
    Entity,
    PrimaryGeneratedColumn,
    Column
}from 'typeorm';

@Entity('espécies')
export class Espécie{
    @PrimaryGeneratedColumn()
    id!:number;

    @Column({length:100})
    nomePopular!:string;

    @Column({length:100})
    nomeCientifico!:string;

    @Column({type:'text'})
    descrição!:string;

    @Column({default:true})
    domestico!:boolean;

    @Column({default:true})
    ativa!:boolean;
}