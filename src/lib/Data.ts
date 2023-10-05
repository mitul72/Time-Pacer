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
    try {
      await this.db.execute(`CREATE TABLE IF NOT EXISTS ${day} (id INT PRIMARY KEY, time TEXT, task TEXT, star BOOL)`);
  } catch (error) {
      console.error('Error creating table:', error);
  }
}
  async insert_values(day: string, id:Number, time: string, task:string, star:boolean){
    await this.db.execute(`INSERT INTO ${day} VALUES (${id}, '${time}', '${task}', ${star})`)
  }
  async update_value(day: string, id:Number, time: string, task:string, star:boolean) {
    /** batch execution SQL with params */
    await this.db.execute(`UPDATE ${day} set time='${time}', task='${task}', star=${star} where id=${id}`)
  }

  async count_day(day: string) {
    /** select count */
    const rows = await this.db.select<Array<{ count: number }>>(`SELECT COUNT(*) as count FROM ${day}`)
    return rows;
  }
  async select(day: string) {
    /** select with param */
    const rows = await this.db.select<Array<{ day: string, id:Number, time: string, task:string, star:boolean }>>(`SELECT * FROM ${day}`)
    return rows;
  }
  async close() {
    /** close sqlite database */
    await this.db.close()
  }
}

export default Connection;