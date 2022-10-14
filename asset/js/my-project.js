let dataProject = [];
function addProject(event) {
    event.preventDefault()

    let nameProject = document.getElementById("input-nameProject").value;
    let descrition = document.getElementById("description").value;

    let startDate = document.getElementById("input-startDate").value;
    let endDate = document.getElementById("input-endDate").value;

    let react = document.getElementById("react").checked;
    let javascript = document.getElementById("javascript").checked;
    let golang = document.getElementById("golang").checked;
    let nodeJs = document.getElementById("nodeJs").checked;

    if (react) {
        react = "fa-brands fa-react fa-xl";
    } else {
        react = "";
    }

    if (javascript) {
        javascript = "fa-brands fa-square-js fa-xl";
    } else {
        javascript = "";
    }

    if (golang) {
        golang = "fa-brands fa-golang fa-xl";
    } else {
        golang = "";
    }

    if (nodeJs) {
        nodeJs = "fa-brands fa-node-js fa-xl";
    } else {
        nodeJs = "";
    }

    let image = document.getElementById("input-image").files;
    if (image.length == 0) {
        return alert("Gambar harus diisi");
    } else {
        image = URL.createObjectURL(image[0]);
    }
    console.log(image);

    let project = {
        nameProject,
        descrition,
        startDate,
        endDate,
        react,
        javascript,
        golang,
        nodeJs,
        image,
        postAt: new Date(),
        author: "Ade Nur Faizal"
    }

    console.log(nameProject)
    console.log(descrition)
    console.log(startDate)
    console.log(endDate)
    console.log(react)
    console.log(javascript)
    console.log(golang)
    console.log(nodeJs)

    dataProject.push(project)
    console.log(dataProject);

    renderProject();

}

function renderProject() {

    document.getElementById("content").innerHTML = ''

    for (let index = 0; index < dataProject.length;  index++){  
        console.log(dataProject[index]);

        document.getElementById("content").innerHTML += `
        <div class="card" id="card">
            <a href="/asset/html/my-project-detail.html">
                <img src="${dataProject[index].image}" alt="gambar avatar" class="image" />
                <div class="card-body">
                    <div>
                        <h3>${dataProject[index].nameProject} | ${getFullTime(dataProject[index].postAt)}</h3>
                        <span> durasi : ${getDistanceTime(dataProject[index].startDate, dataProject[index].endDate)} | ${dataProject[index].author} </span>
                    </div>
                    <p>
                        ${dataProject[index].descrition}
                    </p>
                    <div class="icon-group">
                        <i class="${dataProject[index].react}"></i>
                        <i class="${dataProject[index].javascript}"></i>
                        <i class="${dataProject[index].golang}"></i>
                        <i class="${dataProject[index].nodeJs}"></i>
                    </div>
                </div>
            </a>
            <div class="button-group">
                <button type="button" class="btn-card">edit</button>
                <button type="button" class="btn-card">delete</button>
            </div>
        </div> `
    }
}

function getDistanceTime(starDate, endDate) {
    let timeNow = new Date(endDate);
    let timePost = new Date(starDate);

    let distance = timeNow - timePost; 
    console.log(distance);
  
    let milisecond = 1000;
    let secondInHours = 3600; 
    let hoursInDay = 24; 
    let dayInMonth = 30;
    let monthInYear = 12;  
  
    let distanceYear = Math.floor(
      distance / (milisecond * secondInHours * hoursInDay * dayInMonth * monthInYear)
    );
  
    let distanceMonth = Math.floor(distance / (milisecond * 60 * 60 * 24 * 30));
    let distanceDay = Math.floor(distance / (milisecond * 60 * 60 * 24));
    let distanceHours = Math.floor(distance / (milisecond * 60 * 60));
    let distanceMinutes = Math.floor(distance / (milisecond * 60));
    let distanceSecond = Math.floor(distance / milisecond);
  debugger
    if (distanceYear > 0) {
      return `${distanceYear} Year ago`  
    } else if (distanceMonth > 0) {
      return `${distanceMonth} Month ago`
    } else if (distanceDay > 0) {
      return `${distanceDay} Day ago`;
    } else if (distanceHours > 0) {
      return `${distanceHours} Hours ago`;
    } else if (distanceMinutes > 0) {
      return `${distanceMinutes} Minutes ago`;
    } else {
      return `${distanceSecond} Seconds ago`;
    }
  }

  function getFullTime(time) {
    let year = time.getFullYear()
    console.log(year)

    return `${year}`
}

