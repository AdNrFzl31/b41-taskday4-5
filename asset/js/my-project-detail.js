debugger
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

document.getElementById("date").innerHTML = `
    <div class="icon-group">
        <i class="fa-solid fa-clock fa-2xl"></i>
        <label for="">${getDistanceTime('2022-10-01', '2022-11-01')}</label>
    </div>
`;
