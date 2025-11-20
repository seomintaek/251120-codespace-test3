

// 기술 공구 데이터
const tools = [
  {
    name: '드라이버',
    description: '나사나 볼트를 조이거나 풀 때 사용하는 공구입니다.',
    icon: '🔧',
  },
  {
    name: '글루건',
    description: '뜨거운 접착제를 녹여서 다양한 재료를 붙일 때 사용하는 공구입니다.',
    icon: '🪠',
  },
  {
    name: '열선커터기',
    description: '열선을 이용해 플라스틱, 스티로폼 등을 깔끔하게 자를 수 있는 공구입니다.',
    icon: '✂️',
  },
];

// 카드 렌더링 함수
function renderToolCards() {
  return tools.map(tool => `
    <div class="tool-card">
      <div class="tool-icon">${tool.icon}</div>
      <div class="tool-name">${tool.name}</div>
      <div class="tool-desc">${tool.description}</div>
    </div>
  `).join('');
}

document.querySelector('#app').innerHTML = `
  <div class="tools-app">
    <h1>기술 공구 소개</h1>
    <div class="tools-container">
      ${renderToolCards()}
    </div>
  </div>
`;
