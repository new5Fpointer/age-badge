module.exports = (req, res) => {
    // 设置头
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');

    // 出生日期：2012年12月18日（月份从0开始，11=12月）
    const birthYear = 2012;
    const birthMonth = 11;  // 12月
    const birthDay = 18;

    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth();
    const currentDay = now.getDate();

    // 计算年龄
    let age = currentYear - birthYear;

    // 如果今年生日还没到，减1岁
    if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
        age--;
    }

    // 计算距离下次生日还有多少天
    let nextBirthday = new Date(currentYear, birthMonth, birthDay);
    if (now > nextBirthday) {
        nextBirthday = new Date(currentYear + 1, birthMonth, birthDay);
    }
    const daysUntilBirthday = Math.ceil((nextBirthday - now) / (1000 * 60 * 60 * 24));

    // 返回SVG徽章
    const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${totalWidth}" height="70">
        <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#FE7398;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#6AD3F7;stop-opacity:1" />
        </linearGradient>
        </defs>
        <text x="0" y="55" 
            fill="url(#grad1)" 
            font-family="Arial Black, sans-serif" 
            font-size="60" 
            font-weight="bold">
        ${age}
        </text>
    </svg>
    `;

    res.setHeader('Content-Type', 'image/svg+xml');
    res.status(200).send(svg);
};