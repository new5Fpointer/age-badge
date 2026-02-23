module.exports = (req, res) => {
    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 'no-cache');
    
    const birthYear = 2012, birthMonth = 11, birthDay = 18;
    const now = new Date();
    let age = now.getFullYear() - birthYear;
    if (now.getMonth() < birthMonth || (now.getMonth() === birthMonth && now.getDate() < birthDay)) age--;
    
    const ageStr = age.toString();
    const fontSize = 14;
    const textWidth = ageStr.length * fontSize * 0.6;
    const width = textWidth;
    const height = fontSize;
    
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#FE7398"/><stop offset="100%" stop-color="#6AD3F7"/></linearGradient></defs><text x="0" y="11" fill="url(#g)" font-size="${fontSize}" font-family="Arial,sans-serif" font-weight="bold">${age}</text></svg>`;
    
    res.status(200).send(svg);
};