import { useEffect, useRef, useState, type ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, ArrowDown, Asterisk, Pause, Play, X, Copy, Check, Mail, Image, Plus } from 'lucide-react';
import { categories, profile, heroVideo, creativeVideo } from './content';
import TiltedCard from './TiltedCard';

function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduce = useReducedMotion();
  return <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .12 }} transition={{ duration: .8, delay, ease: [.16, 1, .3, 1] }}>{children}</motion.div>;
}

function ProjectArt({ type }: { type: string }) {
  if (type === 'web') return <div className="art art-web" aria-hidden="true"><div className="browser-mock"><div className="mock-bar"><span>FORM & FIELD</span><span>Explore ↗</span></div><div className="web-layout"><div><small>A quieter perspective.</small><strong>Less, but<br/><i>better.</i></strong><span className="mock-pill">Discover the collection ↗</span></div><div className="sculpture"><span/><span/><span/></div></div><div className="mock-baseline">OBJECTS FOR EVERYDAY LIVING <span>01 — 04</span></div></div><span className="art-caption">WEB / INTERFACE STUDY</span></div>;
  if (type === 'enterprise') return <div className="art art-enterprise" aria-hidden="true"><div className="app-mock"><aside><strong>◈ orbit</strong><span className="selected">Overview</span><span>Workspace</span><span>Projects</span><span>Analytics</span><span>Settings</span></aside><div className="app-content"><div className="mock-bar"><strong>Overview</strong><span>+ New project</span></div><small>Your workspace, at a glance.</small><div className="metrics"><div>Projects<strong>24</strong></div><div>In progress<strong>08</strong></div><div>Completed<strong>16</strong></div></div><div className="chart"><span/><span/><span/><span/><span/><span/><span/><span/><span/></div><div className="mock-rows"><span>Website design <i>In progress</i></span><span>Design system <i>Completed</i></span></div></div></div><span className="art-caption">SAAS / PRODUCT DESIGN STUDY</span></div>;
  if (type === 'dashboard') return <div className="art art-dashboard" aria-hidden="true"><div className="dashboard-mock"><div className="dashboard-title">城市运行数据中心<small>URBAN INTELLIGENCE</small></div><div className="data-stats"><span>28,560<small>实时数据</small></span><span>98.6<small>运行指数</small></span><span>1,204<small>连接节点</small></span></div><div className="data-body"><div className="data-bars">{[35, 70, 45, 90, 55, 75, 100].map((h, i) => <i key={i} style={{height: `${h}%`}}/>)}</div><div className="radar"><span/><span/><span/></div><div className="data-lines"><i/><i/><i/><i/><i/></div></div><div className="data-bottom"/></div><span className="art-caption">DATA / VISUALIZATION STUDY</span></div>;
  return <div className="art art-ai" aria-hidden="true"><video src={creativeVideo} autoPlay muted loop playsInline preload="none" className="ai-video"/><div className="ai-fallback"/><span className="ai-label">Imagine<br/><i>otherwise.</i></span><span className="art-caption">AI / CREATIVE EXPLORATION</span></div>;
}

function Modal({ title, children, onClose }: { title: string; children: ReactNode; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    const dialog = ref.current!;
    dialog.showModal();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { dialog.close(); document.body.style.overflow = overflow; previous?.focus(); };
  }, []);
  return <dialog ref={ref} className="modal" aria-labelledby="modal-title" onCancel={onClose} onClick={e => { if (e.target === e.currentTarget) { const r = e.currentTarget.getBoundingClientRect(); if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) onClose(); } }}><div className="modal-header"><span className="eyebrow">LET’S MAKE SOMETHING MEANINGFUL</span><button className="icon-button" autoFocus onClick={onClose} aria-label="关闭弹窗"><X size={21}/></button></div><h2 id="modal-title">{title}</h2>{children}</dialog>;
}

