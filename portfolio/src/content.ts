// 在这里替换个人资料。照片放入 public/，例如 photo: '/portrait.jpg'。
export const profile = {
  name: '闫凯旋',
  role: 'UI/UX & AI DESIGNER',
  photo: '/portrait.jpg',
  bio: '我是一名 UI/UX 与 AI 设计师，关注人与产品之间的真实连接。从复杂系统到细微交互，我希望让每一次体验更清晰、更自然，也更有温度。',
  philosophy: '以用户体验为起点，将理性的设计思考与 AI 的无限可能连接，创造有意义的数字体验。',
  email: '', // 填写真实邮箱后，联系弹窗会自动显示邮件及复制按钮。
  wechat: '',
  experiences: [
    { period: '时间待补充', title: '职位 / 公司名称', description: '在这里介绍你的工作经历、职责与代表成果。' },
    { period: '时间待补充', title: '教育 / 成长经历', description: '在这里补充教育背景、专业方向或重要的设计经历。' },
  ],
};

export type CategoryId = 'web' | 'enterprise' | 'dashboard' | 'ai';
export type Project = { title: string; description: string; image?: string; url?: string; tags: string[] };
export const categories: { id: CategoryId; number: string; name: string; english: string; description: string; tags: string[]; projects: Project[] }[] = [
  { id: 'web', number: '01', name: 'Web 设计', english: 'Digital experiences', description: '从第一眼心动，到每一步流畅。', tags: ['品牌网站', '响应式体验'], projects: [] },
  { id: 'enterprise', number: '02', name: 'B 端设计', english: 'Clarity in complexity', description: '让复杂业务，拥有清晰的答案。', tags: ['企业产品', '设计系统'], projects: [] },
  { id: 'dashboard', number: '03', name: '大屏设计', english: 'Data tells a story', description: '让数据被看见，让洞察更直观。', tags: ['数据可视化', '数字大屏'], projects: [] },
  { id: 'ai', number: '04', name: 'AI 探索', english: 'Beyond the expected', description: '与 AI 共创，探索想象力的边界。', tags: ['生成式设计', '创意实验'], projects: [] },
];
export const heroVideo = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4';
export const creativeVideo = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4';
