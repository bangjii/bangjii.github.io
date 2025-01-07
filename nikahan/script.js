document.addEventListener("DOMContentLoaded", function () {
    //http://localhost/term/test.html?qry=QWJkdWwgSGFtaWQ=
    let lokasi = '<a href="https://maps.app.goo.gl/VrHbPR4L3vpoGoxAA" target="_blank">Dyah Ayu Vila</a>';
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('qry');
    teman = atob(name);

    const texts = [
        "Assalamualaikum, hay bang " + teman + " kabar baik kan? ",
        "Mau ngabarin, ane mau nikah nih hehehe",
        "Iyak ini ane Hudz, Jihad, Hudzaifah Al Jihad, BangJii, PH6, Unkris, SiBunder, FP2STI, Multindo, Amazone.",
        "InsyaAllah acare nikahan ane nanti tanggal 22 Februari 2025 jam 10 pagi sampe jam 5 sore",
        "Iyak bener bertepatan same tanggal kelahiran ane hehehe",
        "Dateng yak bang " + teman + " ",
        "Dan ane minta doanye yak, semoga acara ane dimudahkan dilancarkan diberkahi aamiin",
        "Disini lokasi acaranye "
    ];
    const typingDiv = document.getElementById("typingDiv");

    function typeCharacter(textInput) {
        return new Promise((resolve) => {
            let index = 0;
            function type() {
                if (index < textInput.length) {
                    typingDiv.innerText += textInput.charAt(index);
                    index++;
                    setTimeout(type, 100); // Typing speed
                } else {
                    setTimeout(() => {
                        typingDiv.innerText += "\r\n" + "bangjii@pojokan:~$ ";
                        resolve(); // Signal that typing is done
                    }, 3000);
                }
            }
            type();
        });
    }

    // Sequentially type each text
    async function typeAllTexts() {
        for (const text of texts) {
            await typeCharacter(text); // Wait for each text to finish
        }
        typingDiv.innerHTML += lokasi;
    }
    typeAllTexts();    
    const obj = { 
                    title: "Jihad & Dila Walimatul Ursy", 
                    guest: teman, 
                    location: "Dyah Ayu Vila Ciapus Bogor",
                    maps: "https://maps.app.goo.gl/VrHbPR4L3vpoGoxAA",
                    time: "22 Februari 2025, 10:00 - 17:00",
                    status: "You Are Invited"
                };
    const pretty = JSON.stringify(obj, null, 2);
    console.log(pretty);
});