export default function App() {
  const [contact, setContact] = useState(false);
  const [category, setCategory] = useState<(typeof categories)[number] | null>(null);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const video = useRef<HTMLVideoElement>(null);
  const reduce = useReducedMotion();
  useEffect(() => { if (reduce) video.current?.pause(); }, [reduce]);
  async function toggleVideo() { if (!video.current) return; if (video.current.paused) { try { await video.current.play(); } catch { setVideoError(true); } } else video.current.pause(); }
  async function copyEmail() { try { await navigator.clipboard.writeText(profile.email); setCopied(true); setCopyError(false); } catch { setCopyError(true); } }
  const openContact = () => { setCopied(false); setCopyError(false); setContact(true); };
  return <>
    <a className="skip-link" href="#about">跳至主要内容</a>
    <main>
      <section id="home" className="hero" aria-label="作品集首页">
        <div className="hero-frame">
          <div className="video-fallback"/>
          <video ref={video} className="hero-video" src={heroVideo} autoPlay={!reduce} muted loop playsInline preload="auto" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onError={() => setVideoError(true)}/>
          <div className="hero-shade"/><div className="noise-overlay"/>
          <nav className="main-nav" aria-label="主导航"><a href="#home">首页 <span>Home</span></a><a href="#about">关于我 <span>About</span></a><a href="#work">精选作品 <span>Work</span></a><button onClick={openContact}>联系我 <ArrowUpRight size={13}/></button></nav>
          <div className="hero-top"><a href="#home" className="brand" aria-label="回到首页"><Asterisk size={31} strokeWidth={1.4}/><span>Independent<br/>Designer</span></a><span className="availability"><i/> OPEN TO COLLABORATE</span></div>
          <div className="hero-content">
            <Reveal className="hero-intro"><div className="hero-kicker"><span>DESIGN WITH PURPOSE.</span><span>CREATE WITH CURIOSITY.</span></div></Reveal>
            <motion.h1 initial={reduce ? false : { y: 70, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.2, ease: [.16, 1, .3, 1], delay: .15 }}>PORTFOLIO<span className="title-star">*</span></motion.h1>
            <div className="hero-bottom"><a href="#about"><ArrowDown size={14}/> SCROLL TO EXPLORE</a><span>SELECTED WORK & CREATIVE EXPLORATIONS</span><button className="video-toggle" onClick={toggleVideo} disabled={videoError} aria-label={playing ? '暂停背景视频' : '播放背景视频'}>{playing ? <Pause size={13}/> : <Play size={13}/>}<span>{videoError ? '静态背景' : playing ? 'PAUSE MOTION' : 'PLAY MOTION'}</span></button></div>
          </div>
        </div>
      </section>

      <section id="about" className="about section-shell">
        <div className="section-label"><span><i/> A LITTLE ABOUT ME</span><span>01 / 关于我</span></div>
        <div className="about-grid">
          <Reveal className="portrait-wrap"><div className={`portrait${profile.photo ? ' portrait-with-photo' : ''}`}>{profile.photo ? <TiltedCard imageSrc={profile.photo} altText={`${profile.name}的个人照片`} rotateAmplitude={12} scaleOnHover={1.06} overlayContent={<span className="portrait-mark">The person<br/><i>behind the pixels.</i></span>}/> : <><div className="portrait-cross top-left"/><div className="portrait-cross top-right"/><div className="portrait-cross bottom-left"/><div className="portrait-cross bottom-right"/><div className="portrait-placeholder"><Image size={28} strokeWidth={1}/><span>YOUR PORTRAIT HERE</span><small>留一张照片，认识真实的你</small></div><span className="portrait-mark">The person<br/><i>behind the pixels.</i></span></>}</div><div className="portrait-caption"><span>设计不止于画面，更关乎人与体验。</span><Asterisk size={19}/></div></Reveal>
          <Reveal className="about-copy" delay={.12}><span className="eyebrow">A DESIGNER. A THINKER. AN EXPLORER.</span><h2>你好，我是<span className="name-placeholder">{profile.name}</span><br/>设计体验，<br/><i>也探索可能。</i></h2><p className="about-bio">{profile.bio}</p><div className="skill-tags"><span>UI / UX Design</span><span>Design Systems</span><span>AI Exploration</span></div><div className="experience"><div className="experience-heading"><span>经历 / EXPERIENCE</span><Plus size={15}/></div>{profile.experiences.map((item, i) => <div className="experience-row" key={i}><span>{item.period}</span><div><h3>{item.title}</h3><p>{item.description}</p></div></div>)}</div></Reveal>
        </div>
      </section>

      <section id="work" className="work section-shell">
        <div className="section-label"><span><i/> SELECTED WORK</span><span>02 / 作品与探索</span></div>
        <Reveal className="work-heading"><h2>不同的媒介，同样的好奇心。<br/><i>Ideas take different forms.</i></h2><p>从界面到系统，从数据到想象。<br/>探索我的四个设计方向。</p></Reveal>
        <div className="project-grid">{categories.map((item, i) => <Reveal key={item.id} delay={i * .08}><button className={`project-card project-${item.id}`} onClick={() => setCategory(item)} aria-label={`查看${item.name}项目`}><div className="card-top"><span>{item.number} / {item.english}</span><ArrowUpRight size={20}/></div><ProjectArt type={item.id}/><div className="card-copy"><h3>{item.name}</h3><p>{item.description}</p><div className="card-bottom"><div>{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div><span className="card-arrow"><ArrowRight size={18}/></span></div></div></button></Reveal>)}</div>
        <div className="work-note"><span>持续思考，持续创作。</span><span>ALWAYS CURIOUS. ALWAYS CREATING.</span></div>
      </section>
    </main>
    <footer className="footer"><div><Asterisk size={22}/><span>让下一个想法，成为现实。</span></div><button onClick={openContact}>LET’S TALK <ArrowUpRight size={18}/></button><span>© {new Date().getFullYear()} · PERSONAL PORTFOLIO</span><a href="#home" aria-label="返回顶部">BACK TO TOP <ArrowUpRight size={15}/></a></footer>
    {contact && <Modal title="一起创造点什么。" onClose={() => setContact(false)}><p className="modal-description">关于设计、合作，或一个有趣的想法，期待与你聊聊。</p>{profile.email ? <div className="contact-actions"><a className="contact-email" href={`mailto:${profile.email}`}><Mail size={20}/>{profile.email}<ArrowUpRight size={20}/></a><button className="outline-button" onClick={copyEmail}>{copied ? <Check size={16}/> : <Copy size={16}/>} {copied ? '已复制邮箱' : '复制邮箱'}</button>{copyError && <p role="status">无法自动复制，请选中上方邮箱手动复制。</p>}</div> : <div className="empty-contact"><Mail size={25}/><p>联系方式即将补充</p><span>邮箱与合作渠道将在这里展示。</span></div>}{profile.wechat && <p className="wechat">微信：{profile.wechat}</p>}</Modal>}
    {category && <Modal title={category.name} onClose={() => setCategory(null)}><p className="modal-description">{category.description}</p>{category.projects.length ? <div className="project-list">{category.projects.map(project => <article key={project.title}>{project.image && <img src={project.image} alt={project.title}/>}<h3>{project.title}</h3><p>{project.description}</p><div className="skill-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>{project.url && <a className="outline-button" href={project.url} target="_blank" rel="noopener noreferrer">查看完整项目 <ArrowUpRight size={17}/></a>}</article>)}</div> : <><div className="modal-art"><ProjectArt type={category.id}/></div><div className="project-empty"><span className="eyebrow">COMING SOON</span><h3>作品正在整理中</h3><p>这里将展示项目背景、设计过程与最终成果。<br/>当前封面为分类视觉示意，实际案例待补充。</p></div></>}</Modal>}
  </>;
}
