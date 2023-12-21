
   /*  document.getElementById("myButton").addEventListener("click", function () {
        alert("Button was clicked using addEventListener!");
    });

    document.getElementById("myButton1").onclick = function () {
        alert("Button 1 was clicked using 'onclick'!");
    };

    const button2 = document.getElementById("myButton2");

    button2.addEventListener("click", function () {
        alert("Button 2 was clicked with addEventListener (Listener 1)!");
    });
    button2.addEventListener("click", function () {
        alert("Button 2 was clicked with addEventListener (Listener 2)!");
    }); */



    document.getElementById('update1').addEventListener('click', function () {

        const Randomtext = document.getElementById('Randomtext');
        Randomtext.innerText = 'Text Changed by javascript event handler Function'

    })


    