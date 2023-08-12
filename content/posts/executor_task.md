---
title: Executor Tasks
date: 2023-08-08
tags: [new executor brief]
social_image: '/media/logo.png'
description: Comprehensive daily, weekly, and monthly checklist for Executors
---

As an Executor, overseeing various responsibilities can be demanding. This checklist aims to provide you with a streamlined approach to managing tasks effectively on a daily, weekly, and monthly basis.

<!DOCTYPE html>
<html>
<head>
<style>

.checklist {
  list-style-type: none;
  padding: 0;
  font-size: 16px;
}

/* Style for the checkbox */
.checklist input[type="checkbox"] {
  display: none;
}

/* Style for the label (checkbox appearance) */
.checklist label {
  display: block;
  position: relative;
  padding-left: 30px;
  margin-bottom: 8px;
  cursor: pointer;
}

/* Custom checkbox design */
.checklist label::before {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 20px;
  height: 20px;
  border: 2px solid #ccc;
  background-color: white;
}

/* Checkbox checked style */
.checklist input[type="checkbox"]:checked + label::before {
  background-color: #007bff;
  border-color: #007bff;
}

/* Checkbox checked mark */
.checklist input[type="checkbox"]:checked + label::after {
  content: "\2713";
  display: block;
  position: absolute;
  left: 5px;
  top: 1px;
  color: white;
  font-size: 16px;
}

</style>
</head>
<body>

<p>Author: Shimakaze#c</p>

<h2>Daily Checklist</h2>
<ul class="checklist">
  <li>
    <input type="checkbox" id="check1">
    <label for="check1">Claim Mia's 3 Daily Meals</label>
  </li>
  <li>
    <input type="checkbox" id="check2">
    <label for="check2">Complete 4 Daily Bounties (Asperia, Mirroria, Domain 9)</label>
  </li>
  <li>
    <input type="checkbox" id="check3">
    <label for="check3">Do 1 run of Joint Operations for 3 habo/scylla fusion chips</label>
  </li>
  <li>
    <input type="checkbox" id="check4">
    <label for="check4">Claim your Artificial Island resources</label>
  </li>
  <li>
    <input type="checkbox" id="check5">
    <label for="check5">Spend your Appointed Research energy</label>
  </li>
  <li>
    <input type="checkbox" id="check6">
    <label for="check6">Turn in your daily Crew supply</label>
  </li>
  <li>
    <input type="checkbox" id="check7">
    <label for="check7">Optional: Get your daily 1500 support points</label>
  </li>
</ul>

<h2>Weekly Checklist</h2>
<ul class="checklist">
  <li>
    <input type="checkbox" id="check8">
    <label for="check8">Consume charges of Frontier Clash & Void Rift</label>
  </li>
  <li>
    <input type="checkbox" id="check9">
    <label for="check9">Takedown the 4 Personal Artificial Island bosses</label>
  </li>
  <li>
    <input type="checkbox" id="check10">
    <label for="check10">Buyout resources from your Artificial Island’s Shop</label>
  </li>
  <li>
    <input type="checkbox" id="check11">
    <label for="check11">Complete your Crew missions</label>
  </li>
  <li>
    <input type="checkbox" id="check12">
    <label for="check12">Complete 1 run of this week's Challenge Raid</label>
  </li>
  <li>
    <input type="checkbox" id="check13">
    <label for="check13">Complete runs of Sequential Abyss/Bygone for weekly reward</label>
  </li>
  <li>
    <input type="checkbox" id="check14">
    <label for="check14">Complete run of Wormhole for weekly reward</label>
  </li>
  <li>
    <input type="checkbox" id="check15">
    <label for="check15">Complete Mirroria’s Msec security bounties</label>
  </li>
  <li>
    <input type="checkbox" id="check16">
    <label for="check16">Buyout the weekly reset items from your Commissary</label>
  </li>
  <li>
    <input type="checkbox" id="check17">
    <label for="check17">Collect all the field energy in Domain 9 (if unlocked)</label>
  </li>
  <li>
    <input type="checkbox" id="check18">
    <label for="check18">Buyout Fishing shop/Turn in Fish</label>
  </li>
</ul>

<h2>Monthly Checklist</h2>
<ul class="checklist">
  <li>
    <input type="checkbox" id="check19">
    <label for="check19">Origin of War ongoing, push floors</label>
  </li>
  <li>
    <input type="checkbox" id="check20">
    <label for="check20">Void Abyss Reset, push to floor 6 again</label>
  </li>
  <li>
    <input type="checkbox" id="check21">
    <label for="check21">PvP ranking push for higher ranking and monthly DC</label>
  </li>
  <li>
    <input type="checkbox" id="check22">
    <label for="check22">Mirroria’s Racing Minigame monthly DC</label>
  </li>
  <li>
    <input type="checkbox" id="check23">
    <label for="check23">Buyout Monthly items from your Artificial Island shop (Red Matrix pulls)</label>
  </li>
</ul>

<script>
// Function to refresh the checklist at 5 AM every day
function refreshChecklist() {
  const now = new Date();
  const refreshTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 5, 0, 0); // Set to 5 AM
  const timeUntilRefresh = refreshTime - now;

  if (timeUntilRefresh <= 0) {
    // Reset checkbox states and update the checklist
    const checkboxes = document.querySelectorAll('.checklist input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
      checkbox.checked = false;
    });
  }

  setTimeout(refreshChecklist, timeUntilRefresh);
}

// Call the function to initiate the countdown
refreshChecklist();
</script>

</body>
</html>
