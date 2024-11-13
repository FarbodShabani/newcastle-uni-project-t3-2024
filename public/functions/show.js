const invoiceId = document.getElementById("invoice-id").value;


const onChooseShowOptionClick = async (showOption) => {

  console.log("show Option is: ", showOption);
  


  switch (showOption) {
    case "email":
      const response = axios.post('/show', {
          showOption,
          invoiceId
        });
      
        return response;
      break;
      case "download":
    default:
      download();
      break;
  }
  try {


  } catch (error) {

  }

 

}
