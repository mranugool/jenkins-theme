window.addEventListener('load', () => {
  const header = document.querySelector('#page-header');
  if (header) {
    header.style.backgroundColor = '#002b36';
    header.style.color = '#ffffff';
  }

  // ลองเปลี่ยนข้อความ Title
  const title = document.querySelector('h1');
  if (title) {
    title.textContent = '🚀 Jenkins Customized by DiTC';
  }
});
