interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [property: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};
console.log(teacher3);

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

// Décrit le type du constructeur avec le mot-clé new.
interface StudentConstructorInterface {
  new(firstName: string, lastName: string): StudentClassInterface;
}

// Décrit les méthodes obligatoires que la classe doit avoir.
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Crée une classe qui respecte l’interface grâce à implements.
class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  // Initialise les propriétés lors de la création de l’objet.
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}