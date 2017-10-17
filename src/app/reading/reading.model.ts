export class Reading{
	public problem:string;
	public subject:string;
	public timestamp;
	public topConcern: string;
	public readingType: string;
	public username: string;
	public solution:string;

	constructor(problem:string, subject:string, timestamp, topConcern: string, readingType: string, username: string, solution: string){
		this.problem = problem;
		this.subject = subject;
		this.timestamp = timestamp;
		this.topConcern = topConcern;
		this.readingType = readingType;
		this.username = username;
		this.solution = solution;
	}
}