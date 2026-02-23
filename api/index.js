module.exports = (req, res) => {
    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 'no-cache');
    
    // 出生日期：2012年12月18日
    const birthYear = 2012;
    const birthMonth = 11;
    const birthDay = 18;
    
    const now = new Date();
    let age = now.getFullYear() - birthYear;
    if (now.getMonth() < birthMonth || (now.getMonth() === birthMonth && now.getDate() < birthDay)) {
        age--;
    }
    
    const ageStr = age.toString();
    const fontSize = 14;
    const charWidth = fontSize * 0.6; // 每个字符约0.6倍字体宽度
    const width = Math.max(30, ageStr.length * charWidth + 5);
    const height = fontSize + 4;
    
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#FE7398"/><stop offset="100%" stop-color="#6AD3F7"/></linearGradient></defs><text x="0" y="${fontSize}" fill="url(#g)" font-size="${fontSize}" font-family="Arial,sans-serif">${age}</text></svg>`;
    
    res.status(200).send(svg);
};