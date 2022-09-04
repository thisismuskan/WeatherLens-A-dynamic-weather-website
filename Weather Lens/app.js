const APIs = {
    weatherKey: "16c618e4dad2979ef4e01d0a51e941ac"
}

const searchInputBox = document.getElementById("input-box");

// Event listener function on keypress
searchInputBox.addEventListener("keypress" , (event) => {

    if(event.keyCode == 13) {                                         //keycode for enter key = 13
        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
        //getCityPicture(searchInputBox.value);
        document.querySelector(".weather-body").style.display = "block";
    }

});

//Get weather report
function getWeatherReport(city) {

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIs.weatherKey}&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(showWeatherReport);

}

//Show weather report
function showWeatherReport(weather) {

    console.log(weather);
    document.getElementById("city").innerText = `${weather.name}`;
    document.getElementById("country").innerText = `${weather.sys.country}`;
    document.getElementById("temperature").innerHTML = `${Math.round(weather.main.temp)}&deg;C`;
    document.getElementById("min-temp").innerHTML = `${weather.main.temp_min}&deg;C`;
    document.getElementById("max-temp").innerHTML = `${weather.main.temp_max}&deg;C`;
    document.getElementById("weather-status").innerText = `${weather.weather[0].main}`;

    let icon = weather.weather[0].icon;
    let iconurl = "http://openweathermap.org/img/w/" + icon + ".png";
    document.getElementById("icon").setAttribute("src", iconurl);

    let date = document.getElementById("date");
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);

    if(weather-status.textContent == 'Clear'){
      document.body.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSANrvvNeV5H00kU6M8zhmxm0oy-74YbkZvjfR_DNinGn_-GcRo5e85NekoPiIFR5LeGpU&usqp=CAU ')";

    }else if(weather-status.textContent == 'Clouds'){
      document.body.style.backgroundImage = "url('https://www.vernonmorningstar.com/wp-content/uploads/2019/09/18730383_web1_clouds-1571778_1920.jpg')";

    }else if(weather-status.textContent == 'Haze'){
      document.body.style.backgroundImage = "url('https://assets.telegraphindia.com/telegraph/2021/Oct/1635248596_26jamweather-1-1.jpg')";

    }else if(weather-status.textContent == 'Rain'){
      document.body.style.backgroundImage = "url('https://miro.medium.com/max/900/1*FJzTpQjyQbjF3xCy3UdmfA.png')";

    }else if(weather-status.textContent == 'Snow'){
      document.body.style.backgroundImage = "url('https://www.gannett-cdn.com/presto/2020/01/07/PPYD/970607eb-0e64-48a6-b246-dff210214ce6-200107_BK_snow_art_1.jpg')";

    }else if(weather-status.textContent == 'Thunderstorm'){
      document.body.style.backgroundImage = "url('https://images.hindustantimes.com/img/2021/06/16/550x309/9466e14c-ce4d-11eb-bff4-4a0252eebc23_1623812647983.jpg')";
    }

}

//Date manage
function dateManage(dateArg) {

    let days = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"];
    let months = ["January" , "February" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"];

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return `${day} ${month} ${date}, ${year}`;
}
