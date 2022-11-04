function hasil() {
  var harga = parseInt(document.getElementById("harga").value);
  var jumlah = parseInt(document.getElementById("jumlah").value);
  var bayar = parseInt(document.getElementById("bayar").value);
  var total = harga * jumlah;

  if (bayar >= total && total >= 640000) {
    var diskon = 0.35;
    var totalPembayaran = total - total * diskon;
    var kembalian = bayar - totalPembayaran;
    document.getElementById("kembalian").innerHTML = kembalian;
    document.getElementById("diskon").innerHTML = "35%";
    document.getElementById("totalPembayaran").innerHTML = totalPembayaran;
    document.getElementById("total").innerHTML = total;
  } else if (bayar >= total && total >= 439000) {
    var diskon = 0.21;
    var totalPembayaran = total - total * diskon;
    var kembalian = bayar - totalPembayaran;
    document.getElementById("kembalian").innerHTML = kembalian;
    document.getElementById("diskon").innerHTML = "21%";
    document.getElementById("totalPembayaran").innerHTML = totalPembayaran;
    document.getElementById("total").innerHTML = total;
  } else if (bayar >= total && total >= 252000) {
    var diskon = 0.11;
    var totalPembayaran = total - total * diskon;
    var kembalian = bayar - totalPembayaran;
    document.getElementById("kembalian").innerHTML = kembalian;
    document.getElementById("diskon").innerHTML = "11%";
    document.getElementById("totalPembayaran").innerHTML = totalPembayaran;
    document.getElementById("total").innerHTML = total;
  }else if(bayar === total){
    var totalPembayaran = total;
    document.getElementById("kembalian").innerHTML = "0";
    document.getElementById("diskon").innerHTML = "0%";
    document.getElementById("totalPembayaran").innerHTML = totalPembayaran;
    document.getElementById("total").innerHTML = total;
    alert("Uang anda passs")
  }else{
    alert("Error uang kamu kurang")
  }
}

