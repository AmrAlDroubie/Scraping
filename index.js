async function data(studentID) {
  const req = await fetch(
    `http://localhost:8010/proxy?branch=1&sub-branch=p50&city=6&stnumber=${studentID}`
  );
  const data = await req.text();
  return data;
}

async function htmlRender(studentID) {
  const html = await data(studentID);
  const parser = new DOMParser();
  const dom = parser.parseFromString(html, "text/html");
  return dom;
}

async function storeData(studentID) {
  const dom = await htmlRender(studentID);
  const student = {};
  const infoKeys = [
    "id",
    "certificate",
    "year",
    "city",
    "fullName",
    "motherName",
    "school",
    "result",
  ];
  const studentInfo = dom.querySelectorAll(".student-info .info-row");
  studentInfo.forEach((data, index) => {
    let value = data
      .querySelectorAll("div")[1]
      .textContent.toString()
      .replace(":", "")
      .replace(/\s+/g, " ");
    student[infoKeys[index]] = value;
  });
  student.id = Number(student.id);

  const subjectsKeys = [
    "arabic",
    "english",
    "france",
    "national",
    "math",
    "phisics",
    "chemistry",
    "sciense",
    "total",
    "islam",
    "grandTotal",
  ];
  const subjectsDom = dom.querySelectorAll(".per-subject");
  const marks = {};
  subjectsDom.forEach((subject, index) => {
    let subjectMark =
      +subject.querySelectorAll(".subject-mark span")[1].textContent;
    marks[subjectsKeys[index]] = subjectMark;
  });
  let lang =
    marks["english"] >= marks["france"] ? marks["france"] : marks["english"];
  marks["netTotal"] = marks["total"] - lang;
  student["marks"] = marks;
  return student;
}

async function postData(studentID) {
  const student = await storeData(studentID);
  const postMethod = await fetch("./api.php", {
    method: "POST",
    headers: {
      "content-type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(student),
  });
  console.log(await postMethod.text());
}

async function App(studentID) {
  postData(studentID);
}

for (let i = 11483; i <= 11812; i++) App(i);
