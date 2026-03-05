let transactions=[]

let sales=0
let expenses=0
let orders=0

const salesEl=document.getElementById("sales")
const expensesEl=document.getElementById("expenses")
const profitEl=document.getElementById("profit")
const ordersEl=document.getElementById("orders")
const table=document.getElementById("table")

const ctx=document.getElementById("chart")

const chart=new Chart(ctx,{

type:"bar",

data:{

labels:["Sales","Expenses"],

datasets:[{

label:"Restaurant Finance",

data:[0,0]

}]

}

})

document.getElementById("form").addEventListener("submit",function(e){

e.preventDefault()

const desc=document.getElementById("desc").value
const type=document.getElementById("type").value
const category=document.getElementById("category").value
const amount=parseFloat(document.getElementById("amount").value)

transactions.push({desc,type,category,amount})

updateDashboard()

})

function updateDashboard(){

sales=0
expenses=0
orders=0

table.innerHTML=""

transactions.forEach(t=>{

if(t.type==="sale"){

sales+=t.amount
orders++

}else{

expenses+=t.amount

}

table.innerHTML+=`
<tr>
<td>${t.desc}</td>
<td>${t.category}</td>
<td>₹${t.amount}</td>
</tr>
`

})

salesEl.innerText="₹"+sales
expensesEl.innerText="₹"+expenses
profitEl.innerText="₹"+(sales-expenses)
ordersEl.innerText=orders

chart.data.datasets[0].data=[sales,expenses]

chart.update()

}
