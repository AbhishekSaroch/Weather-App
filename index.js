const temperature=document.querySelector(".weather1")
const cityField=document.querySelector(".weather2 p")
const date=document.querySelector(".weather2 span")
const emoji=document.querySelector(".weather3 img")
const weatherfield=document.querySelector(".weather3 span")
const searchField = document.querySelector(".searchField");
const form =document.querySelector("form")
form.addEventListener("submit",searchfield);

let target="canada";
const fetchdata =async(target)=>{
try {
    
    const url=`http://api.weatherapi.com/v1/current.json?key=f136033e9b524a3f85d100039231303&q=${target}`

    const response=await fetch(url);
    const data=await response.json();

    console.log(data);
    const{
        current:{temp_c,condition : {
            text,icon
        }},
        location:{name,localtime}
    }=data;

    updateDom(temp_c,name,icon,text,localtime);
} catch (error) {
    alert("Location Not Found")
}

}

function updateDom(temp,city,url,text,time){
    temperature.innerText=temp+"°";
    cityField.innerText=city;
    emoji.src=url;
    weatherfield.innerText=text;
    date.innerText=time
}
fetchdata(target);

function searchfield(e) {
    e.preventDefault();
  
    target= searchField.value;
  
    fetchdata(target);
  }
