//javascript code for creating a new tak set the task and delete the task
//intialize the count value
var count=0

//Adding the new task window
function addbuttonfunction(){

    //display the input container
    var inputwindowdisp=document.getElementById("inputwindow");
    inputwindowdisp.style.display="block";

    //add blur effect to demo tag
    var addblurefordemo=document.getElementById("demo");
    var addblurforfooter=document.getElementById("footerend");
    addblurefordemo.style.filter="blur(10px)"
    addblurforfooter.style.filter="blur(10px)"
}

//create the function for create the task
function createthetaskfunction(){
    var inputwindowdisp=document.getElementById("inputwindow");
    var addblurefordemo=document.getElementById("demo");
    var addblurforfooter=document.getElementById("footerend");
    inputwindowdisp.style.display="none"
    addblurefordemo.style.filter="none"
    addblurforfooter.style.filter="blur(0)";

    //the below code is to create the task management
    //code for append the div tag to  the  #demo
    var maindiv=document.getElementById("demo");

    //to create div tag and append the div tag
    var creatdiv=document.createElement("div");
    creatdiv.className="contentalignment";
    maindiv.append(creatdiv);

    //to create h1 and append h1
    var createh1=document.createElement("h1");
    var topicname=document.getElementById("tasknameinput").value;
    createh1.textContent=topicname;
    createh1.style.marginBottom="20px"
    creatdiv.append(createh1);

    //to create form to append the lable,textarea,input,button
    var formobj=document.createElement("form");
    creatdiv.append(formobj)

    //to creat lable
    var lableobj=document.createElement("label");
    lableobj.textContent="Description";
    formobj.append(lableobj);

    //to print the value from the textarea
    var contentvalueobj=document.createElement("textarea");
    var contentvalue=document.getElementById("Descriptionvalue").value;
    contentvalueobj.textContent=contentvalue;
    formobj.append(contentvalueobj);
    contentvalueobj.cols="30";
    contentvalueobj.rows="4";

    //to append the lable for date
    var datelableobj=document.createElement("label");
    datelableobj.textContent="Goal-time";
    formobj.append(datelableobj);

    //creatinput tag for goal time
   var createdateinput=document.createElement("input");
    createdateinput.type="date"
    var datevalue=document.querySelector(".timepad").value;
    createdateinput.value=datevalue;
    formobj.append(createdateinput);

    //increase the display size
    count=count+1;
    console.log(count)
    if(count%3==0){
        var val=count/3;
        var marginval=document.getElementById("sectionid");
        marginval.style.marginBottom=(val*400)+"px";
        var inputwindowposition=document.getElementById("inputwindow");
        inputwindowposition.style.top=(val*2*30);
    }

    //adding the button
    var createbuttonset=document.createElement("button");
    createbuttonset.innerText="Set";
    createbuttonset.className="setfun"
    createbuttonset.addEventListener('click',function(){
        alert("Succesfully set the "+topicname)
        createbuttonset.innerText="Accomplish"
        createbuttonset.style.padding="10px"
    
    })
    creatdiv.append(createbuttonset);

    
    //button for deleting the container
    var createbuttondel=document.createElement("button");
    createbuttondel.innerText="Delete";
    createbuttondel.className="delfun";
    createbuttondel.addEventListener('click',function(){
        createbuttondel.parentElement.remove();
        count=count-1;

    })
   
    creatdiv.append(createbuttondel);

}

//fuction  for delete the task
var delcont=document.querySelector(".delfun");

delcont.addEventListener('click',function(){
    deletefunction();
})

function deletefunction(){
    var container=delcont.parentNode;
    container.remove();
    count-=1;
}

function avoidrefersh(){
    event.preventDefault();
}