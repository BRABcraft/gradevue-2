async function loginAndFetch()
{
  const response = await fetch("http://localhost:3000/api", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      district: "https://studentvue.vbcps.com",
      username: "405350",
      password: "Me-cum-mouse!5770"
    })
  });

  const data = await response.json();
  console.log(data);
}
