
	nameOfTheStudentArray = [];
	
	function submit()
	{
        
        var name1 = document.getElementById("nameOfTheStudent1").value;
        var name2 = document.getElementById("nameOfTheStudent2").value;
        var name3 = document.getElementById("nameOfTheStudent3").value;
        var name4 = document.getElementById("nameOfTheStudent4").value;

        name_of_the_student_array.push(name1);
        name_of_the_student_array.push(name2);
        name_of_the_student_array.push(name3);
        name_of_the_student_array.push(name4);

		console.log(nameOfTheStudentArray);
		
        document.getElementById("displayName").innerHTML = nameOfTheStudentArray;
        document.getElementById("submitButton").style.display = "none";
        document.getElementById("sortButton").style.display = "inline-block";

	}

function sorting()
{
	nameOfTheStudentArray.sort();
    console.log(nameOfTheStudentArray);
	document.getElementById("displayName").innerHTML = nameOfTheStudentArray;
}
