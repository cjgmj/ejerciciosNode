import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { MensajeDto } from './dto/mensaje-dto';

@Controller('mensajes')
export class MensajesController {
  @Post()
  create(@Body() createMensajeDto: MensajeDto) {
    return 'Mensaje creado';
  }

  @Get()
  getAll() {
    return 'Lista mensajes';
  }

  @Put(':id')
  update(@Body() updateMensajeDto: MensajeDto) {
    return 'Mensaje modificado';
  }

  @Delete(':id')
  delete() {
    return 'Mensaje eliminado';
  }
}
