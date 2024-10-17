document.getElementById('addImages').addEventListener('click', function() {
    const input = document.getElementById('imageInput');
    const imagePreview = document.getElementById('imagePreview');

    for (let i = 0; i < input.files.length; i++) {
        const file = input.files[i];
        const reader = new FileReader();
        
        reader.onload = function(event) {
            const img = document.createElement('img');
            img.src = event.target.result;
            imagePreview.appendChild(img);
        }
        
        reader.readAsDataURL(file);
    }
});

document.getElementById('generateReport').addEventListener('click', function() {
    const ocorridos = document.getElementById('ocorridos').value;
    const report = document.getElementById('report');
    const imagePreview = document.getElementById('imagePreview');

    report.style.display = 'block';
    report.innerHTML = `<h2>checkliste de recebimento</h2><p>${ocorridos}</p>`;

    const images = imagePreview.getElementsByTagName('img');
    for (let img of images) {
        const newImg = document.createElement('img');
        newImg.src = img.src;
        newImg.style.width = '30%';
        report.appendChild(newImg);
    }
});

document.getElementById('printReport').addEventListener('click', function() {
    const report = document.getElementById('report');
    const printWindow = window.open('', '', 'width=800,height=600');
    printWindow.document.write('<html><head><title>Imprimir Relatório</title>');
    printWindow.document.write('<style>img { width: 30%; margin-right: 5px; margin-bottom: 5px; }</style>');
    printWindow.document.write('</head><body>');
    printWindow.document.write(report.innerHTML);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
});
