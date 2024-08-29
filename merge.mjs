import PDFMerger from 'pdf-merger-js';

const mergerPdfs = async (p1, p2) => {
  const merger = new PDFMerger();
  let d = new Date().getTime();
  await merger.add(p1); 
  await merger.add(p2); 
  // Set metadata
  await merger.setMetadata({
    producer: "Merged using script",
    author: "Saurabh Kumar Jha",
    creator: "KRMADA",
    title: "Coding for a cause"
  });

  await merger.save(`./Output/${d}.pdf`);
};

export { mergerPdfs };
