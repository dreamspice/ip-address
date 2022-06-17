const countryEl = document.getElementById('country')
const cityEl = document.getElementById('city')
const ipEl = document.getElementById('ip')
const timezoneEl = document.getElementById('timezone')
const ispEl = document.getElementById('isp')
const inputEl = document.getElementById('user-input')

fetch('https://freeipapi.com/api/json')
    .then(res => res.json())
    .then((data) => {
        console.log(data)
        const ip = data.ipAddress
        const isp = data.isp
        const city = data.cityName
        const country = data.countryName
        const timezone = data.timeZone
        const x = data.latitude.toPrecision(4)
        const y = data.longitude.toPrecision(4)
        ipEl.textContent = ip
        countryEl.textContent = country
        cityEl.textContent = city
        timezoneEl.textContent = timezone
        let map = L.map('map').setView([x, y], 13);
        let marker = L.marker([x, y]).addTo(map);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
        }).addTo(map);
        L.marker([x, y]).addTo(map)
        .bindPopup('Here you are.')
        .openPopup();
    })

    // let ipAdress

    // function submit() {
    //     ipAdress = document.getElementById('user-input').value
    //     inputEl.value = ''
    //     console.log(ipAdress)
    // }

