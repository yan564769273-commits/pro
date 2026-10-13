# PORTFOLIO — UI/UX & AI Designer

基于提供的 Prisma 参考设计说明还原的个人作品集。React 18 + Vite + TypeScript + Tailwind CSS 3，使用 Framer Motion 和 Lucide。

## 启动

当前电脑可直接双击 `start-preview.cmd` 启动已安装好的项目，然后在浏览器打开终端显示的地址（默认 http://127.0.0.1:5173）。保持启动窗口开启，关闭窗口即停止服务。

安装 Node.js 20.19+ 或 22.12+ 后，在当前目录执行：

```sh
npm install
npm run dev
```

构建：`npm run build`。产物在 `dist/`，可部署到静态托管平台。`npm run preview` 可预览构建产物。

## 替换内容

主要编辑 `src/content.ts`：

- `profile.name`：名字。
- `profile.photo`：将照片放入 `public/portrait.jpg`，此处填 `/portrait.jpg`。留空显示照片预留区。
- `profile.bio`：个人简介。
- `profile.experiences`：经历列表。
- `profile.email`、`profile.wechat`：联系方式。邮箱留空时会显示「联系方式即将补充」，避免使用虚构地址。
- `categories`：四类项目。把真实项目加入对应的 `projects` 数组，即可在弹窗展示。

项目格式：

```ts
{ title: '项目名称', description: '项目背景及你的职责', image: '/projects/example.jpg', url: 'https://example.com', tags: ['UX', 'Design System'] }
```

项目图片置于 `public/projects/`。当前分类封面是代码绘制的设计示意和参考视频，不代表真实个人案例；分类弹窗已作说明。

## 结构与视觉

- `src/App.tsx`：首页视频、导航、关于我、四类项目卡、联系/项目弹窗。
- `src/index.css`：颜色、排版、响应式和视觉示意。
- `src/content.ts`：个人资料和项目数据。

桌面为三段式浏览：全屏首页、关于我、四列作品分类；移动端为纵向布局、两列/单列卡片。所有文字、按钮、示意 UI 均为真实代码。使用原始参考的两条视频资源及 Google Fonts，不包含 AI 生成图片。视频播放依赖外部资源网络；背景视频加载失败时保留静态渐变背景，Google Fonts 失败时回退系统字体。正式上线可将有权使用的视频放进 public/ 后替换地址。

动效尊重系统减少动态效果偏好，首页视频可暂停；弹窗支持 Escape、焦点约束、关闭后恢复焦点和点击遮罩关闭。
