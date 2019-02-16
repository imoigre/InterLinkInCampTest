class University {

   constructor(name) {
      this.name = name;
      this.students = new Array()
   }

   getAverageKnowledgeLevel() {
      var sum = 0;
      var count = this.students.length;
      for (var i = 0; i < this.students.length; i++) {
         sum += this.students[i].knowledge.level;
      }
      return sum / count;
   }

   getStudents() {
      return this.students;
   }

   addStudent(student) {
      this.students.push(student);
   }
   SendStudentsToInternship() {
      const Average = this.getAverageKnowledgeLevel();
      const result = [];
      for (var i = 0; i < this.students.length; i++) {
         if (this.students[i].knowledge.level >= Average) {
            result.push(this.students[i]);
         }
      }
      console.log()
      return result;
   }
}
class Student {
   constructor(name) {
      this.name = name;
   }

   setKnowledge(knowledge) {
      this.knowledge = knowledge;
   }
}
class Knowledge {
   constructor(level) {
      this.level = level;
   }
}

class Internship {
   constructor(name) {
      this.name = name;
      this.students = new Array();
   }

   setStudent(student) {
      this.students.push(student);
   }

   getStudents() {
      return this.students;
   }
   setStudentList(students) {
      for (var i = 0; i < students.length; i++) {
         this.students.push(students[i]);
      }
   }
}
class Application {
   static main() {
      University = new University("CH.U.I.");
      const student1 = new Student("Andrew Kostenko");
      const student2 = new Student("Julia Veselkina");
      const student3 = new Student("Maria Perechrest");
      student1.setKnowledge(new Knowledge(3));
      student2.setKnowledge(new Knowledge(4));
      student3.setKnowledge(new Knowledge(5));
      University.addStudent(student1);
      University.addStudent(student2);
      University.addStudent(student3);
      Internship = new Internship("Interlink");
      Internship.setStudentList(University.SendStudentsToInternship());
      console.log("List of all students:");
      console.log(University.getStudents());
      console.log("List of internship's students:");
      console.log(Internship.getStudents());
   }
}
Application.main()
