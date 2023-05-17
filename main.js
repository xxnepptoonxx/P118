quick_draw_data_set=["umbrella","apple","alarm clock","ball", "cookie"]

random_number = Math.floor((Math.random() * quick_draw_data_set.length) + 1);
sketch = quick_draw_data_set[random_number];
document.getElementById("sketch_name").innerHTML="sketch to be drawn= " + sketch

timer_counter = 0;
timer_check = "";
drawn_sketch = "";
answer_holder = "";
score = 0;

function setup() {
    canvas= createCanvas(200,200)
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
}

function preload() {

    classifier=ml5.imageClassifier('DoodleNet');
}
function clearCanvas() {
    background("white");
}

function draw()
{
    strokeWeight(13);
    stroke(0);
    if(mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}

function classifyCanvas()
{
    classifier.classify(canvas, gotResult);
}

function gotResult(error, results)
{
    if (error) {
        console.error(error);
    }
    console.log(results);
    document.getElementById('label').innerHTML = 'Label: ' + results[0].label;
    document.getElementById('confidence').innerHTML = 'Confidence: ' + Math.round(results[0].confidence * 100) + '%';

}