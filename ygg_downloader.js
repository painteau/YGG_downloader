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

        const linkHref = row.cells[1].firstChild.href;
        const name = linkHref.substr(linkHref.lastIndexOf("/") + 1);
        const id = name.substr(0, name.indexOf("-"));

        let downloadLink = document.createElement("a");
        downloadLink.href = "https://www.yggtorrent.top/engine/download_torrent?id=" + id;
        downloadLink.style.backgroundColor = "#22282f";
        downloadLink.style.color = "white";
        downloadLink.style.padding = "2px 6px";
        downloadLink.style.textDecoration = "none";
        downloadLink.style.borderRadius = "3px";
        downloadLink.style.display = "inline-block";
        downloadLink.style.fontSize = "0.9em";
        downloadLink.style.transition = "background-color 0.3s";

        downloadLink.textContent = "⬇️ Download";

        td.appendChild(downloadLink);
        
        row.appendChild(td);
      }
    });
  }
}

checkData();