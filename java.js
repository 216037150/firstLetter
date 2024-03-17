// make the first word to start with capital letter


const myFunction = (name) => {
    const firstNme = name[0].toUpperCase();
    const resOfword = name.substring(1).toLowerCase();
    const FullName = firstNme + resOfword;
    return FullName;
  };
  
  console.log(myFunction('SiyaBoNGa'));
  