export class Reading{
	public problem:string;
	public subject:string;
	public timestamp;
	public topConcern: string;
	public type: string;
	public username: string;
	public solution:string;

	constructor(problem:string, subject:string, timestamp, topConcern: string, type: string, username: string, solution: string){
		this.problem = problem;
		this.subject = subject;
		this.timestamp = timestamp;
		this.topConcern = topConcern;
		this.type = type;
		this.username = username;
		this.solution = solution;
	}
}