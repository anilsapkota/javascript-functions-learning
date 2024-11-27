const $ = document.querySelector.bind(document)
info = {
  name: 'Ray Villalobos',
  twitter: '@planetoftheweb',
  youtube: 'youtube.com/planetoftheweb',
  linkedin: 'linkedin.com/in/planetoftheweb'
}
function displayCard(myObj) {
    return (
        `<strong>Name</strong>:${myObj.name}<br>
        <strong>Twitter</strong>:${myObj.twitter}<br>`
    )
}
$('#output').innerHTML = displayCard(info)