import{
    Entity,
    PrimaryGeneratedColumn,
    Column
}from 'typeorm';

@Entity('tutores')
export class Tutor{

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ length:100})
    nome!:string;

    @Column({ type: 'int',unique:true })
    cpf!:number;

    @Column({ length:150, unique: true})
    email!:string;

    @Column({ type: 'int'})
    telefone!:number;

    @Column({ length:150})
    endereço!:string;

    @Column({ default:true})
    ativo!:boolean;

}