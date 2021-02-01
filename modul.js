AOS.init();

$(document).on('click','.send_form', function(){ 
var input_uangdunia = document.getElementById('wa_username');

/* Whatsapp Settings */ 
var walink = 'https://web.whatsapp.com/send', 
    phone = '6281229706872', 
    pesanan = '_*-----PESANAN TELAH DIBUAT-----*_', 
    transfer = '_*-----LAKUKAN TRANSFER-----*_', 
    ketentuan = '_*-----KETENTUAN PENGGUNA-----*_', 
    walink2 = 'Nama Bank : Bank Rakyat Indonesia (BRI)', 
    walink3 = 'Atas Nama : Hazira Azza Faroni', 
    walink4 = 'No.Rek : 664201030178536', 
    walink5 = 'Pengiriman followers dilakukan selama 2-24 jam tergantung banyaknya pesanan. Selama pengiriman, akun *TIDAK BOLEH* di private.', 
    text_yes = 'Dikonfirmasi, silahkan kirim.', 
    text_no = 'Isi semua Formulir lalu klik konfirmasi.'; 
 
/* Smartphone Support */ 
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) { 
var walink = 'whatsapp://send'; 
} 
 
if("" != input_uangdunia.value){ 
 
 /* Call Input Form */ 
var input_select1 = $("#wa_select :selected").text(), 
    input_name1 = $("#wa_name").val(), 
    input_username1 = $("#wa_username").val(), 
    input_codepromo1 = $("#wa_codepromo").val(), 
    input_textarea1 = $("#wa_textarea").val(); 
 
/* Final Whatsapp URL */ 
var uangdunia_whatsapp = walink + '?phone=' + phone + '&text=' + pesanan + '%0A' + 
    'Nama : ' + input_name1 + '%0A' + 
    'Username : ' + input_username1 + '%0A' + 
    'Order : ' + input_select1 + '%0A' + 
    'Kode promo : ' + input_codepromo1 + '%0A' + 
    'Catatan : ' + input_textarea1 + '%0A%0A' + transfer + '%0A' + walink2 +'%0A' + walink3 +'%0A' + walink4 +'%0A%0A' + ketentuan +'%0A' +walink5;
 
/* Whatsapp Window Open */ 
window.open(uangdunia_whatsapp,'_blank'); 
document.getElementById("text-info").innerHTML = '<span class="yes">'+text_yes+'</span>'; 
} else { 
document.getElementById("text-info").innerHTML = '<span class="no">'+text_no+'</span>'; 
} 
});

$(document).ready(function () { 
  var license = $('#license-code').text(),
          myLicense = atob(license),
      tpllc = $('#myIdBlog').text(),
      second = 10;
      console.log(myLicense);
    if (myLicense == tpllc) {
        return false
    } else {
        $('body').append('<style>body{background:#000!important;overflow:hidden}#peringatan span{font-size:50px}#peringatan{z-index:999999999;position:fixed;top:0;right:0;left:0;padding:20% 0;height:100%;text-align:center;background:rgba(248,40,40,0.97);color:#fff}}</style><div id="peringatan"><h4>Activate Templates</h4><p>Silahkan hubungi  <b>www.uangdunia.com</b> untuk mendapatkan lisensi Template</p><span id="aktivasi">'+second+'</span></div>');
        setInterval(function () {
      second <= 1 ? window.location.href = "https://www.uangdunia.com/" : $('#aktivasi').text(--second);
    }, 1e3)
    }
});

$(document).ready(function(){$(&quot;#flippy&quot;).click(function(){$(&quot;#flippanel&quot;).slideToggle(&quot;normal&quot;)})});