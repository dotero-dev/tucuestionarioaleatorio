var pdfUtil = import('pdf-to-text');
var pdf_path = "RES_FYQ_3ESO_23-24.pdf";
 
pdfUtil.info(pdf_path, function(err, info) {
    if (err) throw(err);
    console.log(info);
});