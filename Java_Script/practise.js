function Fibonacci(){
    let num = prompt("Enter number");
    let n1=0, n2=1, add=1;
    let answer=[];
    answer.push(n1);
    answer.push(n2);

    for(let i=2;i<num;i++)
    {
        add=n1+n2;
        n1=n2;
        n2=add;
        answer.push(add);
    }
    document.getElementById("demo").innerHTML=answer;
}
