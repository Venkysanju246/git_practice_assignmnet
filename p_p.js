	//checking for prime number

	let num = 8;
	let count = 0;

	for(let i =1; i<=num; i++){
   	 if(num%i==0){
   	 count++
    	}
	} 
	if(count==2){
       	console.log("Yes")
   	 }
	else {
      	  console.log("No")
   	 }


    	//checking for palindrome

    	let str = "madam"
    	let N = 5
    	let bag = ""
    	for(let i = N-1; i>=0;  i--){
        	bag+=(str[i])
    	}
    
   	 if(bag==str){
      	  console.log("Yes")
    	}else{
     	   console.log("No")
    	}