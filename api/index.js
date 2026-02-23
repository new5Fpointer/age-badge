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
    
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="20"><text x="0" y="15" fill="#FE7398" font-size="14" font-family="Arial,sans-serif">${age}</text></svg>`;
    
    res.status(200).send(svg);
};