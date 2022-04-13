import Race from './Race';

export default class Elf extends Race {
  public maxLife: number;
  public static instancies = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLife = 99;
    Elf.instancies += 1;
  }

  static createdRacesInstances(): number { 
    return Elf.instancies;
  } 

  get maxLifePoints(): number {
    return this.maxLife;
  }
}