Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

    camera = document.getElementById("camera");

Webcam.attach( '#camera' );

function capture(){
    Webcam.snap(function(data_uri) {
        document.getElementById("resultado").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';

    });
}

console.log('versão ml5: ', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/vQ9wyRRjE/model.json',modelLoaded);

function modelLoaded() 
{
    console.log('Modelo Carregado!');
}

function indentify()
{
img = document.getElementById('captured_image');
classifier.classify(img, gotResult);
}

function gotResult(error, results) 
{
    if (error) 
    {
        console.error(error);
    } 
    else 
    {
        console.log(results);
        document.getElementById("name").innerHTML =  results[0].label;
        document.getElementById("precisao").innerHTML = results[0].confidence.toFixed(3);
        
    }
}