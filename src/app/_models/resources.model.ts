export class Resources {
  amount: number;
  type: string;
  generation: number;
  push: any;

constructor(amount: number, type: string, generation: number){
  this.amount = amount;
  this.generation = generation;
  this.type = type;
  }
}
