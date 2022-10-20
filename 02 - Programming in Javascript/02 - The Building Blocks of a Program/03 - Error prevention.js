function addTwoNums(a, b)
{
	try
	{
		if(typeof(a) == "number")
        {
            if(typeof(b) == "number")
            {
                console.log(a+b)
            }
            else
            {
                throw new ReferenceError("The second argument is not a number")
            }
        }
        else
        {
            throw new ReferenceError("The first argument is not a number")
        }
	}
	catch(err)
	{
		console.log(err)
	}
}

addTwoNums(5, "5")
console.log("It still works")