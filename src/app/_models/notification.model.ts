export class TribesNotification {
  title: string;
  type: string;
  startedAt: number;
  finishedAt: number;

  constructor(title: string, type: string, startedAt: number, finishedAt: number) {
    this.title = title;
    this.type = type;
    this.finishedAt = finishedAt;
    this.startedAt = startedAt;
  }
}
