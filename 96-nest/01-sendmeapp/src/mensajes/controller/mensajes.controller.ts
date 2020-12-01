import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { MensajeDto } from '../dto/mensaje-dto';
import { MensajesService } from '../service/mensajes.service';

@Controller('mensajes')
export class MensajesController {
  constructor(private readonly mensajesService: MensajesService) {}

  @Post()
  create(@Body() createMensajeDto: MensajeDto, @Res() response) {
    this.mensajesService
      .createMensaje(createMensajeDto)
      .then((resp) => response.status(HttpStatus.CREATED).json(resp))
      .catch(() =>
        response.status(HttpStatus.FORBIDDEN).json({
          mensaje: 'Error en la creación del mensaje',
        }),
      );
  }

  @Get()
  getAll(@Res() response) {
    this.mensajesService
      .getAll()
      .then((resp) => response.status(HttpStatus.OK).json(resp))
      .catch(() =>
        response.status(HttpStatus.FORBIDDEN).json({
          mensaje: 'Error en la obtención los mensajes',
        }),
      );
  }

  @Put(':id')
  update(
    @Param('id') idMensaje: number,
    @Body() updateMensajeDto: MensajeDto,
    @Res() response,
  ) {
    this.mensajesService
      .updateMensaje(idMensaje, updateMensajeDto)
      .then((resp) => response.status(HttpStatus.OK).json(resp))
      .catch(() =>
        response.status(HttpStatus.FORBIDDEN).json({
          mensaje: 'Error en la modificación del mensaje',
        }),
      );
  }

  @Delete(':id')
  delete(@Param('id') idMensaje: number, @Res() response) {
    this.mensajesService
      .deleteMensaje(idMensaje)
      .then(() => response.status(HttpStatus.NO_CONTENT).json())
      .catch(() =>
        response.status(HttpStatus.FORBIDDEN).json({
          mensaje: 'Error en la eliminación del mensaje',
        }),
      );
  }
}
