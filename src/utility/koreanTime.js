export default function convertToKoreanTime(originalDate) {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'short',
    locale: 'ko-KR',
  };

  const date = new Date(originalDate);

  const formattedDate = date.toLocaleDateString('ko-kr', options);

  return formattedDate;
}
