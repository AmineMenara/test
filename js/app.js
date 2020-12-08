var scanner = new Instascan.Scanner({
  video: document.getElementById('preview'),
  scanPeriod: 5,
  mirror: true,
});

scanner.addListener('scan', function (content) {
  alert(content);
  document.getElementById('preview').classList.add('remove-detail');
});

Instascan.Camera.getCameras()
  .then(function (cameras) {
    if (cameras.length > 0) {
      // Change camera 0=front 1=back
      scanner.start(cameras[0]);
    } else {
      console.error('No cameras found.');
      alert('No cameras found.');
    }
  })
  .catch(function (e) {
    console.error(e);
    alert(e);
  });

function closeDetail() {
  document.getElementById('detail').classList.remove('show-detail');
}
