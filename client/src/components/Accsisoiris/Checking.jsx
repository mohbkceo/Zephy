
export default function Checking(firstname, lastname, verification) {
        if(firstname && lastname && verification){
            return {
                Continue: true,
                ControlleM: 'top-[-9rem]'
            }
          
        } else if(!firstname || !lastname || !verification){
            return {
                Continue: false,
                ControlleM :'top-1',
                ErrorMessage: 'Please fill the gaps',
                BgClolrMe: 'bg-orange-500',
            }
        } else if(firstname.length < 4) {
            return{
                Continue: false,
                ControlleM :'top-1',
                ErrorMessage: 'Name should not be less then 4 characters', //|| lastname.length < 4
                BgClolrMe: 'bg-orange-500',
            }
        } else if(lastname.length < 2){
            return{
                Continue: false,
                ControlleM :'top-1',
                BgClolrMe: 'bg-orange-500',
                ErrorMessage: 'Lastname should not be less then 2 characters' //|| lastname.length < 4

            }
        }
}

