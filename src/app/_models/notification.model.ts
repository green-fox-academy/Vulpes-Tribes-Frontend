export class TribesNotification {
  title: string;
  startedAt: number;
  finishedAt: number;

  constructor(title: string, startedAt: number, finishedAt: number) {
    this.title = title;
    this.finishedAt = finishedAt;
    this.startedAt = startedAt;
  }
}
