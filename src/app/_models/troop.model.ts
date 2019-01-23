export class Troop {
  id: number;
  level: number;
  hp: number;
  attack: number;
  defence: number;
  startedAt: number;
  finishedAt: number;

  constructor (id: number) {
    this.id = id;
    this.level = 1;
    this.hp = 1;
    this.attack = 1;
    this.defence = 1;
    this.startedAt = Date.now();
    this.finishedAt = Date.now() + 1000;
  }
}
