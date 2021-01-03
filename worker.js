onmessage = function(e){
	let sum = 0;
	let result={i:0, sum:0};
	for(let i = 0; i< 100000000000000; i++){
		sum+=i;
		result.i=i;
		result.sum=sum;
		postMessage(result);
		console.log(sum);
		if(i== 999999999999999){
			self.close();
		}
	}
	
}