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

  async getAll(): Promise<Mensaje[]> {
    return await this.mensajeRepository.find();
  }

  async createMensaje(mensajeDto: MensajeDto): Promise<Mensaje> {
    const mensajeNuevo = new Mensaje();
    mensajeNuevo.nick = mensajeDto.nick;
    mensajeNuevo.mensaje = mensajeDto.mensaje;

    return await this.mensajeRepository.save(mensajeNuevo);
  }

  async updateMensaje(
    idMensaje: number,
    mensajeDto: MensajeDto,
  ): Promise<Mensaje> {
    const mensajeDb: Mensaje = await this.mensajeRepository.findOne(idMensaje);

    mensajeDb.nick = mensajeDto.nick;
    mensajeDb.mensaje = mensajeDto.mensaje;

    return await this.mensajeRepository.save(mensajeDb);
  }

  async deleteMensaje(idMensaje: number): Promise<void> {
    await this.mensajeRepository.delete(idMensaje);
  }
}
