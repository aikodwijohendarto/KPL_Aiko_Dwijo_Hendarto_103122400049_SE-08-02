const sekarang = new Date();

const formatter = new Intl.DateTimeFormat('id-ID', {
  weekday: 'long',
  day: '2-digit',
  month: 'long',
  year: 'numeric'
});

console.log(formatter.format(sekarang));