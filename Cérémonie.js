function Promotion(année){
    var img;
    if(année==2023){
        img = "Images/promotion 2023.jpg"
    }
    else if (année == 2022){
        img = "Images/promotion 2022.jpg"
    }
    else {
        img = "Images/promotion 2021.jpg"
    }
    document.getElementById("monImage"). src =img;
}