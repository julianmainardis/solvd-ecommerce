import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateExampleDto } from './dto/create-example.dto';
import { UpdateExampleDto } from './dto/update-example.dto';
import { Example } from './entities/example.entity';

@Injectable()
export class ExamplesService {
  constructor(
    @InjectRepository(Example)
    private examplesRepository: Repository<Example>,
  ) {}

  create(createExampleDto: CreateExampleDto) {
    return 'This action adds a new example';
  }

  findAll() {
    return this.examplesRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} example`;
  }

  update(id: number, updateExampleDto: UpdateExampleDto) {
    return `This action updates a #${id} example`;
  }

  remove(id: number) {
    return `This action removes a #${id} example`;
  }
}
