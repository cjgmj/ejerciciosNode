import { Mensaje } from './mensaje.entity';

describe('Mensaje', () => {
  it('should be defined', () => {
    expect(new Mensaje()).toBeDefined();
  });
});
