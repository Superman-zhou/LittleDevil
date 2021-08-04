const emStyle = `.shadow{
    width: 350px;
    height: 350px;
    background: rgb(124,14,184);
    border-radius: 50%;
    filter: blur(50px);
    position: absolute;
}
.em-head{
    width: 250px;
    height: 250px;
    border-radius: 50%;
    background: black;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    animation: bulge 2s infinite;
}
.em-head::before,.em-head::after{
    content: '';
    width: 0;
    height: 0;
    border-bottom: 80px solid red;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    position: absolute;
}
.em-head::before{
    transform: translate(-80px,-120px) rotate(-30deg);
}
.em-head::after{
    transform: translate(80px,-120px) rotate(30deg);
}
.eyelid{
    width: 140px;
    height: 140px;
    border-top: 4px solid green;
    border-radius: 100px 40px / 15px 15px;
    position: absolute;
    overflow: hidden;
}
.eyelid.left{
    transform: translate(-105px,10px) rotate(30deg);
}
.eyelid.right{
    transform: scale(-1,1) translate(-105px,10px) rotate(30deg);
}

.eyeFrame{
    width: 120px;
    height: 120px;
    background: aliceblue;
    border-radius: 0 0 40px 80px / 0 0 60px 60px ;
    transform: translate(10px,-80px);
}

.eyeball{
    width: 4px;
    height: 10px;
    background: black;
    transform: translate(100px,90px) rotate(-30deg);
    border-radius: 50%;
}

.lip{
    position: absolute;
 }
.lip.upper{
    width: 180px;
    height: 80px;
    background: black;
    border-radius: 50%;
    transform: translateY(40px);
    z-index: 2;
}
.lip.below{
    width: 150px;
    height: 80px;
    background: red;
    border-radius: 50%;
    transform: translateY(60px);
    z-index: 1;
}
.lip.below:before,.lip.below:after{
    content: '';
    width: 0;
    height: 0;
    border-top: 25px solid aliceblue;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    position: absolute;
}
.lip.below:before{
    transform: translate(20px,50px);
}
.lip.below:after{
    transform: translate(115px,50px);
}
@keyframes bulge {
    0%{
        transform: translateY(2%);
    }
    50%{
        transform: translateY(0%);
    }
    100%{
        transform: translateY(2%);
    }
}
`
export default emStyle