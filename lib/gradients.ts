// lib/gradients.ts
export const gradients = [
  // 暖色系
  "linear-gradient(135deg, #ff6b6b 0%, #ee5a52 50%, #c92a2a 100%)",
  "linear-gradient(135deg, #ffa500 0%, #ff7f00 50%, #ff6347 100%)",
  "linear-gradient(135deg, #ffd700 0%, #ffb700 50%, #ff8c00 100%)",
  
  // 涼色系
  "linear-gradient(135deg, #667eea 0%, #0a042e 50%, #7b25d1 100%)",
  "linear-gradient(135deg, #4facfe 0%, #00f2fe 50%, #43e97b 100%)",
  "linear-gradient(135deg, #0093e9 0%, #80d0c0 50%, #02fee0 100%)",
  
  // 緑色系
  "linear-gradient(135deg, #11998e 0%, #38ef7d 50%, #1a7f3a 100%)",
  "linear-gradient(135deg, #56ab2f 0%, #a8edea 50%, #fed6e3 100%)",
  
  // ピンク系
  "linear-gradient(135deg, #f093fb 0%, #f5576c 50%, #d63031 100%)",
  "linear-gradient(135deg, #fa709a 0%, #fee140 50%, #30b3ca 100%)",
  
  // 紫系
  "linear-gradient(135deg, #9d50bb 0%, #6e48aa 50%, #2e2e78 100%)",
  "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
  
  // 青系
  "linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #7aa3e5 100%)",
  "linear-gradient(135deg, #0077b6 0%, #00b4d8 50%, #90e0ef 100%)",
  
  // ニュートラル系
  "linear-gradient(135deg, #434343 0%, #000000 50%, #1a1a1a 100%)",
  "linear-gradient(135deg, #373b44 0%, #4286f4 50%, #51c4e2 100%)",
];

export const darkGradients = [
  // ダークモード用
  "linear-gradient(135deg, #0f0c29 0%, #1a0033 50%, #16213e 100%)",
  "linear-gradient(135deg, #0a0e27 0%, #16213e 50%, #1a1a2e 100%)",
  "linear-gradient(135deg, #1d1d2d 0%, #2d3561 50%, #1e1e3f 100%)",
  "linear-gradient(135deg, #16213e 0%, #0f3460 50%, #533483 100%)",
  "linear-gradient(135deg, #1a1520 0%, #2d1b3d 50%, #1d0d3d 100%)",
];

export const getRandomGradient = (): string => {
  const randomIndex = Math.floor(Math.random() * gradients.length);
  return gradients[randomIndex];
};

export const getRandomDarkGradient = (): string => {
  const randomIndex = Math.floor(Math.random() * darkGradients.length);
  return darkGradients[randomIndex];
};

export const applyRandomBackground = (): void => {
  const isDarkMode = document.body.classList.contains("dark-mode");
  const gradient = isDarkMode ? getRandomDarkGradient() : getRandomGradient();
  document.documentElement.style.setProperty("--bg-gradient", gradient);
};
