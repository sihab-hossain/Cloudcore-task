export function parseShortDescription(short_desc) {
    const lowerDesc = short_desc.toLowerCase();
  
    if (lowerDesc.includes("fabric") && lowerDesc.includes("padding")) {
      return parseJacketDescription(short_desc);
    } else if (lowerDesc.includes("available colors")) {
      return parseHoodieDescription(short_desc);
    } else {
      return { type: "unknown", raw: short_desc };
    }
  }
  
  function parseJacketDescription(desc) {
    const callMatch = desc.match(/Call\s*:\s*\u260e?(\d+)/);
    const contact = callMatch ? callMatch[1] : "";
  
    const sizes = [];
    const sizeRegex = /\*\s*(\w+)\s*\(Chest\s*([\d\"]+),\s*Length\s*([\d\"]+)\)/g;
    let match;
    while ((match = sizeRegex.exec(desc)) !== null) {
      sizes.push({ label: match[1], chest: match[2], length: match[3] });
    }
  
    return {
      type: "jacket",
      title: desc.split("\n")[0],
      fabric: desc.match(/Fabric:\s*(.*)/)?.[1] || "",
      swing: desc.match(/Swing:\s*(.*)/)?.[1] || "",
      zipper: desc.match(/Zipper:\s*(.*)/)?.[1] || "",
      padding: desc.match(/Padding:\s*(.*)/)?.[1] || "",
      sizes,
      contact,
      location: desc.match(/Visit us at:\s*(.*)/i)?.[1] || "",
    };
  }
  
  function parseHoodieDescription(desc) {
    const colors = desc.match(/Available Colors:\s*([\s\S]*?)\n/)?.[1] || "";
    const features = [];
    const featureRegex = /\u2714\s*(.*)/g;
    let match;
    while ((match = featureRegex.exec(desc)) !== null) {
      features.push(match[1]);
    }
  
    return {
      type: "hoodie",
      title: "Cool Hoodie Collection",
      colors: colors.split("|").map(c => c.trim()),
      sizes: "Check out the size chart attached",
      features,
      cta: desc.includes("\uD83D\uDC49") ? desc.split("\uD83D\uDC49")[1].trim() : "",
    };
  }
  