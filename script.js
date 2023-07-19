function addnewwork(){

    let newNode=document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('workField')
    newNode.classList.add("mt-2")
    newNode.setAttribute("placeholder","Enter here")
    newNode.setAttribute('rows',3)
    let weobj=document.getElementById("we");
    let WEaddbtn=document.getElementById("weaddbtn");
    weobj.insertBefore(newNode,WEaddbtn);
}

function addneweduq(){

    let newNode=document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('eduField')
    newNode.classList.add("mt-2")
    newNode.setAttribute("placeholder","Enter here")
    newNode.setAttribute('rows',3)
    let weobj=document.getElementById("eq");
    let WEaddbtn=document.getElementById("eqaddbtn");
    weobj.insertBefore(newNode,WEaddbtn);
}

//generate cv

function generateCV(){
    let name=document.getElementById('nameFF').value + " "+ document.getElementById('nameLF').value;
    let n1=document.getElementById('name1T')
    n1.innerHTML=name;
    document.getElementById('name2T').innerHTML=name;
    // direct generate
    document.getElementById('contactT').innerHTML=document.getElementById('contactF').value;
    document.getElementById('addressT').innerHTML=document.getElementById('addressF').value;
    document.getElementById('linkedT').innerHTML=document.getElementById('linkedF').value;
    document.getElementById('githubT').innerHTML=document.getElementById('gitF').value;
    document.getElementById('objT').innerHTML=document.getElementById('objF').value;
    //work
    let wes=document.getElementsByClassName('workField');
    let str=''
    for(let e of wes){
        str+=`<li>${e.value}</li>`;
    }
    document.getElementById('weT').innerHTML=str;
    //education
    let eqs=document.getElementsByClassName('eduField');
    let st=''
    for(let e of eqs){
        st+=`<li>${e.value}</li>`;
    }
    document.getElementById('eqT').innerHTML=st;
    //image
    let file=document.getElementById('mypic').files[0]
    console.log(file);
    let reader=new FileReader()
    reader.readAsDataURL(file);
    console.log(reader.result);
    //set the img
    reader.onloadend=function(){
        document.getElementById('picT').src=reader.result;
    }

    //
    document.getElementById('CVform').style.display='none'
    document.getElementById('CVoutput').style.display='block'
}

function printCV(){
    window.print();
}