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
    <svg xmlns="http://www.w3.org/2000/svg" width="120" height="28" role="img" aria-label="Age: ${age}">
      <title>Age: ${age} (Next birthday in ${daysUntilBirthday} days)</title>
      <g shape-rendering="crispEdges">
        <rect width="45" height="28" fill="#555"/>
        <rect x="45" width="75" height="28" fill="#6AD3F7"/>
      </g>
      <g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" font-size="12">
        <text x="22.5" y="18" fill="#fff">Age</text>
        <text x="82.5" y="18" fill="#000">${age}</text>
      </g>
    </svg>
  `;
  
  res.setHeader('Content-Type', 'image/svg+xml');
  res.status(200).send(svg);
};