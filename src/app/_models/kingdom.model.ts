export class Kingdom {
  id: number;
  name: string;
  userId: number;
  buildings: [
      {
        id: number,
        type: string,
        level: number,
        hp: number,
        started_at: number,
        finished_at: number,
      }
    ];
  resources: [
      {
        type: string,
        amount: number,
        generation: number,
      }
    ];
  troops: [
      {
        id: number,
        level: number,
        hp: number,
        attack: number,
        defence: number,
        started_at: number,
        finished_at: number,
      }
    ];
  location: {
    x: number,
    y: number,
  };
}
