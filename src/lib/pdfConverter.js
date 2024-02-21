// pdfConverter.js
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

const convertToPDF = (datas, type = null) => {
    const pdf = new jsPDF()

    datas.forEach(async (data,index) =>{
        const canvas = await html2canvas(data, { scale: 1})
        const imgData = canvas.toDataURL('image/webp', 1)

        let ratio = parseInt(canvas.style.width)/parseInt(canvas.style.height)

        let imgOptions = {
            width: pdf.internal.pageSize.getWidth(), // Sesuaikan lebar dengan lebar halaman PDF
            height: pdf.internal.pageSize.getWidth()/ratio // Sesuaikan tinggi dengan tinggi halaman PDF
        };

        if(parseInt(canvas.style.width)<parseInt(canvas.style.height)){
            ratio = parseInt(canvas.style.height)/parseInt(canvas.style.width)

            imgOptions = {
                width: pdf.internal.pageSize.getWidth()/2, // Sesuaikan lebar dengan lebar halaman PDF
                height: (pdf.internal.pageSize.getWidth()*ratio)/2 // Sesuaikan tinggi dengan tinggi halaman PDF
            };
        }
        
        pdf.addImage(imgData, 'PNG', 0, 0, imgOptions.width, imgOptions.height)

        pdf.save(`${type} E-Ticket (${index+1})`)
    })
};


export default convertToPDF