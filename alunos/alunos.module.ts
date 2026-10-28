import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Aluno } from "./aluno.entity.js";
import { types } from "node:util";

@Module({
    imports: [
        TypeOrmModule.forFeature([Aluno])
    ]
})
export class AlunosModule {}