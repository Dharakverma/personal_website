// NOTE: We are required to wait for the document to be ready to append before 
// displaying or we have undefined behaviour
$(document).ready(function() {
    // Append iframe to pdf_popout div
    $("#pdf_popout").append("<iframe src='../files/dharak_verma_resume.pdf'></iframe>");
});