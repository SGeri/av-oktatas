import { GeneratePdfRequest } from "@/lib/types";
import fontkit from "@pdf-lib/fontkit";
import dayjs from "dayjs";
import { PDFDocument } from "pdf-lib";

const TEMPLATE_URL =
  "https://innopay-av-oktatas.vercel.app/INNOPAY_AV_CERT_TEMPLATE.pdf";
const FONT_URL = "https://innopay-av-oktatas.vercel.app/Inter-Regular.ttf";

export async function POST(request: Request) {
  const { name }: GeneratePdfRequest = await request.json();
  if (!name) return new Response("Missing name", { status: 400 });

  const fileBuffer = await getFile(TEMPLATE_URL);
  const fileName = encodeURI(generateFileName(name));
  const modifiedUintArray8 = await addTextToPdf(fileBuffer, name, new Date());

  return new Response(modifiedUintArray8, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${fileName}"`,
      "Content-Length": `${modifiedUintArray8.length}`,
      "X-File-Name": fileName,
    },
  });
}

const getFile = async (url: string): Promise<Buffer> => {
  const response = await fetch(url);
  const arrayBuffer = await response.arrayBuffer();
  return Buffer.from(arrayBuffer);
};

function generateFileName(name: string) {
  return `${name.toLowerCase().replace(" ", "_")}_av_jegyzokonyv.pdf`;
}

async function addTextToPdf(
  fileBuffer: Buffer,
  name: string,
  now: Date
): Promise<Uint8Array> {
  const pdfDoc = await PDFDocument.load(fileBuffer);
  pdfDoc.registerFontkit(fontkit);

  const fontResponse = await fetch(FONT_URL);
  const fontArrayBuffer = await fontResponse.arrayBuffer();
  const fontBytes = new Uint8Array(fontArrayBuffer);

  const customFont = await pdfDoc.embedFont(fontBytes);

  const pages = pdfDoc.getPages();
  const firstPage = pages[0];

  const expirationDate = dayjs(now).add(364, "day").format("YYYY. MM. DD.");
  const date = "Budapest, " + dayjs(now).format("YYYY. MM. DD.");

  // Name
  firstPage.drawText(name, {
    x: 200,
    y: firstPage.getHeight() - 326,
    size: 14,
    font: customFont,
  });

  // Expire date
  firstPage.drawText(expirationDate, {
    x: 190,
    y: firstPage.getHeight() - 470,
    size: 14,
    font: customFont,
  });

  // Date
  firstPage.drawText(date, {
    x: 108,
    y: firstPage.getHeight() - 523,
    size: 14,
    font: customFont,
  });

  const modifiedPdfBytes = await pdfDoc.save();

  return modifiedPdfBytes;
}
