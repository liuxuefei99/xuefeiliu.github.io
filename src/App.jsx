import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Award,
  BookOpenText,
  Dna,
  FlaskConical,
  Flame,
  GraduationCap,
  Mail,
  MapPin,
  ScanLine,
  Users,
} from "lucide-react";
import {
  awards,
  dxTeam,
  education,
  journalMeta,
  labOverview,
  principalInvestigator,
  profile,
  projects,
  publications,
  researchInterests,
  team,
} from "./data.js";

const contentTabs = [
  { id: "publications", label: "发表论文", icon: BookOpenText },
  { id: "projects", label: "项目与荣誉", icon: FlaskConical },
  { id: "team", label: "团队介绍", icon: Users },
];
const contentTabIds = contentTabs.map((tab) => tab.id);

const chineseRank = {
  一: 1,
  二: 2,
  三: 3,
  四: 4,
  五: 5,
  六: 6,
  七: 7,
  八: 8,
  九: 9,
  十: 10,
};

function getCoFirstCount(role) {
  const match = role.match(/共同一作排名第([一二三四五六七八九十]+)/);
  return match ? (chineseRank[match[1]] ?? 0) : 0;
}

function isXuefeiAuthor(author) {
  return author === "Liu X" || author === "Liu XF";
}

function getCoFirstAuthors(paper, authors) {
  if (paper.equalAuthors?.length) {
    return new Set(paper.equalAuthors);
  }

  const coFirstCount = getCoFirstCount(paper.role);
  return new Set(authors.slice(0, coFirstCount));
}

function getCorrespondingAuthors(paper, authors) {
  if (paper.correspondingAuthors?.length) {
    return new Set(paper.correspondingAuthors);
  }

  const correspondingAuthors = new Set();
  if (paper.role.includes("共同通讯作者")) {
    authors.filter(isXuefeiAuthor).forEach((author) => correspondingAuthors.add(author));
  }
  if (paper.role.includes("最后通讯作者") && authors.length) {
    correspondingAuthors.add(authors[authors.length - 1]);
  }
  return correspondingAuthors;
}

const cellDots = Array.from({ length: 34 }, (_, index) => ({
  id: index,
  x: (index * 17 + 9) % 100,
  y: (index * 29 + 11) % 100,
  size: 10 + ((index * 7) % 30),
  delay: (index % 8) * -0.7,
  color: ["#38bdf8", "#2dd4bf", "#a3e635", "#f59e0b", "#818cf8"][index % 5],
}));

function AnimatedCells() {
  return (
    <div className="cell-field" aria-hidden="true">
      {cellDots.map((cell) => (
        <span
          key={cell.id}
          style={{
            "--x": `${cell.x}%`,
            "--y": `${cell.y}%`,
            "--s": `${cell.size}px`,
            "--d": `${cell.delay}s`,
            "--c": cell.color,
          }}
        />
      ))}
      <i />
      <i />
      <i />
    </div>
  );
}

function QRItem({ title, image, alt, helper, href }) {
  return (
    <div className="qr-panel">
      <div className="qr-title">
        <ScanLine size={17} />
        <span>{title}</span>
        {href ? (
          <a href={href} target="_blank" rel="noreferrer">
            打开
            <ArrowUpRight size={13} />
          </a>
        ) : null}
      </div>
      <div className="qr-content">
        <div className="qr-frame">
          {image ? (
            <img src={image} alt={alt} />
          ) : (
            <span className="qr-placeholder">待放入二维码</span>
          )}
        </div>
        {href ? (
          <a className="qr-helper" href={href} target="_blank" rel="noreferrer">
            {helper}
          </a>
        ) : (
          <p>{helper}</p>
        )}
      </div>
    </div>
  );
}

function QRPanel() {
  return (
    <div className="qr-stack">
      <QRItem
        title="个人微信"
        image={profile.wechatQr}
        alt="个人微信二维码"
        helper="扫码添加个人微信"
      />
      <QRItem
        title="Google Scholar"
        image={profile.scholarQr}
        alt="Google Scholar 二维码"
        helper="扫码查看谷歌学术"
        href={profile.scholarUrl}
      />
    </div>
  );
}

function SectionHeading({ eyebrow, title, intro }) {
  return (
    <div className="section-heading">
      {eyebrow ? <span>{eyebrow}</span> : null}
      <h2>{title}</h2>
      {intro ? <p>{intro}</p> : null}
    </div>
  );
}

