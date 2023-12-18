var basketa = 0;
var m1 = 0;
var m2 = 0;
var m3 = 0;
var a1= 0;
var a2= 0;
var a3= 0;
var hp1= 0;
var hp2= 0;
var hp3= 0;


function basketmac1()
{
    basketa+=599;
    m1++;

    return {valueA: m1, valueB: basketa};
}

function basketacer1()
{
    basketa+=599;
    a1++;

    return {valueA: a1, valueB: basketa};
}

function baskethp1()
{
    basketa+=599;
    h1++;

    return {valueA: hp1, valueB: basketa};
}

function basket599m()
{   
    if(m1 >= 1)
    {
        m1--;
        basketa -= 599;
        removed();
    }
    else
    {
        donthave();
    }
   

    return {valueA: basketa, valueB: m1};
}

function basket599m2()
{   
    if(a1 >= 1)
    {
        a1--;
        basketa -= 599;
        removed();
    }
    else
    {
        donthave();
    }
   

    return {valueA: basketa, valueB: a1};
}

function basket599m3()
{   
    if(hp1 >= 1)
    {
        hp1--;
        basketa -= 599;
        removed();
    }
    else
    {
        donthave();
    }
   

    return {valueA: basketa, valueB: hp1};
}

function basketmac2()
{
    m2++;
    basketa += 650;

    return {valueA: basketa, valueB: m2};
}
function basketacer2()
{
    a2++;
    basketa += 650;

    return {valueA: basketa, valueB: a2};
}
function baskethp2()
{
    hp2++;
    basketa += 650;

    return {valueA: basketa, valueB: hp2};
}

function basket650m()
{
    if(m2 >= 1)
    {
        m2--;
        basketa -= 650;
        removed();
    }
    else
    {
        donthave();
    }
   

    return {valueA: basketa, valueB: m2};
}


function basket650m2()
{
    if(a2 >= 1)
    {
        a2--;
        basketa -= 650;
        removed();
    }
    else
    {
        donthave();
    }
   

    return {valueA: basketa, valueB: a2};
}

function basket650m3()
{
    if(hp2 >= 1)
    {
        hp2--;
        basketa -= 650;
        removed();
    }
    else
    {
        donthave();
    }
   

    return {valueA: basketa, valueB: hp2};
}

function basketmac3()
{
    m3++;
    basketa += 750;

    return basketa;
}
function basketacer3()
{
    a3++;
    basketa += 750;

    return basketa;
}
function baskethp3()
{
    hp3++;
    basketa += 750;

    return basketa;
}

function basket750m()
{
    if(m3 >= 1)
    {
        m3--;
        basketa -= 750;
        removed();
    }
    else
    {
        donthave();
    }
   

    return {valueA: basketa, valueB: m3};
}

function basket750m2()
{
    if(a3 >= 1)
    {
        a3--;
        basketa -= 750;
        removed();
    }
    else
    {
        donthave();
    }
   

    return {valueA: basketa, valueB: a3};
}

function basket750m3()
{
    if(hp3 >= 1)
    {
        hp3--;
        basketa -= 750;
        removed();
    }
    else
    {
        donthave();
    }
   

    return {valueA: basketa, valueB: hp3};
}

function basket1()
{
    basketmac1();
    added();

    document.getElementById("price").innerHTML = basketa + " €";

}

function basket2()
{
    basketmac2();
    added();

    document.getElementById("price").innerHTML = basketa + " €";

}

function basket3()
{
    basketmac3();
    added();

    document.getElementById("price").innerHTML = basketa + " €";

}

function basket4()
{
    basketacer1();
    added();

    document.getElementById("price").innerHTML = basketa + " €";

}

function basket5()
{
    basketacer2();
    added();

    document.getElementById("price").innerHTML = basketa + " €";

}

function basket6()
{
    basketacer3();
    added();

    document.getElementById("price").innerHTML = basketa + " €";

}

function basket7()
{
    baskethp1();
    added();

    document.getElementById("price").innerHTML = basketa + " €";

}

function basket8()
{
    baskethp2();
    added();

    document.getElementById("price").innerHTML = basketa + " €";

}

function basket9()
{
    baskethp3();
    added();

    document.getElementById("price").innerHTML = basketa + " €";

}

function basket599r()
{
    basket599m();

    document.getElementById("price").innerHTML = basketa + " €";

}

function basket599r2()
{
    basket599m2();

    document.getElementById("price").innerHTML = basketa + " €";

}

function basket599r3()
{
    basket599m3();

    document.getElementById("price").innerHTML = basketa + " €";

}

function basket650r()
{
    basket650m();

    document.getElementById("price").innerHTML = basketa + " €";

}

function basket650r2()
{
    basket650m2();

    document.getElementById("price").innerHTML = basketa + " €";

}

function basket650r3()
{
    basket650m3();

    document.getElementById("price").innerHTML = basketa + " €";

}

function basket750r()
{
    basket750m();

    document.getElementById("price").innerHTML = basketa + " €";

}

function basket750r2()
{
    basket750m2();

    document.getElementById("price").innerHTML = basketa + " €";

}

function basket750r3()
{
    basket750m3();

    document.getElementById("price").innerHTML = basketa + " €";

}

function added()
{
    window.alert("Item added to basket!");

}

function removed()
{
    window.alert("Item removed from basket!");

}

function donthave()
{
    window.alert("You dont have this item in your Basket!");
}

console.log(m1);
console.log(a2);