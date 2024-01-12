let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');
let picp1 = document.getElementById('picp1');
let picp2 = document.getElementById('picp2');
let two
let one
let firstnum
let secnum
let firstpic
let secpic


startgame = () => {
    document.getElementById('hid').style.display = 'none';
    // document.getElementById('fullscreen-container').style.display = 'none';
    document.getElementById('numbergame').style.display = "flex";

    let randomNum = Math.floor(Math.random() * 2) + 1;

    if (randomNum == 1) {
        p1.style.color = 'red';
        p2.style.color = "black"
        p1.style.boxShadow = "0 0 20px 5px red";
        alert("player 1's turn")

    }
    if (randomNum == 2) {
        p2.style.color = 'red';
        p1.style.color = 'black';
        p2.style.boxShadow = "0 0 20px 5px red";
        alert("player 2's turn")

    }

    check = (num) => {
        let Totalpoint1 = parseInt(document.getElementById("point1").innerText)
        let Totalpoint2 = parseInt(document.getElementById("point2").innerText)

        if (firstnum == null) {
            firstnum = num
            // console.log(firstnum)


        }
        else if (secnum == null) {
            secnum = num
            mainnum1 = firstnum.getElementsByClassName('card-back')[0].innerText
            mainnum2 = secnum.getElementsByClassName('card-back')[0].innerText
            // console.log(mainnum1)
            // console.log(mainnum2)
            if (firstnum === secnum) {
                // alert("nooo")

                // firstnum.getElementsByClassName('card-inner')[0].style.transform = 'rotateY(0deg)'
            }
            else {
                if (mainnum1 === mainnum2) {
                    firstnum.style.visibility = "hidden"
                    secnum.style.visibility = "hidden"
                    firstnum = null
                    secnum = null

                    if (p1.style.color == "black") {

                        two = document.getElementById("point2").innerText = Totalpoint2 + 1
                        document.getElementsByClassName('plusboth')[1].setAttribute('id', 'plus');
                        setTimeout(function () {
                            document.getElementById('plus').removeAttribute('id');
                        }, 1500);






                        console.log(two)
                        if (one + two == 10) {
                            if (one > two) {
                                alert("player 1 is winner")
                                location.reload();

                            }
                            else if (two > one) {
                                alert("player 2 is winner")
                                location.reload();

                            }
                            else {
                                alert('droww')
                                location.reload();

                            }
                        }
                    }
                    else {

                        one = document.getElementById("point1").innerText = Totalpoint1 + 1
                        document.getElementsByClassName('plusboth')[0].setAttribute('id', 'plus')
                        setTimeout(function () {
                            document.getElementById('plus').removeAttribute('id');
                        }, 1500);
                        console.log(one)

                        if (one + two == 10) {
                            if (one > two) {
                                alert("player 1 is winner")
                                location.reload();

                            }
                            else if (two > one) {
                                alert("player 2 is winner")
                                location.reload();

                            }
                            else {
                                alert('droww')
                                location.reload();

                            }
                        }

                    }


                }
                else {
                    aftertime = () => {
                        firstnum.getElementsByClassName('card-inner')[0].style.transform = 'rotateY(0deg)'
                        secnum.getElementsByClassName('card-inner')[0].style.transform = 'rotateY(0deg)'


                        firstnum = null
                        secnum = null
                        
                        if (p1.style.color == "black") {
                            p1.style.boxShadow = "0 0 20px 5px red";
                            p2.style.boxShadow = "0 0 0 0";

                            p1.style.color = "red"
                            p2.style.color = "black"
                        }
                        else {
                            p1.style.color = "black"
                            p2.style.boxShadow = "0 0 20px 5px red";
                            p1.style.boxShadow = "0 0 0 0";


                            p2.style.color = "red"
                        }
                    }
                    setTimeout(aftertime, 600);

                }
            }

        }
        else {
            alert("bkl itni kya jaldi hai ab wapis khel ja ")
            location.reload();

        }

    }

    const NumShuf = Array.from({ length: 20 }, (_, index) => index + 1);
    NumShuf.sort(() => Math.random() - 0.5);
    // console.log(NumShuf);

    for (let i = 0; i < 20; i++) {
        document.getElementById(`num${i + 1}`).style.order = NumShuf[i];
    }

}



