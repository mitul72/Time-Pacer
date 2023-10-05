import Database from "tauri-plugin-sql-api";

class Connection {
  db!: Database;
  public constructor() {
    /** The path will be 'src-tauri/test.db', you can customize the path */
  }
  async init(){
    this.db = await Database.load('sqlite:test.db');
  }
  async create(day: string) {
    await this.db.execute('CREATE TABLE IF NOT EXISTS $1 (id INT PRIMARY KEY, time TEXT, task TEXT, star BOOL);', [day]);
  }
  async insert_values(day: string, id:Number, time: string, task:string, star:boolean){
    await this.db.execute('INSERT INTO $1 VALUES ($2, $3, $4, $5)', [day, id, time, task, star])
  }
  async update_value(day: string, id:Number, time: string, task:string, star:boolean) {
    /** batch execution SQL with params */
    await this.db.execute('UPDATE $1 set time=$2, task=$3, star=$4 where id=$5', [day, time, task, star, id])
  }

  async count_day(day: string) {
    /** select count */
    const rows = await this.db.select<Array<{ count: number }>>('SELECT COUNT(*) as count FROM $1', [day])
    return rows;
  }
  async select(day: string) {
    /** select with param */
    const rows = await this.db.select<Array<{ day: string, id:Number, time: string, task:string, star:boolean }>>('SELECT name FROM $1', [day])
    return rows;
  }
  async close() {
    /** close sqlite database */
    await this.db.close()
  }
}

export default Connection;