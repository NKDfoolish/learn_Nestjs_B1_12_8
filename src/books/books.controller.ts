import { Controller, Get, Param, Post, Delete } from '@nestjs/common';

@Controller('books')
export class BooksController {
  private books = [];

  @Get()
  getAllBooks(): string {
    return 'List all books';
  }

  @Get(':id')
  getBookById(@Param('id') id: string): string {
    return `Book information with id: ${id}`;
  }

  @Post()
  addBook(): string {
    return 'Add new book';
  }

  @Delete(':id')
  deleteBook(@Param('id') id: string): string {
    return `Deleted book with id: ${id}`;
  }
}
