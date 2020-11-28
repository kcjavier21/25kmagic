export const profiles = [
    { 
        _id: "0001", 
        name: "Ken Carlo Javier",
        age: 20,
        address: 'Malolos, Bulacan',
    },
    { 
        _id: "0002", 
        name: "Marck England Bautista",
        age: 20,
        address: 'Tondo, Manila',
    },
    { 
        _id: "0003", 
        name: "Alyzza Maureen Catura",
        age: 20,
        address: 'Somewhere in Manila',
    },
    { 
        _id: "0004", 
        name: "Neil Christian Riego",
        age: 20,
        address: 'Quezon City',
    },
  ];
  

  export function getProfiles() {
    return profiles;
  }
  
  export function getProfile(id) {
    return profiles.find(p => parseInt(p._id) === id);
  }
  
//   export function saveProfile(profile) {
//     let movieInDb = movies.find(m => m._id === movie._id) || {};
//     movieInDb.title = movie.title;
//     movieInDb.genre = genresAPI.genres.find(g => g._id === movie.genreId);
//     movieInDb.numberInStock = movie.numberInStock;
//     movieInDb.dailyRentalRate = movie.dailyRentalRate;
  
//     if (!movieInDb._id) {
//       movieInDb._id = Date.now().toString();
//       movies.push(movieInDb);
//     }
  
//     return movieInDb;
//   }
  
//   export function deleteProfile(id) {
//     let movieInDb = movies.find(m => m._id === id);
//     movies.splice(movies.indexOf(movieInDb), 1);
//     return movieInDb;
//   }