let uesrInput =document.getElementById("dat");
console.log(uesrInput);
const button = document.getElementById("calculate");
uesrInput.max = new Date().toISOString().split("T")[0];

button.addEventListener("click",() =>{
    getAge();
})
let result = document.getElementById("result");
function getAge(){
    let birth = new Date(uesrInput.value);
    // console.log(birth)

    let d1 = birth.getDate();
    let m1 = birth.getMonth();
    let y1 = birth.getFullYear();


    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth();
    let y2 = today.getFullYear();

    let d3,m3,y3;
    y3 = y2 - y1;

    if(m2 >= m1){
        m3 = m2 - m1;
    }
    else{
        y3--;
        m3 = 12 + m2- m1;
    }
    if(d2 >= d1){
        d3 = d2 - d1;
    }
    else{
        m3--;
        d3 = getDaysInmonth(y1,m1)+d2-d1;
    }
    if(m3 < 0){
        m3 = 11;
        y3--;
    }
    result.innerHTML = `You are <span>${y3}</span> years <span>${m3}</span> months and <span>${d3}</span> days old`;
}

function getDaysInmonth(year,month){
    return new Date(year,month,0).getDate();
}
// getAge();