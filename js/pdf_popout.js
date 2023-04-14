// NOTE: We are required to wait for the document to be ready to append before 
// displaying or we have undefined behaviour
$(document).ready(function() {
    // Append iframe to pdf_popout div
    // NOTE: The iframe source must be found by loading the website -> inspecting the page -> finding the .pdf -> copying the link address
    $("#pdf_popout").append("<iframe src='dharakverma.github.io/files/dharak_verma_resume.pdf'></iframe>");
});