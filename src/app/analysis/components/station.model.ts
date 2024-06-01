export class Station {
  TS:string;
  TV:number;
  Com:string;
  T:number;
  MTH:number;
  MTD:string;
  S:string;
  constructor(private TotalSales:string ,private TotalValue:number,private Compression:string,private Transaction:number,private MaxTransactionHour:number,private MaxTransactionDate:string,private Status:string) {
    this.TS = this.TotalSales;
    this.TV = this.TotalValue;
    this.Com = this.Compression;
    this.T =  this.Transaction;
    this.MTH= this.MaxTransactionHour;
    this.MTD= this.MaxTransactionDate;
    this.S=this.Status;
  }
}
