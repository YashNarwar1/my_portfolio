export const DownloadCv = () => {
  const link = document.createElement("a");
  link.href = "Yash_Narwar_CV.pdf";
  link.download = "Yash_Narwar_CV.pdf";
  link.click();
};
