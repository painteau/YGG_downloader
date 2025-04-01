function checkData() {
  const tables = document.querySelectorAll("table.table");
  if (!tables.length) {
    return;
  } else if (!tables[0].tBodies[0].rows.length) {
    setTimeout(checkData, 100);
  } else {
    tables.forEach((table) => {
      let th = document.createElement("th");
      th.colSpan = 1;
      th.innerText = "Actions";
      table.tHead.rows[0].appendChild(th);
      for (let row of table.tBodies[0].rows) {
        let td = document.createElement("td");

        const link = row.cells[1].firstChild.href;
        const name = link.substr(link.lastIndexOf("/") + 1);
        const id = name.substr(0, name.indexOf("-"));

        td.innerHTML =
          '<a href="https://www.yggtorrent.top/engine/download_torrent?id=' +
          id +
          '" style="background-color: #22282f; color: white; padding: 2px 8px; text-decoration: none; border-radius: 3px; display: inline-block; font-size: 0.9em; transition: background-color 0.3s;">⬇️ Download</a>';
        row.appendChild(td);
      }
    });
  }
}

checkData();
