body {
  background-color: green !important;
  margin: auto;
}
.searchbar {
  margin-bottom: 10px;
  display: flex;
  justify-self: center;
  padding: 7px;
  border-radius: 25px;
}
.col-md-6 {
  font-family: 'Lobster', cursive;
}
header {
  font-family: 'Lobster', cursive;
}

h2 {
text-align: center;
}

.date-section {
  display: flex;
  flex-direction: column;
  color: #333;
  /* margin-top: 1rem; */
  max-width: 200px;
  height: 4rem;
}
.date-section label {
  margin-bottom: 0.5rem;
}
nav {
  text-align: right;
}
h1 {
  color: grey;
}
a {
  display: inline-block;
  color: white;
}
a:hover {
  color: yellow;
  text-decoration: underline;
}
nav a {
  padding: 10px 20px;
}
form,
h1 {
  margin-top: 15px;
  color: green;
}
h2 {
  color: #fff;
}
form {
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 60%;
  background-color: white;
  padding: 1rem;
  border-radius: 16px;
}
.name-section {
  display: flex;
  gap: 5rem;
  flex: 3;
  margin-bottom: 1rem;
  justify-content: space-between;
}
.date-section {
  flex: 1;
}
#text-wrapper2 {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 2rem;
  margin: auto;
}
h2 {
  text-align: center;
}
#text-wrapper2 img {
  margin: 20px;
  max-width: 450px;
  height: auto;
  /* margin: 0.1rem; */
}
.text-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
}
.text-wrapper h2 {
  text-align: center;
}
.text-wrapper p {
  text-align: center;
  margin-top: 1rem;
}
.price {
  font-weight: bold;
}
.cta {
  margin-top: 2rem;
}

.home-img {
  display: block;
  margin: 10px;
  width: 100%;
  height: auto;
  border-radius: 10px;
  border: 2px solid #ccc;
}
.book-now-btn {
  padding: 1rem 2rem;
  background-color: #4CAF50;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}
.disc {
  text-align: center;
  margin-top: 2rem;
  font-size: 0.8rem;
}
.icons {
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 75%;
}

@media only screen and (max-width: 768px) {
  form {
    width: 90% !important;
    margin: auto !important;
  }

  .home-img {
width: 100%;
  }

  /* Add some margin to the images to create spacing between them */
#text-wrapper2 {
  flex-direction: column;
  align-items: center;
}
#text-wrapper2 img {
  margin: 20px 0;
}

