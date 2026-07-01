const monoFont = {
A:"𝐀",B:"𝐁",C:"𝐂",D:"𝐃",E:"𝐄",
F:"𝐅",G:"𝐆",H:"𝐇",I:"𝐈",J:"𝐉",
K:"𝐊",L:"𝐋",M:"𝐌",N:"𝐍",O:"𝐎",
P:"𝐏",Q:"𝐐",R:"𝐑",S:"𝐒",T:"𝐓",
U:"𝐔",V:"𝐕",W:"𝐖",X:"𝐗",Y:"𝐘",
Z:"𝐙"

export default function stylizedChar(text) {
  return [...text].map(s => monoFont[s] || s).join("")
}