import { Controller, Get, Param, Req } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get(':id')
  findOne(@Param('id') params: any): string {
    console.log('params :',params);
    return `This is a list of cats id ${params.id}`;
  }

  @Get()
  findAll(@Req() request: Request): string {
    console.log(request);
    return 'This action returns all cats';
  }
}
