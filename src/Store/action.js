const actions = store => ({
  onChangeName: (state, { lastname, firstname }) => {

    if (lastname === "d" && firstname === "jc") {
      return ({
        auth: true,
        lastname: lastname,
        firstname: firstname
      })
    }else{
      return ({
        auth: false
      })
    }

  },
  deconnect :(state)=>{
     return ({
        auth: false
      })
  },
   connect :(state)=>{
     return ({
        auth: true
      })
  }
});

export default actions;