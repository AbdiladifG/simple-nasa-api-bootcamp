//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
document.querySelector('button').addEventListener('click', ()=>{
    let date = document.querySelector('input').value
    console.log(date)
    let url = `https://api.nasa.gov/planetary/apod?api_key=yE7ZzDqqPMzWXzQ31sSQhXtOSqHA167cxT6K5OuR&date=${date}`

    fetch(url) 
    .then(res => res.json()) // parse response as JSON 
    .then(data => {
      console.log(data) 
      console.log(data.media_type)

      document.querySelector('h2').innerText = data.title
      document.querySelector('h3').innerText = data.explanation

      if(data.media_type == 'image'){
        document.querySelector('img').src = data.hdurl
      }
      else{
        document.querySelector('iframe').src = data.url
      }
      
    }) 
    .catch(err => { 
        console.log(err)
    });
})