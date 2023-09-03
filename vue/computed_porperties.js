//you can create a writable computed by adding both a getter and 
// a setter 

export default {
    data(){
        return {
            firstname: 'john',
            lastname : 'doe', 
        }

    },
    computed:{
        fullname: {
            // getter 
            get(){
                return this.firstname + ' ' + this.lastname;
            },
            set(new_value){
                [this.firstname, this.lastname] = new_value.split(' ')
            }
        }
    }
}