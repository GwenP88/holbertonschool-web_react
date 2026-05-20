interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
};

const student1: Student = {
  firstName: "Gwen",
  lastName: "Kim",
  age: 30,
  location: "France",
};

const student2: Student = {
  firstName: "Bob",
  lastName: "Doe",
  age: 32,
  location: "France",
};

// Stocke les deux étudiants dans un tableau typé.
const studentsList: Student[] = [student1, student2];

// Crée l’élément HTML du tableau.
const table = document.createElement("table");

// Parcourt chaque étudiant du tableau.
studentsList.forEach((student) => {
  // Crée une nouvelle ligne du tableau.
  const line = document.createElement("tr");

  // Crée une cellule pour le prénom.
  const firstNameCase = document.createElement("td");
  // Ajoute le prénom dans la cellule.
  firstNameCase.textContent = student.firstName;
  // Ajoute la cellule du prénom dans la ligne.
  line.appendChild(firstNameCase);
  
  // Crée une cellule pour la localisation.
  const locationCase = document.createElement("td");
  // Ajoute la localisation dans la cellule.
  locationCase.textContent = student.location;
  // Ajoute la cellule de localisation dans la ligne.
  line.appendChild(locationCase);

  // Ajoute la ligne complète dans le tableau.
  table.appendChild(line);
});

// Ajoute le tableau dans le corps de la page.
document.body.appendChild(table);