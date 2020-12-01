import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Mensaje } from '../entity/mensaje.entity';
import { MensajeDto } from '../dto/mensaje-dto';

@Injectable()
export class MensajesService {
  constructor(
    @InjectRepository(Mensaje)
    private readonly mensajeRepository: Repository<Mensaje>,
  ) {}

  async getAll() {
    return await this.mensajeRepository.find();
  }

  async createMensaje(mensajeDto: MensajeDto) {
    const mensajeNuevo = new Mensaje();
    mensajeNuevo.nick = mensajeDto.nick;
    mensajeNuevo.mensaje = mensajeDto.mensaje;

    return await this.mensajeRepository.insert(mensajeNuevo);
  }

  async updateMensaje(idMensaje: number, mensajeDto: MensajeDto) {
    const mensajeDb: Mensaje = await this.mensajeRepository.findOne(idMensaje);

    mensajeDb.nick = mensajeDto.nick;
    mensajeDb.mensaje = mensajeDto.mensaje;

    return await this.mensajeRepository.insert(mensajeDb);
  }

  async deleteMensaje(idMensaje: number) {
    return await this.mensajeRepository.delete(idMensaje);
  }
}
