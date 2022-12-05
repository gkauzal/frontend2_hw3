//1. feladat

//FindGabor funkció létrehozása

function FindGabor(names)
{   //a counter változó létrehozása 0 értékkel
    let counter =0;
    //végigmegyünk a names tömb elemein
    for(let i=0;i<names.length;i++)
    {
        //ciklusmag
        //ha a names i-ik elemének értéke Gábor
        if(names[i]==="Gábor")
        {
            //írjuk ki a consolra, hogy hányadik elem 
            console.log("Gábor a " +Number(names.indexOf("Gábor")+1) + ". elem a tömbben");
            //a counter értékét növeljük 1-el
            counter++;
            //lépjünk ki a ciklusból, mert tovább nem érdemes keresni
            break;
        }

    }
    // ha a counter értéke továbbra is 0, akkor nincs Gábor a tömbben
    if (counter===0)
        {
            //kiírni consol-ra hogy nincs Gábor
            console.log("Nincs Gábor a tömbben");
        }
}


// FindGabor fvény meghívása
FindGabor(['István', 'Katalin', 'Attila', 'Gábor', 'Péter', 'Anna', 'Kitti' ]);

//2. feladat

//SumOfArray fvény létrehozása
function SumOfArray(x)
{
    //result változó létrehozása 0 értékkel
    let result =0;
    //végigmegyünk az x tömb elemein
    for(let i=0;i<x.length;i++)
    {
        //az x tömb -ik elemét hozzáadjuk a result változóhoz
        result += x[i];
    }
     //console-ra kiírjuk a result változó értékét
    console.log("A tömb elemeinek összege: "+result);

}
 //meghívjuk a SumOfArray fvényt paraméterekkel
SumOfArray([ 4, 2, 2, 1, 1]);



//4. feladat

//SumOfArrayPlus2 fvény létrehozása
function SumOfArrayPlus2(x)
{
    //result változó létrehozása 0 értékkel
    let result =0;
    //végigmegyünk az x tömb elemein
    for(let i=0;i<x.length;i++)
    {   
        //ciklusmag
        //ha az x tömb i-k eleme nem szám típusú
        if(typeof x[i]!='number')
        {
            
            //írjuk ki consolra, hogy nem szám
            console.log("A tömb " +(i+1)+". eleme nem szám!")
            //próbáljuk a nem szám elemet számmá alakítani
            if (Number.isNaN(Number.parseFloat(x[i])))
            {
                //ha isNan értéke true akkor nem sikerült
                console.log("A tömb " +(i+1)+". elemét nem sikerült számmá konvertálni!")
            }
            else
            {   //ha isNan értéke false, sikerült a konvertálás és adjuk az elem értékét a result változóhoz
                result+=Number.parseFloat(x[i]);
            }

        }
        //egyébként
        else
        {
        //az x tömb -ik elemét hozzáadjuk a result változóhoz
        result += x[i];
        }
    }
     //console-ra kiírjuk a result változó értékét
    console.log("A tömb elemeinek összege: "+result);

}
 //meghívjuk a SumOfArrayPlus2 fvényt paraméterekkel
SumOfArrayPlus2([ 'a',4, 2, 2, 1, 1]);