# Student_Evaluation
<div>
    <ul>
<li>You will create below models
<ul>
<li>Users :- has all the basic details like firstName, lastName, gender, dateOfBirth, type(type will be student, admin or instructor) , createdAt, updatedAt</li>
<li>Student :- has fields like roll id, current batch, createdAt, updatedAt</li>
<li>Batch :- has fields like Batch name, createdAt, updatedAt</li>
<li>Evaluation :- has some evaluation related details like date_of_evaluation, instructor( this will reference the user collection), batch_id ( this will reference the batches collection)</li>
<li>Submission :- has some submissions related details like evaluation_id(this will reference the evaluations collection), student_id(this will reference the user collection), marks, createdAt, updatedAt</li>
</ul>
</li>
</ul>
<p>Now we need to store students evaluation results so you need to first figure out where ideally it should be saved and then we should be able to run the following queries</p>
<ul>
<li>fetch all students who gave a particular evaluation</li>
<li>fetch the student with his personal details who scored the highest marks in the evaluation</li>
<li>Refactor the code into an MVC pattern</li>
</ul>
      </div>
