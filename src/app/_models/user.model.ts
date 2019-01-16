export class User {
  userId: number;
  username: string;
  password: string;
  kingdomId: number;
  kingdomName: string;

  constructor(username: string,
              userID: number,
              password: string,
              kingdomName: string,
              kingdomId: number) {
    this.userId = userID;
    this.username = username;
    this.password = password;
    this.kingdomId = kingdomId;
    this.kingdomName = kingdomName;
  }
}
