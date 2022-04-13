import Race from './Race';

export default class Dwarf extends Race {
  protected maxLife: number;
  public static instancies = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLife = 80;
    Dwarf.instancies += 1;
  }

  static createdRacesInstances(): number { 
    console.log(Dwarf);
    return Dwarf.instancies;
  } 

  get maxLifePoints(): number {
    return this.maxLife;
  }
}