function HeroProfileCard() {
  return (
    <aside className="profile-card">
      <img className="portrait" src={profile.portrait} alt="刘雪飞头像" />
      <div className="profile-name">
        <h2>{profile.chineseName}</h2>
        <span>{profile.name}</span>
      </div>
      <p className="profile-title">
        {profile.title.split("、").map((line) => (
          <span key={line}>{line}</span>
        ))}
      </p>
      <div className="profile-meta">
        <a href={`mailto:${profile.emails[0]}`}>
          <Mail size={17} />
          {profile.emails[0]}
        </a>
        <a href={`mailto:${profile.emails[1]}`}>
          <Mail size={17} />
          {profile.emails[1]}
        </a>
        <span>
          <MapPin size={17} />
          {profile.location}
        </span>
      </div>
      <QRPanel />
    </aside>
  );
}

function PageLayout({ activeTab }) {
  return (
    <section className="page-layout" id="home">
      <HeroProfileCard />
      <div className="content-column">
        <HomeOverview />
        <TabbedContent activeTab={activeTab} />
      </div>
    </section>
  );
}

function HomeOverview() {
  const lastJournal = principalInvestigator.journals.at(-1);
  const leadingJournals = principalInvestigator.journals.slice(0, -1);
  const lastReviewerJournal = principalInvestigator.reviewerJournals.at(-1);
  const leadingReviewerJournals = principalInvestigator.reviewerJournals.slice(0, -1);

  return (
    <section className="home-overview">
      <p className="hero-focus">
        <Dna size={18} />
        <span>{profile.focus}</span>
      </p>

      <article className="overview-panel">
        <SectionHeading title={labOverview.title} />
        <p>{labOverview.body}</p>
        <ol className="overview-list">
          {labOverview.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ol>
        <div className="chip-list">
          {researchInterests.map((interest) => (
            <span key={interest}>{interest}</span>
          ))}
        </div>
      </article>

      <article className="overview-panel">
        <SectionHeading title={principalInvestigator.title} />
        {principalInvestigator.body && <p>{principalInvestigator.body}</p>}
        <p>
          现已以第一作者或通讯作者（含共同）在{" "}
          {leadingJournals.map((journal) => (
            <span key={journal}>
              <em>{journal}</em>、
            </span>
          ))}
          <em>{lastJournal}</em> 等国际高影响力杂志发表论文 {publications.length} 篇，累计影响因子{" "}
          <strong>{principalInvestigator.cumulativeImpactFactor}</strong>，持续推动计算分析与机制研究之间的双向验证。
        </p>
        <p>
          获得{principalInvestigator.grant}，担任{" "}
          {leadingReviewerJournals.map((journal) => (
            <span key={journal}>
              <em>{journal}</em>、
            </span>
          ))}
          <em>{lastReviewerJournal}</em> 等杂志审稿人。
        </p>
        <div className="timeline">
          {education.map((item) => (
            <div className="timeline-row" key={item.school}>
              <span />
              <div>
                <h3>{item.school}</h3>
                <p>{item.detail}</p>
                <small>{item.years}</small>
              </div>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}

function Publications() {
  return (
    <div className="tab-content">
      <SectionHeading title="发表论文" />
      <div className="publication-grid">
        {publications.map((paper) => {
          const journal = journalMeta[paper.journal] ?? {
            name: paper.journal,
            impactFactor: "待补",
          };
          const authors = paper.authors.split(", ");
          const coFirstAuthors = getCoFirstAuthors(paper, authors);
          const correspondingAuthors = getCorrespondingAuthors(paper, authors);
          const content = (
            <>
              <div className="paper-tags">
                <span className="journal-tag">
                  <em>{journal.name}</em>
                </span>
                <span className="impact-tag">IF {journal.impactFactor}</span>
                <span className="year-tag">{paper.year}</span>
                <span className="role-tag">{paper.role}</span>
              </div>
              <h3>{paper.title}</h3>
              <p className="paper-authors">
                {authors.map((author, index) => {
                  const isCoFirst = coFirstAuthors.has(author);
                  const isCorresponding = correspondingAuthors.has(author);
                  const text = isXuefeiAuthor(author) ? <strong>{author}</strong> : author;

                  return (
                    <span className="author-token" key={`${paper.title}-${author}-${index}`}>
                      {text}
                      {isCoFirst ? <sup>#</sup> : null}
                      {isCorresponding ? <sup>*</sup> : null}
                      {index < authors.length - 1 ? ", " : null}
                    </span>
                  );
                })}
              </p>
            </>
          );

          if (paper.href) {
            return (
              <a className="paper-card" href={paper.href} target="_blank" rel="noreferrer" key={paper.title}>
                {content}
                <ArrowUpRight size={18} />
              </a>
            );
          }

          return (
            <article className="paper-card" key={paper.title}>
              {content}
            </article>
          );
        })}
      </div>
    </div>
  );
}

function ProjectsAwards() {
  return (
    <div className="tab-content">
      <SectionHeading title="项目与荣誉" />
      <div className="split-section">
        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-topline">
                <span>{project.years}</span>
                <div className="project-badges">
                  <strong>{project.amount}</strong>
                  <strong>{project.tag}</strong>
                </div>
              </div>
              <h3>{project.title}</h3>
              <p>{project.body}</p>
            </article>
          ))}
        </div>

        <div className="award-panel">
          <div className="award-title">
            <Award size={20} />
            <h3>荣誉奖励</h3>
          </div>
          <div className="award-list">
            {awards.map((award) => (
              <div className="award-item" key={award}>
                <span />
                <p>{award}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Team() {
  return (
    <div className="tab-content">
      <SectionHeading title={dxTeam.title} />
      <article className="dx-panel">
        <div className="dx-panel-header">
          <Flame size={20} />
          <h3>{dxTeam.aboutTitle}</h3>
        </div>
        <div className="dx-panel-body">
          <div className="dx-copy">
            {dxTeam.statements.map((statement) => (
              <p className="dx-statement" key={statement}>
                {statement}
              </p>
            ))}
            <div className="dx-badges">
              {dxTeam.badges.map((badge) => (
                <span key={badge}>{badge}</span>
              ))}
            </div>
          </div>
        </div>
      </article>
      <h3 className="team-members-title">{dxTeam.membersTitle}</h3>
      <div className="team-grid">
        {team.map((member) => (
          <article className="team-card" key={member.name}>
            <img src={member.image} alt={`${member.cn}头像`} />
            <div>
              <h3>{member.displayName}</h3>
              <p>{member.school}</p>
              <span>{member.degree}</span>
              <strong>{member.role}</strong>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function TabbedContent({ activeTab }) {
  if (!activeTab) {
    return null;
  }

  return (
    <section className="tabs-section" id="content-tabs">
      <div className="tab-panel" role="tabpanel">
        {activeTab === "publications" ? <Publications /> : null}
        {activeTab === "projects" ? <ProjectsAwards /> : null}
        {activeTab === "team" ? <Team /> : null}
      </div>
    </section>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState(() => {
    if (typeof window === "undefined") {
      return null;
    }
    const initialTab = window.location.hash.replace("#", "");
    return contentTabIds.includes(initialTab) ? initialTab : null;
  });

  useEffect(() => {
    const syncTabFromHash = () => {
      const hashTab = window.location.hash.replace("#", "");
      setActiveTab(contentTabIds.includes(hashTab) ? hashTab : null);
    };

    syncTabFromHash();
    window.addEventListener("hashchange", syncTabFromHash);
    return () => window.removeEventListener("hashchange", syncTabFromHash);
  }, []);

  const openTab = (tabId) => {
    setActiveTab(tabId);
    window.history.replaceState(null, "", `#${tabId}`);
    window.requestAnimationFrame(() => {
      document.getElementById("content-tabs")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  return (
    <div className="site-shell">
      <AnimatedCells />
      <header className="topbar">
        <nav aria-label="主导航">
          <a
            href="#home"
            className={!activeTab ? "is-active" : ""}
            onClick={() => setActiveTab(null)}
          >
            <GraduationCap size={17} />
            主页
          </a>
          {contentTabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                type="button"
                className={activeTab === tab.id ? "is-active" : ""}
                key={tab.id}
                onClick={() => openTab(tab.id)}
              >
                <Icon size={17} />
                {tab.label}
              </button>
            );
          })}
        </nav>
      </header>

      <main>
        <PageLayout activeTab={activeTab} />
      </main>

      <footer className="footer">
        <span>© 2026 Xuefei Liu</span>
      </footer>
    </div>
  );
}
