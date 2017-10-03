# Drop it

A classic loop with if / else if statement.
if c is true and c +1 is false, then we know where we have to start slicing.

In case c is false, I count it (countFalse++)

After the looping, count all the falses. if countFalse === arr.length, then return an empty array.


My first intuition was different though.
with a loop, I deleted  c false and broke; if c+1 was true.
After the looping, I tried .filter(Boolean)
but this method counts 0 as falsy, so a result like "null, 1,0,1" became "1,1" while "1,0,1" was the expected answer.
