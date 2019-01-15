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
        startedAt: number,
        finishedAt: number,
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
        startedAt: number,
        finishedAt: number,
      }
    ];
  location: {
    x: number,
    y: number,
  };
}
