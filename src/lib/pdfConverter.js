/** @format */

// pdfConverter.js
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const convertToPDF = (datas, type = null) => {
  const pdf = new jsPDF();

  datas.forEach(async (data, index) => {
    const canvas = await html2canvas(data, { scale: 4 });
    const imgData = canvas.toDataURL("image/jpeg", 4);

    let ratio = parseInt(canvas.style.width) / parseInt(canvas.style.height);
    let y = 0;
    let x = 0;

    let imgOptions = {
      width: pdf.internal.pageSize.getWidth(), // Sesuaikan lebar dengan lebar halaman PDF
      height: pdf.internal.pageSize.getWidth() / ratio, // Sesuaikan tinggi dengan tinggi halaman PDF
    };

    if (parseInt(canvas.style.width) < parseInt(canvas.style.height)) {
      ratio = parseInt(canvas.style.height) / parseInt(canvas.style.width);

      imgOptions = {
        width: pdf.internal.pageSize.getHeight() / ratio, // Sesuaikan lebar dengan lebar halaman PDF
        height: pdf.internal.pageSize.getHeight(), // Sesuaikan tinggi dengan tinggi halaman PDF
      };

      x = (pdf.internal.pageSize.getWidth() - imgOptions.width) / 2;
      y = (pdf.internal.pageSize.getHeight() - imgOptions.height) / 2;
    }

    pdf.addImage(imgData, "JPEG", x, y, imgOptions.width, imgOptions.height);
    pdf.save(`${type} E-Ticket (${index + 1})`);
  });
};

export default convertToPDF;
