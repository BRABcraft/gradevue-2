async function loginAndFetch()
{
  const response = await fetch("/api", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      district: "https://studentvue.vbcps.com",
      username: document.getElementById('username').value,
      password: document.getElementById('password').value, 
    })
  });

  const data = await response.json();

  const title = document.getElementById('site-title');
  title.textContent = "Grades";

  const tagline = document.getElementById('site-tagline');
  tagline.remove();

  const loginui = document.getElementById('login-section');
  loginui.remove();

  const parsedData = JSON.parse(data);
  console.log(parsedData);

  const footer = document.getElementById('footer');
  const coursedata = parsedData.Gradebook.Courses.Course;
  for ( var i = 0; i < coursedata.length; ++i ) {
    const course = document.body.insertBefore(document.createElement("span"), footer);
    course.textContent = coursedata[i].CourseName;

    const grade = document.body.insertBefore(document.createElement("button"), footer);
    grade.textContent = coursedata[i].Marks.Mark[0].CalculatedScoreString;

    document.body.insertBefore(document.createElement("br"), footer);
  }
}
