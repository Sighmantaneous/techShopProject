function inkJet()
    {
        document.getElementById("threeD").style.display="none";
        document.getElementById("laser").style.display="none";
        document.getElementById("inkJet").style.display="initial";
        document.getElementById("LaserPick").checked = false;
        document.getElementById("3dPick").checked = false;
    }

function Laser()
    {
        document.getElementById("threeD").style.display="none";
        document.getElementById("inkJet").style.display="none";
        document.getElementById("laser").style.display="initial";
        document.getElementById("3dPick").checked = false;
        document.getElementById("InkJetPick").checked = false;
    }

function threeD()
    {
        document.getElementById("laser").style.display="none";
        document.getElementById("inkJet").style.display="none";
        document.getElementById("threeD").style.display="initial";
        document.getElementById("LaserPick").checked = false;
        document.getElementById("InkJetPick").checked = false;
    }

function smallPrice()
    {
        document.getElementById("tierM").checked = false;
        document.getElementById("tierL").checked = false;
        document.getElementById("inkjet3").style.visibility="hidden"
        document.getElementById("laser1").style.visibility="hidden"
        document.getElementById("laser2").style.visibility="hidden"
        document.getElementById("3d1").style.visibility="hidden"
        document.getElementById("3d2").style.visibility="hidden"
        document.getElementById("3d3").style.visibility="hidden"
    }
function medPrice()
    {
        document.getElementById("tierS").checked = false;
        document.getElementById("tierL").checked = false;
        document.getElementById("laser1").style.visibility="hidden"
        document.getElementById("inkjet1").style.visibility="hidden"
        document.getElementById("inkjet2").style.visibility="hidden"
        document.getElementById("3d2").style.visibility="hidden"
        document.getElementById("3d3").style.visibility="hidden"
    }
function lrgPrice()
    {
        document.getElementById("tierS").checked = false;
        document.getElementById("tierM").checked = false;
        document.getElementById("laser1").style.visibility="hidden"
        document.getElementById("inket2").style.visibility="hidden"
        document.getElementById("inkjet1").style.visibility="hidden"
        document.getElementById("laser1").style.visibility="hidden"
        document.getElementById("laser2").style.visibility="hidden"
    


    }
function resetFilter()
    {
        location.reload();
    }
function clearEmail()
    {
        document.getElementById('email').value = "";
        alert("Thanks for signing up")
    }

function addToCart()
    {
        alert("Added to cart")
    }