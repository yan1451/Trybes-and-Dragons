import Race from './Race';

export default class Halfling extends Race {
  public maxLife: number;
  public static instancies = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLife = 60;
    Halfling.instancies += 1;
  }

  static createdRacesInstances(): number { 
    return Halfling.instancies;
  } 

  get maxLifePoints(): number {
    return this.maxLife;
  }
}