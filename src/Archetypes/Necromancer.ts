import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  public static instancias = 0;
  private Energytype: EnergyType = 'mana';

  constructor(name: string) {
    super(name);
    Necromancer.instancias += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.instancias;
  }

  get energyType(): EnergyType {
    return this.Energytype;
  }  
}