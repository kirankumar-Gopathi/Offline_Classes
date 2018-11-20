// Block scoping for FOR loop
for(var i=1; i<=10; i++){

}
console.log(i); // 11

//Block scoping for if Block
var dept1 = 'Engineering';
if(dept1 === 'Engineering'){
    var job1 = 'Software';
}
console.log(dept1); // Engineering
console.log(job1);

// Function Scoping
var dept2 = 'Medical';
function allocateJob() {
    if(dept2 === 'Medical'){
        var job2 = 'Doctor';
    }
}
console.log(dept2); // Medical
// console.log(job2); // RE: cannot Access

// IIFE example
dept2 = 'Medical';
(function() {
    if(dept2 === 'Medical'){
        var job2 = 'Doctor';
        console.log(job2);
    }
})();

// IIFE with Args
(function(name) {
    console.log('Good Morning ' + name);
})('John');

// Scopes Example
var a = 10;
function outerFn(){
    //var a = 20;
    function innerFn(){
        //var a = 30;
        console.log(a);
    }
    innerFn();
}
outerFn();

// Read and Write Operations for variables

// Implications of Read and Write Operations

