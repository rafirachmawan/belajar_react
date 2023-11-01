import Header from "./components/Header";
const App = () => {
  const name = "Rafi" ;

  // menampilkan umur
  const renderAge = () => {
    // function
    return new Date().getFullYear() - 2001 ;
   };

    // menampilkan gender
   const renderGender = (gender) => {
    if (gender == "m"){
      return("saya laki")
    }else if(gender == "i"){
      return("saya perempuan")
    }else 
    return"tidak ada"

   }
   
   return (
    <div>
    <h1>Hai Nama Saya {name}</h1>
    <p>Umur Saya {renderAge()}</p>
    {renderGender("m")}
    <Header />
    </div>
    
   );
};

export default App;