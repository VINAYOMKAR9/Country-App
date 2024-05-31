let contt = document.querySelector('#cont')
async function getData(){
    try{
        let arr = await fetch('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries');
        let data = await arr.json();
        
        // console.log(data.data);
        console.log(data.data);
        
        displayData(data)
    }
    catch(err){
        console.log('err in code...');
    }
}
getData();



function displayData(dataa){
    let narr=dataa.data
    contt.innerHTML=""
   
    narr.map((ele)=>{
    // narr.forEach((ele)=>{
        let div= document.createElement('div');
        div.setAttribute('id','div')
        
        let con = document.createElement('h2');
        con.setAttribute('id','con')
        con.textContent=`country:${ele.country}`;
        let idtag = document.createElement('h4');
        idtag.setAttribute('id','idtag')
        idtag.textContent= `id:${ele.id}`;
        let rank= document.createElement('h4');
        rank.setAttribute('id',rank)
        rank.textContent= `Rank:${ele.Rank}`;
        let popu = document.createElement('h4');
        popu.setAttribute('id','popu')
        popu.textContent=`population:${ele.population}`;

        // console.log(con);
        div.append(con,idtag,rank,popu);
        contt.append(div);
    })
}


let select= document.querySelector('#sele')
select.addEventListener('change',()=>{
    let selectvalue=select.value;
    getDataSort(selectvalue)   
})
async function getDataSort(selectvalue){
    try{
        let arrsort = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?sort=population&order=${selectvalue}`);
        let dataSort = await arrsort.json();        
        displayData(dataSort)
    }
    catch(err){
        console.log('err in code...');
    }
}

