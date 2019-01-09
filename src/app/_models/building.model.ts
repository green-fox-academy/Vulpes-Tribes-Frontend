export class Building {
  id: number;
  type: string;
  level: number;
  hp: number;
  started_at: number;
  finished_at: number;


  constructor(id: number, type: string) {
    this.id = id;
    if (type === 'mine') {
      this.type = 'mine';
    } else if (type === 'factory') {
      this.type = 'factory';
    } else {
      this.type = 'academy';
    }
    this.level = 1;
    this.hp = 100;
    this.started_at = Date.now();
    this.finished_at = Date.now() + 1000;
  }
}
