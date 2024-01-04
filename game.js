let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');
let two
let one



startgame = () => {
    document.getElementById('hid').style.display = 'none';
    document.getElementById('numbergame').style.display = "flex";

    let randomNum = Math.floor(Math.random() * 2) + 1;

    start = () => {
        if (randomNum == 1) {
            p1.style.color = 'red';
            alert("player 1's turn")

        }
        if (randomNum == 2) {
            p2.style.color = 'red';
            alert("player 2's turn")

        }
    }
    start()
    getRandomizedArray()

}

function getRandomizedArray() {
    const NumShuf = Array.from({ length: 20 }, (_, index) => index + 1);
    NumShuf.sort(() => Math.random() - 0.5);
    // console.log(NumShuf);

    for (let i = 0; i < 20; i++) {
        document.getElementById(`num${i + 1}`).style.order = NumShuf[i];
    }

}

let firstnum
let secnum
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
                        p1.style.color = "red"
                        p2.style.color = "black"
                    }
                    else {
                        p1.style.color = "black"
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