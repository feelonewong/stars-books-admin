import { Injectable } from '@nestjs/common';
import { CreateBookInput } from './dto/create-book.input';

@Injectable()
export class BooksService {
  create(createBookInput: CreateBookInput) {
    return [
      {
        exampleField: createBookInput,
      },
    ];
  }

  findAll() {
    // return `This action returns all books`;
    return [
      {
        exampleField: 1,
      },
      {
        exampleField: 2,
      },
      {
        exampleField: 3,
      },
      {
        exampleField: 4,
      },
      {
        exampleField: 5,
      },
    ];
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }
}
