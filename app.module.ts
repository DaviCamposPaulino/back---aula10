import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Aluno } from './alunos/aluno.entity.js';
import { Espécie } from './Espécie/espécie.entity.js';
import { OrigemEspécies } from './OrigemEspécie/origemespécie.entity.js';
import { Pet } from './Pet/pet.entity.js';
import { Raça } from './raça/raça.entity.js';
import { Tutor } from './tutor/tutor.entity.js';

@Module({
imports: [
TypeOrmModule.forRoot({
type: 'mysql',
host: 'localhost',
port: 3306,
username: 'root',
password: '12345678',
database: 'clinica_veterinaria',
entities: [Aluno,Espécie,OrigemEspécies,Pet,Raça,Tutor],
synchronize: true,
logging: true,
}),
],
})
export class AppModule {}



