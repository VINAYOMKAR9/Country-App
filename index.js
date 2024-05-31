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



// function displayData(dataa){
//     let narr=dataa.data
//  contt.innerHTML = ""
//     narr.map((el)=>{
//      let div = document.createElement("div")
//      let country = document.createElement("h2")
//      country.textContent = `country:${el.country}`
//      let idtag = document.createElement("h3")
//      idtag.textContent = `id:${el.id}`
//      let rank = document.createElement("h4")
//      rank.textContent = `Rank:${el.Rank}`
//      let population = document.createElement("h5")
//      population.textContent = `population:${el.population}`

//      div.append(country,idtag,rank,population)
//      contt.append(div)
//     })
// }







// async function getdata(){
//     try {
//         let res = await fetch('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries')
//         let data = await res.json()
//         // console.log(data.data);
//         displayData(data.data)
        
//     } catch (error) {
//         console.log(error);
        
//     }
// }
// getdata()




//  let sorttag = document.getElementById("sortdata")
//  sorttag.addEventListener("change",function(){
//     let sortvalue = sorttag.value;
//     sortbypopulation("population", sortvalue)
   
//  })


// async function sortbypopulation(description,order){
//     try {
       
//         let resolve = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?sort=${description}&order=${order}`)
//         let data3 = await resolve.json()
//         displayData(data3.data)
//     } catch (error) {
//         console.log(error)
        
//     }
// }





// function displayData(dataa){
//  contt.innerHTML = ""
//     dataa.forEach((ele)=>{
//      let div = document.createElement("div")
//      let country = document.createElement("h4")
//      country.textContent = `country:${ele.country}`
//      let idtag = document.createElement("h5")
//      idtag.textContent = `id:${ele.id}`
//      let rank = document.createElement("p")
//      rank.textContent = `Rank:${ele.Rank}`
//      let population = document.createElement("p")
//      population.textContent = `population:${ele.population}`

//      div.append(country,idtag,rank,population)
//      contt.append(div)

//     })


// }



// // <select name="" id="select">
// <option value="">Sort By Population</option>
// <option value="asc">Asc</option>
// <option value="desc">Desc</option>

// </select>


// let select = document.querySelector('#select')
// select.addEventListener('change',()=>{
//     console.log(select.value);
//     async function getDataa(){
//         try{
//             let arr = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?sort=population&order=${select.value}`);
//             let data = await arr.json();
//             console.log(data.data);
//             let Narr = data.data

            
//         }
//         catch(err){
//             console.log('err in code...');
//         }
//     }
//     getDataa()
    

// })
// // 