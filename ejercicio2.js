

const movies = [
  { title: 'The Matrix', releaseYear: 1999 },
  { title: 'Star Wars: Episode IV – A New Hope', releaseYear: 1977 },
  { title: 'Inception', releaseYear: 2010 },
  { title: 'Jurassic Park', releaseYear: 1993 },
  { title: 'The Shawshank Redemption', releaseYear: 1994 },
  { title: 'Pulp Fiction', releaseYear: 1994 },
  { title: 'Avatar', releaseYear: 2009 },
  { title: 'The Dark Knight', releaseYear: 2008 },
  { title: 'Fight Club', releaseYear: 1999 },
  { title: 'Forrest Gump', releaseYear: 1994 }
];

// Añade tu código de bucle aquí
let before2000 = 0;
let after2000 = 0;

for(const movie of movies){
    if(movie["releaseYear"] < 2000){
        before2000++;
    } else {
        after2000++;
    }
}

console.log("Las películas anteriores al 2000 son: "+ before2000);
console.log("Las películas posteriores al 2000 son: "+ after2000);