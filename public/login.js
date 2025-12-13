async function loginAndFetch()
{
  const response = await fetch("https://honest-sloths-allow.loca.lt", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      district: "https://studentvue.vbcps.com",
      username: document.getElementById('username').value,
      password: document.getElementById('password').value, 
    })
  });

  const data = await response.json();

  const title = document.getElementById('title');
  title.textContent = "Grades";

  const loginui = document.getElementById('loginui');
  loginui.remove();

  const parsedData = JSON.parse(data);
  console.log(parsedData);

  const coursedata = parsedData.Gradebook.Courses.Course;
  for ( var i = 0; i < coursedata.length; ++i ) {
    const course = document.body.appendChild(document.createElement("span"));
    course.textContent = coursedata[i].CourseName;

    const grade = document.body.appendChild(document.createElement("button"));
    grade.textContent = coursedata[i].Marks.Mark[0].CalculatedScoreString;

    document.body.appendChild(document.createElement("br"));
  }
}
