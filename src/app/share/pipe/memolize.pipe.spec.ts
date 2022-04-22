import { MemolizePipe } from './memolize.pipe';

describe('MemolizePipe', () => {
  it('create an instance', () => {
    const pipe = new MemolizePipe();
    expect(pipe).toBeTruthy();
  });
});
