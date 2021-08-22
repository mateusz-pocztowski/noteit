export const toBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = error => reject(error);
  });

export const toBase64FromURL = (url: string) =>
  new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
    xhr.onload = () => {
      const reader = new FileReader();
      reader.readAsDataURL(xhr.response);
      reader.addEventListener('loadend', () => {
        resolve(reader.result);
      });
    };
    xhr.onerror = error => reject(error);
  });
