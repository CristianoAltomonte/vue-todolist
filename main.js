var app = new Vue({
    el: '#app',
    data: {

        todoList: [
            {
                text: 'comprare il pane',
                done: false,
            },
            {
                text: 'comprare la pasta',
                done: false,
            },
            {
                text: 'comprare i pomodori',
                done: false,
            }
        ],

        todoDone: [],
        valueTask:''
    },

    beforeUpdate(){

        // entra quando l'applicativo vue controlla il dom e i dati componenti si modificano
        this.todoList.forEach((elem, index) =>{

            if(elem.done == true){
                this.todoDone.push(elem);
                this.todoList.splice(index,1);
            }

        });


    },

    methods: {

        rimozioneElemento(elem, index) {

            // rimozione elemento in un array grazie alla posizione, ne elimina
            //  tanti quanti gli dico dall elementro trovato

            if (elem.done == true){

                this.todoDone.splice(index,1);

            }else{

                this.todoList.splice(index,1);

            }

        },
        


        depennare(elem, index) {

            // modifica stato della prorpietà

            if (elem.done == false) {
                elem.done = true;

            } else {
                elem.done = false;
            }

            // versione abbreviata dell if
            // elem.done = !elem.done;

        },

        addNewTask() {

            newTask = {

                text: this.valueTask,
                done: false
                
            }

            this.todoList.push(newTask)
            this.valueTask = ''
        }

    }

})