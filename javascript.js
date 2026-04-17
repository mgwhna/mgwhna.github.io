document.addEventListener("click", function (event) {
  //mengambil elemen menu dan tombol hamburger
  const menu = document.getElementById("menu-hamburger");
  const hamburgerButton = document.getElementById("tombol-hamburger");

  //memeriksa apakah yang diklik bagian menu atau tombolnya
  const isClickInsideMenu = menu.contains(event.target);
  const isClickOnButton = hamburgerButton.contains(event.target);

  //jika yang diklik bukan menu dan tombolnya
  if (!isClickInsideMenu && !isClickOnButton) {
    //Tambahkan kode untuk menutup menu di sini
    //Misal hapus kelas membuatnya terlihat
    menu.classList.remove("aktif");
  }
});
