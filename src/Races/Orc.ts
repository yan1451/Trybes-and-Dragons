import Race from './Race';

export default class Orc extends Race {
  public maxLife: number;
  public static instancies = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLife = 74;
    Orc.instancies += 1;
  }

  static createdRacesInstances(): number { 
    return Orc.instancies;
  } 

  get maxLifePoints(): number {
    return this.maxLife;
  }
}