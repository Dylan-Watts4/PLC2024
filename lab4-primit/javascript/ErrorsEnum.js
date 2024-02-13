const prompt=require("prompt-sync")({sigint:true}); 

const Error_enumobj = {
	FP_ROUNDING: "FP_ROUNDING",
	FP_OVERFLOW: "FP_OVERFLOW",
	FP_UNDERFLOW: "FP_UNDERFLOW",
	INT_OVERFLOW: "INT_OVERFLOW"
}

const Result_enumobj = {
    A_BIT_DIFFERENT: "A_BIT_DIFFERENT", 
    INFINITY: "INFINITY", 
    ZERO: "ZERO", 
    VERY_DIFFERENT: "VERY_DIFFERENT"
}

// Add a new function that does the opposite of the Error2Result
function result2Error(result) {
	switch (result) {
		case Result_enumobj.A_BIT_DIFFERENT:
			return Error_enumobj.FP_ROUNDING;
			break;
		case Result_enumobj.INFINITY:
			return Error_enumobj.FP_OVERFLOW;
			break;
		case Result_enumobj.ZERO:
			return Error_enumobj.FP_UNDERFLOW;
			break;
		case Result_enumobj.VERY_DIFFERENT:
			return Error_enumobj.INT_OVERFLOW;
			break;
		default:
			return "Invalud Result Value";
	}
}

function error2Result(err){
    switch (err) {
	case Error_enumobj.FP_ROUNDING:
	 return Result_enumobj.A_BIT_DIFFERENT;
	break;
	case Error_enumobj.FP_OVERFLOW:
	    return Result_enumobj.INFINITY;
	break;
	case Error_enumobj.FP_UNDERFLOW:
	    return Result_enumobj.ZERO;
	break;
	case Error_enumobj.INT_OVERFLOW:
	    return Result_enumobj.VERY_DIFFERENT;
	break;
	default:
		return 'Invalid Error value';
}

}

// Change the Object.values to display the results
console.log('Error list: ', Object.values(Result_enumobj));
var validArg = false;
while(!validArg){
    var input = prompt("Input: ");
	// Asign the result variable to the return of the new function
    let result = result2Error(input);
    if (Object.values(Result_enumobj).includes(result)){
        validArg = true;
		console.log(input + " results in " + error2Result(input));
    }
    else{
        console.log(result);
    }
}
