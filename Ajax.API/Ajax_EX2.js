/********Adding Users******/

let i = 0
function addingFunc() {
$.ajax({
        url: "https://randomuser.me/api",
        success: result => {
            document.getElementById('first_name'+i).innerHTML = result.results[0].name.first
            document.getElementById('last'+i).innerHTML = result.results[0].name.last
            document.getElementById('adress'+i).innerHTML = result.results[0].location.country
            document.getElementById('age'+i).innerHTML = result.results[0].dob.age +' years old'
            document.getElementById('gender'+i).innerHTML = result.results[0].gender  
            i++
        }
    }) 
    try{
        if(i == 10){
            throw 'Max is 10 Users'
        }
    }
    catch(err){
        console.error(err)
    }
};


/********Removing Users******/
 
let table = document.querySelector('table');
let rows = document.querySelectorAll('tr');


function removingFunc(){
table.deleteRow(rows.length - 1);
}

