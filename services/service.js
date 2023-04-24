class UserTasks {
    tasks = [{ task:"Mettre en place une architecture modulaire ES6",completed: false},
    { task:"Mettre en place un fichier service.mjs contenant un CRUD sur un tableau de tâches",completed: false},
    { task:"Récupérez les tâches grâce au service et affichez les",completed: false},
    { task:"Une fois les tâches affichées, implémentez la suppression d'une tâche",completed: false},
    { task:"Lorsque je coche une tache, implémentez ce changement d'état sur le serveur",completed: false},
    { task:"Implémentez la création d'une tâche via une deuxième page",completed: false},
    { task:"Mettre en place json-server (trouvable sur github)",completed: false},
    { task:"Dans le service, utilisez désormais l'API Fetch afin de ne plus utiliser le tableau",completed: false},
    { task:"Adaptez votre code pour que les modifications soient effectives coté serveur",completed: false},
    { task:"BONUS : affichez le détail d'une tâche sur une nouvelle page lors du clic sur celle-ci.",completed: false} ];

    getTasks = () => {
        return this.tasks;
    }

    
   deleteTasks = (index) => {
    this.tasks.splice(index, 1);
    console.log(index);
    console.log(this.tasks);
  };

    updateTask = (index , input) => {
        if (input.checked == true){
            this.tasks[index].completed = "true";
            console.log("1");
            console.log(this.tasks);
          } else {
            this.tasks[index].completed = "false";
            console.log("2");
            console.log(this.tasks);
          }
    }
}

export {UserTasks};