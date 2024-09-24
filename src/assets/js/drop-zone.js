// Вимагає використання id атрибуту,
// тож обмежує кількість полей для завантаження файлів до 1
// if (document.querySelector("#drop-zone")) {
//   const dropZone = document.getElementById("drop-zone");
//   const fileInput = document.getElementById("file-input");

//   function handleDrop(e) {
//     e.preventDefault();
//     dropZone.classList.toggle("drag-over", false);

//     const files = e.dataTransfer.files;
//     if (files.length) {
//       document.getElementById("file-input").files = files;
//       updateThumbnail(files[0]);
//     }
//   }

//   function handleDragOver(e) {
//     e.preventDefault();
//     dropZone.classList.toggle("drag-over", true);
//   }

//   function handleDragLeave(e) {
//     dropZone.classList.toggle("drag-over", false);
//   }

//   // Не працює якщо користувач завантажує кілька файлів або вибирає файл кілька разів
//   function updateThumbnail(file) {
//     const thumbnail = document.createElement("div");
//     thumbnail.innerHTML = file.name;
//     document.getElementById("drop-zone").appendChild(thumbnail);
//   }

//   dropZone.addEventListener("dragover", handleDragOver);
//   dropZone.addEventListener("dragleave", handleDragLeave);
//   dropZone.addEventListener("drop", handleDrop);

//   document.getElementById("file-input").addEventListener("change", function() {
//     updateThumbnail(this.files[0]);
//   });

//   dropZone.addEventListener("click", fileInput.click);
// }

function setupDropZone(dropZone) {
  const fileInput = dropZone.getElementsByTagName("input")[0];
  const fileList = dropZone.getElementsByClassName("file-list")[0];

  function handleDrop(e) {
    e.preventDefault();
    dropZone.classList.toggle("drag-over", false);

    const files = e.dataTransfer.files;
    
    if (files.length) {
      fileInput.files = files;
      updateFileList();
    }
  }

  function handleDragOver(e) {
    e.preventDefault();
    dropZone.classList.toggle("drag-over", true);
  }

  function handleDragLeave(e) {
    dropZone.classList.toggle("drag-over", false);
  }

  function updateFileList() {
    fileList.replaceChildren(); // https://stackoverflow.com/a/65413839

    const files = Array.from(fileInput.files);
    const fileNames = files.map((f) => `<span class="file-name">${f.name}</span>`);

    fileList.innerHTML = fileNames.join("");
  }
  
  dropZone.addEventListener("click", () => fileInput.click());
  dropZone.addEventListener("drop", handleDrop);
  dropZone.addEventListener("dragover", handleDragOver);
  dropZone.addEventListener("dragleave", handleDragLeave);
  fileInput.addEventListener("change", updateFileList);
}


document.querySelectorAll(".file-input").forEach(setupDropZone);
