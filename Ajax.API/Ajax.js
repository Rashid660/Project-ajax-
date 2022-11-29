/************Send************/

const details = {
    'firstName': '',
    'lastName': '',
    'Over18': false,
    'adress': '',
    'gender': null
}

function getDetails() {
    try {
        details.firstName = document.getElementById('first_name').value
        details.lastName = document.getElementById('last_name').value
        if (document.getElementById('age').checked) {
            details.Over18 = document.getElementById('age').innerHTML = true
        } else {
            details.Over18 = document.getElementById('age').innerHTML = false

        } details.adress = document.getElementById('adress').value
        if (document.getElementById('male').checked) {
            details.gender = document.getElementById('male').value
        } else if (document.getElementById('female').checked) {
            details.gender = document.getElementById('female').value
        }
        if (details.firstName == '' || details.lastName == '' || details.adress == '') {
            throw Error('Empty Value')
        }
    } catch (err) {
        console.error(err)
        Swal.fire('Oops u missed to fill something')
    }
}


/************random************/

const randomDetails = [
    {
        firstName: 'magi',
        lastName: 'cohen',
        Over18: false,
        adress: 'tel aviv',
        gender: 'female'
    }, {
        firstName: 'yosi',
        lastName: 'hindi',
        Over18: true,
        adress: 'haderah',
        gender: 'male'
    }, {
        firstName: 'niv',
        lastName: 'almog',
        Over18: true,
        adress: 'pardes hana',
        gender: 'male'
    }
]


function getDetails2() {

    document.getElementById('first_name').value = randomDetails[Math.floor(Math.random() * randomDetails.length)].firstName
    document.getElementById('last_name').value = randomDetails[Math.floor(Math.random() * randomDetails.length)].lastName
    if (document.getElementById('age').value = randomDetails[Math.floor(Math.random() * randomDetails.length)].Over18) {
        document.getElementById('age').checked = true
    } else {
        document.getElementById('age').checked = false
    }
    document.getElementById('adress').value = randomDetails[Math.floor(Math.random() * randomDetails.length)].adress
    switch (document.getElementById('first_name').value) {
        case 'magi':
            document.getElementById('female').checked = true
            break
        case 'yosi':
            document.getElementById('male').checked = true
            break
        case 'niv':
            document.getElementById('male').checked = true
            break
    }
}

/************XHR************/

function loadXMLDoc() {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(this.responseText));
            const myData = JSON.parse(this.responseText)
            document.getElementById('first_name').value = myData.results[0].name.first
            document.getElementById('last_name').value = myData.results[0].name.last
            document.getElementById('adress').value = myData.results[0].location.country
            if (myData.results[0].gender == 'male') {
                document.getElementById('male').checked = true
            } else {
                document.getElementById('female').checked = true
            }
        }
    };
    xhttp.open("GET", "https://randomuser.me/api", true);
    xhttp.send();
}


/************Jquey ajax************/


function clickAjax() {
    $.ajax({
        url: "https://randomuser.me/api",
        success: (result) => {
            console.log(result);
            document.getElementById('first_name').value = result.results[0].name.first
            document.getElementById('last_name').value = result.results[0].name.last
            document.getElementById('adress').value = result.results[0].location.country
            if (result.results[0].gender == 'male') {
                document.getElementById('male').checked = true
            } else {
                document.getElementById('female').checked = true
            }
        }
    })
};


/************Fetch************/

function clickFetch() {
    let myfetch = fetch("https://randomuser.me/api");
    myfetch.then(res => res.json()).then(d => {
        console.log(d)
        document.getElementById('first_name').value = d.results[0].name.first
        document.getElementById('last_name').value = d.results[0].name.last
        document.getElementById('adress').value = d.results[0].location.country
        if (d.results[0].gender == 'male') {
            document.getElementById('male').checked = true
        } else {
            document.getElementById('female').checked = true
        }
    })
}

//********************************************************************DONE!!!!!!!!!!!!!!****************************************************************************/