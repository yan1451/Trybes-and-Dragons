import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  public static instancias = 0;
  private Energytype: EnergyType = 'stamina';

  constructor(name: string) {
    super(name);
    Warrior.instancias += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior.instancias;
  }

  get energyType(): EnergyType {
    return this.Energytype;
  }  
}