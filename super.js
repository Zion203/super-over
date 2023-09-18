var round = document.getElementsByClassName("round")
var button1 = document.getElementById("button1")
var scores=["w",1,2,3,4,5,6]
var runi = document.getElementById( "runi")
var wiki = document.getElementById("wikii")
var runp = document.getElementById( "runp")
var wikp = document.getElementById("wikp")
var j = 0
var runs = []
var ind = []
var pak = []
var count = 0
var wik = 0
var count1 = 0
var wik1 = 0
var m = 0
var runs1 = []
function score() {
    m=Math.floor(Math.random()*7)
    console.log(m)
    round[j].innerText=scores[m]
    if(j<6){
        ind.push(scores[m])
    }else{
        pak.push(scores[m])
    }
    j++
    if (j<=6){
        if (typeof ind[j-1] =="number"){
            count+=ind[j-1]
        }else{
            wik += 1
            if (wik==2){
                j=6
            }           
        }
    }else{
        if (typeof pak[j-7] =="number"){
            count1+=pak[j-7]
        }else{
            wik1 +=1
            if(wik1==2){
                j=12
            }
        }
    }
    if (j==12){
        if (count>count1){
            alert("india wins by "+(count-count1)+" runs")
        }else if (count==count1){
            alert("Draw match")
        }else{
            alert ("Pakistan Wins By "+(count1 - count)+" Runs ")
        }
    }    
}
function runss(){
    runi.textContent = count
    wiki.textContent = wik
    runp.textContent = count1
    wikp.textContent = wik1
}
button1.onclick = ()=>{
    score()
    runss()
}


