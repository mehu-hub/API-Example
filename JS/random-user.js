const loadUser = () => {
    fetch('https://randomuser.me/api/?gender=male')
        .then(res => res.json())
        .then(data => displayUser(data))
}

const displayUser = (user) => {
    const genderTag = document.getElementById('gender')
    genderTag.innerHTML = user.results[0].gender 

    const name = user.results[0].name.title + ' ' + user.results[0].name.first + ' ' + user.results[0].name.last
    document.getElementById('name').innerHTML = name;

    const city = user.results[0].location.city
    document.getElementById('city').innerHTML = city;

    const postCode = user.results[0].location.postcode
    document.getElementById('post-code').innerHTML = postCode;

    const img = user.results[0].picture.large;
    document.getElementById('img').src = img;
}

loadUser()