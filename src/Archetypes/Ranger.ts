import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  public static instancias = 0;
  private Energytype: EnergyType = 'stamina';

  constructor(name: string) {
    super(name);
    Ranger.instancias += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger.instancias;
  }

  get energyType(): EnergyType {
    return this.Energytype;
  }  
}