function letterFinder(word, match)
{
    condition1 = typeof(word) == "string" && word.length >= 2;
    condition2 = typeof(match) == "string" && match.length == 1;

    try
    {
        if(condition1 && condition2)
        {
            for(i = 0; i < word.length; i++)
            {
                if(word[i] == match)
                {
                    console.log("Found the", match, "at", i);
                }
                else
                {
                    console.log("---No match found at", i);
                }
            }
        }
        else
        {
            throw new ReferenceError("Please pass correct arguments to the function");
        }
    }
    catch(err)
    {
        console.log(err);
    }
}

letterFinder("cat", "c");
letterFinder("a", "a");
letterFinder("math", "at");