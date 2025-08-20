
let grade
let list = storedList || []

    function calculateResult() {
    let score = document.getElementById("student-score").value 
    let name = document.getElementById('student-name').value 
       console.log(score, name);

       if (score <= 30){
        console.log("poor");
        grade = 'poor'
        
       } else if (score <= 40){
        console.log("fair");
        grade = 'fair'
       } else if (score <= 50) {
        console.log("good");
        grade = 'good'
       } else if (score <= 60) {
        console.log("very good");
        grade = "very good"
       } else if (score <= 100) {
        console.log("excellent");
        grade = "excellent"
       }

       let student = {
        name:name,
        grade:grade,
        score:score,
       }

       list.push(student)
       console.log(list);

       let storedListString = localStorage.getItem('list')
       console.log(storedListString);
       

       document.getElementById('body').innerHTML = ''

       let newList = JSON.stringify(list)

       
       console.log(storedList);

       newList = JSON.parse(list)



       
    

    // console.log(newList);
    // console.log(JSON.parse(newList));
    

    // store

    localStorage.setItem('list', newList)

    document.getElementById("body").innerHTML = " "


    // retrieve
    
    let storeListString = localStorage.getItem('list')

    console.log(storeListString);

    let storedList = JSON.parse(storeListString)
    
    console.log(storedList);

    // store
    newList = JSON.parse(list)

    localStorage.getItem()
    
       

      //  for(let i = 0; i < list.length; i++){
        
      //       document.getElementById('body').innerHTML += `<tr>
      //       <td>${list[i].name}</td>
      //       <td>
      //       <input type="number" value=${list[i].score} min="0" max="100" placeholder="Score">
      //       </td>
      //       <td>${list[i].grade}<td/>
      //     </tr>`
      //  }

       for (let i = 0; i < list.length; i++) {
      document.getElementById("body").innerHTML += `<tr>
      <td>${list[i].name} </td>
      <td>
      <input type="number" value=${list[i].score} min="0" max="100" placeholder="Score">
      </td>
      <td>${list[i].grade} </td>
       </tr>`
    }
    }
