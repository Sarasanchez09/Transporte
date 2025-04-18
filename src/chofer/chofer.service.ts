import { Injectable } from '@nestjs/common';
import { CreateChoferDto } from './dto/create-chofer.dto';
import { UpdateChoferDto } from './dto/update-chofer.dto';

@Injectable()
export class ChoferService {
  create(createChoferDto: CreateChoferDto) {
    return 'This action adds a new chofer';
  }

  findAll() {
    return `This action returns all chofer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chofer`;
  }

  update(id: number, updateChoferDto: UpdateChoferDto) {
    return `This action updates a #${id} chofer`;
  }

  remove(id: number) {
    return `This action removes a #${id} chofer`;
  }
}
