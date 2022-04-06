/* Given a time in

-hour AM/PM format, convert it to military (24-hour) time.
Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

Example
Return '12:01:00'.
Return '00:01:00'.

Function Description
Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.
timeConversion has the following parameter(s):
  string s: a time in 
   hour format

returns
  string: the time in 
   hour format
Input Format
A single string
that represents a time in -hour clock format (i.e.: or).

Constraints
    All input times are valid  */

function timeConversion(s) {
    // Write your code here
    s=s.split("");
    let output=[];
    let sLength=s.length-2;
    for (let i=0; i<sLength; i++){
        if (i===0){
            let sToI = (parseInt(s[0])+1);
            output.push(sToI.toString())}
        else if (i===1){
            let sToIi = (parseInt(s[1])+2);
            output.push(sToIi.toString())}
        else{output.push(s[i])}
    }
    return output.join("");

}
timeConversion(07:13:45PM)


output is supposed to be: 19:13:45
