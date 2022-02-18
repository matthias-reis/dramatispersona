import { gaussTight } from './dice';

let lastId = -1;

export class Stone {
  id: number;
  constructor(
    public stamina: number = 10,
    public offense: number = 10,
    public defense: number = 10
  ) {
    this.id = ++lastId;
    lastId++;
    this.stamina = stamina;
    this.offense = offense;
    this.defense = defense;
  }
  incrementStamina() {
    this.stamina++;
  }
  incremenOffense() {
    this.offense++;
  }
  incrementDefense() {
    this.defense++;
  }

  /** a float that is about ten times as high as the offense value
   * represents the real offensive power brought to the playground field.
   *
   * Randomised by: gaussTight
   */
  get offensiveJuice() {
    return gaussTight(this.offense * 10);
  }

  /** a float that is about ten times as high as the offense value
   * represents the real offensive power brought to the playground field.
   *
   * Randomised by: gaussTight
   */
  get defensiveJuice() {
    return gaussTight(this.defense * 10);
  }
}
