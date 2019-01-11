export class Troop {
  id: number;
  level: number;
  hp: number;
  attack: number;
  defence: number;
  started_at: number;
  finished_at: number;

  constructor (id: number) {
    this.id = id;
    this.level = 1;
    this.hp = 1;
    this.attack = 1;
    this.defence = 1;
    this.started_at = Date.now();
    this.finished_at = Date.now() + 1000;
  }
}
