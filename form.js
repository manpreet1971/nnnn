class Form {

    constructor() {

    }

    display() {


        var title = createElement('h2');
        title.html('Car Racing Game');
        title.position(130, 0);

        var input = createInput("Name");
        input.position(130, 160);

        var button = createButton("Play");
        button.position(250, 200);

        button.mousePressed(function () {

            input.hide();
            button.hide();

            var name = input.value();

            var greetings = createElement('h3');
            greetings.html("Hello" + name);
            greetings.position(130, 160);



        });





    }











}