startpicgame = () => {
    document.getElementById('hid').style.display = 'none';
    // document.getElementById('fullscreen-container').style.display = 'none';
    document.getElementById('picgame').style.display = "flex";

    // now shuffle 

    const NumShuf2 = Array.from({ length: 20 }, (_, index) => index + 1);
    NumShuf2.sort(() => Math.random() - 0.5);
    // console.log(NumShuf2);

    for (let i = 0; i < 20; i++) {
        document.getElementById(`pic${i + 1}`).style.order = NumShuf2[i];
    }

    // now player turn 
    let randomNum = Math.floor(Math.random() * 2) + 1;

    if (randomNum == 1) {
        picp1.style.boxShadow = "0 0 20px 5px red";
        picp1.style.color = 'red';
        picp2.style.color = 'black';
        alert("player 1's turn")

    }
    if (randomNum == 2) {
        picp2.style.boxShadow = "0 0 20px 5px red";
        picp2.style.color = 'red';
        picp1.style.color = 'black';
        alert("player 2's turn")

    }

    //check if same or not

    check = (num) => {

        let Totalpoint1 = parseInt(document.getElementById("picpoint1").innerText)
        let Totalpoint2 = parseInt(document.getElementById("picpoint2").innerText)

        if (firstpic == null) {
            firstpic = num
            // console.log(firstpic)


        }
        else if (secpic == null) {
            secpic = num
            // console.log(secpic)
            mainnum1 = firstpic.getElementsByClassName('card-back')[0].children[0].alt
            mainnum2 = secpic.getElementsByClassName('card-back')[0].children[0].alt
            // console.log(mainnum1)
            // console.log(mainnum2)
            if (firstpic === secpic) {
                // alert("nooo")
                // firstnum.getElementsByClassName('card-inner')[0].style.transform = 'rotateY(0deg)'
            }
            else {
                if (mainnum1 === mainnum2) {
                    firstpic.style.visibility = "hidden"
                    secpic.style.visibility = "hidden"
                    firstpic = null
                    secpic = null

                    if (picp1.style.color == "black") {

                        two = document.getElementById("picpoint2").innerText = Totalpoint2 + 1
                        document.getElementsByClassName('plusboth')[3].setAttribute('id', 'plus');
                        setTimeout(function () {
                            document.getElementById('plus').removeAttribute('id');
                        }, 1500);
                        console.log(two)
                        if (one + two == 10) {
                            if (one > two) {
                                alert("player 1 is winner")
                                location.reload();

                            }
                            else if (two > one) {
                                alert("player 2 is winner")
                                location.reload();

                            }
                            else {
                                alert('droww')
                                location.reload();

                            }
                        }
                    }
                    else {

                        one = document.getElementById("picpoint1").innerText = Totalpoint1 + 1
                        document.getElementsByClassName('plusboth')[2].setAttribute('id', 'plus');
                        setTimeout(function () {
                            document.getElementById('plus').removeAttribute('id');
                        }, 1500);
                        console.log(one)

                        if (one + two == 10) {
                            if (one > two) {
                                alert("player 1 is winner")
                                location.reload();

                            }
                            else if (two > one) {
                                alert("player 2 is winner")
                                location.reload();

                            }
                            else {
                                alert('droww')
                                location.reload();

                            }
                        }

                    }


                }
                else {
                    aftertime = () => {
                        firstpic.getElementsByClassName('card-inner')[0].style.transform = 'rotateY(0deg)'
                        secpic.getElementsByClassName('card-inner')[0].style.transform = 'rotateY(0deg)'
                        firstpic = null
                        secpic = null
                        if (picp1.style.color == "black") {
                            picp1.style.boxShadow = "0 0 20px 5px red";
                            picp2.style.boxShadow = "0 0 0 0";

                            picp1.style.color = "red"
                            picp2.style.color = "black"
                        }
                        else {
                            picp2.style.boxShadow = "0 0 20px 5px red";
                            picp1.style.boxShadow = "0 0 0 0";

                            picp1.style.color = "black"
                            picp2.style.color = "red"
                        }

                    }
                    setTimeout(aftertime, 600);

                }
            }

        }
        else {
            alert("bkl itni kya jaldi hai ab wapis khel ja ")
            location.reload();

        }

    }

}

document.addEventListener("contextmenu",function(e){
    e.preventDefault()
},false)