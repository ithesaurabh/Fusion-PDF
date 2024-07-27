import PDFMerger from 'pdf-merger-js';

var merger = new PDFMerger();

const mergerPdfs = async (p1, p2) => {
  let d = new Date().getTime();
  await merger.add(p1);  // merge all pages. parameter is the path to file and filename.
  await merger.add(p2); 
  // Set metadata
  await merger.setMetadata({
    producer: "Merged using script",
    author: "Saurabh Kumar Jha",
    creator: "KRMADA",
    title: "Coding for a cause"
  });

  await merger.save(`./Output/${d}.pdf`); // save under given name and reset the internal document
  return d;
  // Export the merged PDF as a nodejs Buffer
  // const mergedPdfBuffer = await merger.saveAsBuffer();
  // fs.writeSync('merged.pdf', mergedPdfBuffer);
};

export { mergerPdfs };
