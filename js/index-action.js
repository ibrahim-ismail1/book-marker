var Sname=document.getElementById('Bname')
var Surl=document.getElementById('Burl')
var s=document.getElementById('icon')
var ii=document.getElementById('Bname')
var s1=document.getElementById('icon1')
var ii1=document.getElementById('Burl')
var p1=document.getElementById('p1')
var p2=document.getElementById('p2')
var btn=document.getElementById('Cbtn')
var dialog1=document.getElementById('dialog1')



var SitesList=[]
if(localStorage.getItem('sites')!=null)
{
    SitesList=JSON.parse(localStorage.getItem('sites'))
    Display(SitesList)
}

function AddSite()
{ 
    if(vallidateName()==true)
    {
        var site={
            indeex:'',
            Name:Sname.value,
            Address:Surl.value
        }
        SitesList.push(site)
        clear()
        localStorage.setItem('sites',JSON.stringify(SitesList))
        
        Display(SitesList)
    }
   
    else{
       dialog1.show();
     btn.addEventListener('click',function(){
        dialog1.close()

     })
     dialog1.addEventListener('click',function(e){
     if(e.target.id=='dialog1')
     {
        dialog1.close()
     }
     })
    }
    clear()

}
 function Display(arr)
 {
    cartona=``
    for(var i=0;i<arr.length;i++)
    {
        cartona+=`<tr>
        <td>${i}</td>
        <td>${arr[i].Name}</td>
        <td><a href="${arr[i].Address}" target="_blank"><button class="btn btn-warning "><i class="fa-solid fa-eye pe-2"></i> Visit</button></a></td>
        <td><button class="btn btn-danger "onclick="Delete(${i})"><i class="fa-solid fa-trash-can"></i> Delete</button></td>
        
    </tr>`
    }
    document.getElementById('tbody').innerHTML=cartona
 }
function clear()
{
    Sname.value=''
    Surl.value=''
}
function Delete(index)
{
    SitesList.splice(index,1)
    localStorage.setItem('sites',JSON.stringify(SitesList))
    Display(SitesList)
}

   //for name
    // accpet all word chahracter in the start or end 
    // at least 3 charahcters
    // accpet spaces between
    // dosnt accept spaces in start or end
    var regexName=/^(\w)[\w\s]{2,}\S$/
    var regexURL=/^(https:)[a-z]{1,10}(\.com)$/i;
function vallidateName()
{   
 
    if(regexName.test(Sname.value)==true &&regexURL.test(Surl.value)==true)
    {
        return true;
    }
   
    else{
        return 'both is worng ';
    }
}
function vallidate(regexName,Sname,s,ii,p1)
{
  if(regexName.test(Sname.value)==false)
  {
    s.classList.replace('fa-check','fa-xmark')
    p1.classList.replace('ph','pv')
    if(s.classList.contains('right')==true)
    {
        s.classList.replace('right','worng')
        ii.classList.replace('right1','worng1')
    }
    else{
        s.classList.add('worng')
        ii.classList.add('worng1')
    }
  
  }
  else{
    
    s.classList.add('fa-check')
    s.classList.add('right')
    ii.classList.add('right1')
    p1.classList.add('ph')
    
  }
}

ii.addEventListener('input',function(){
    vallidate(regexName,Sname,s,ii,p1)
})


ii1.addEventListener('input',function(){
    vallidate(regexURL,Surl,s1,ii1,p2)
})

