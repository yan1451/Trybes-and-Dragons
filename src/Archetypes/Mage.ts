import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  public static instancias = 0;
  private Energytype: EnergyType = 'mana';

  constructor(name: string) {
    super(name);
    Mage.instancias += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage.instancias;
  }

  get energyType(): EnergyType {
    return this.Energytype;
  }  
}