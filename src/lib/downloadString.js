const downloadString = (data, filename, ext) => {
  const dataStr = `data:text/json;charset=utf-8,${encodeURIComponent(data)}`;
  const downloadAnchorNode = document.createElement('a');

  downloadAnchorNode.setAttribute('href', dataStr);
  downloadAnchorNode.setAttribute('download', `${filename}.${ext}`);

  document.body.appendChild(downloadAnchorNode); // required for firefox

  downloadAnchorNode.click();
  downloadAnchorNode.remove();
};

export default downloadString;
