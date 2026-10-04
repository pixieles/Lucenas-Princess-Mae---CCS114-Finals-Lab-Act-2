function evaluateScore(score) {
  if (isNaN(score) || score <= 0 || score > 100) {
    return "Invalid score";
  } else if (score >= 90) {
    return "Excellent";
  } else if (score >= 75) {
    return "Passed";
  } else {
    return "Failed";
  }
}
 

function remarkClass(remark) {
  if (remark === "Excellent") return "excellent";
  if (remark === "Passed") return "passed";
  if (remark === "Failed") return "failed";
  return "invalid";
}
 
function showResult(html) {
  document.getElementById("result").innerHTML = html;
}
 

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}
 
function startProgram() {
  showResult("");
 
  alert("Welcome to the Score Checker! Handa ka na bang masampal ng katotohanan? Halika na!");
 

  let name = prompt("Enter your name:");
  if (name === null || name.trim() === "") {
    showResult('<p class="remark invalid">Invalid input: Name is Required!</p>');
    return;
  }
  name = name.trim();
 
 
  let scoreInput = prompt("Enter your score (1-100):");
  if (scoreInput === null || scoreInput.trim() === "") {
    showResult('<p class="remark invalid">Invalid input: Score is Required!</p>');
    return;
  }
 
  
  const score = Number(scoreInput.trim());
 

  const proceed = confirm("Hello, " + name + "! Do you want to continue and see your result? Sure ka na talaga d'yan?");
  if (!proceed) {
    showResult('<p class="name">Cancelled. Click Start to try again.</p>');
    return;
  }
 
  
  const remark = evaluateScore(score);
  const safeName = escapeHtml(name);
 
  if (remark === "Invalid score") {
    showResult(
      '<p class="name">' + safeName + '</p>' +
      '<p class="remark invalid">' + remark + '</p>' +
      '<p class="name">Score must be a number from 1 to 100.</p>'
    );
  } else {
    showResult(
      '<p class="name">' + safeName + '</p>' +
      '<p class="score ' + remarkClass(remark) + '">' + score + '</p>' +
      '<p class="remark ' + remarkClass(remark) + '">' + remark + '</p>'
    );
  }
}
 
document.getElementById("startBtn").addEventListener("click", startProgram);
 