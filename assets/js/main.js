// NAV scroll effect
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 20);
});

// Hamburger menu
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");
hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});
mobileMenu.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => mobileMenu.classList.remove("open"));
});

// Scroll reveal
const reveals = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        revealObserver.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 },
);
reveals.forEach((el) => revealObserver.observe(el));

// Demo chat interaction
const demoInput = document.getElementById("demoInput");
const micBtn = document.getElementById("micBtn");
const chatMessages = document.getElementById("chatMessages");

const aiReplies = [
  {
    msg: "Excellent response! Your use of industry terminology is spot on. Let's try a tougher one: 'Where do you see yourself in five years?'",
    feedback: "✅ Fluency: 97% · Vocabulary: Advanced",
  },
  {
    msg: "Great! One small suggestion — instead of 'I want to', say 'I aim to' or 'My goal is to' for a more professional tone. Let's keep going! 💪",
    feedback: "✅ Pronunciation: 93% · Confidence: High",
  },
  {
    msg: "That's a very strong answer! You maintained eye contact well... just kidding — but seriously, your pacing and structure were excellent! 😄",
    feedback: "✅ Overall Score: 95% · Keep it up!",
  },
  {
    msg: "Perfect use of quantified results. Interviewers love numbers. Let's practice talking about challenges next.",
    feedback: "✅ Grammar: 98% · Impact Score: A+",
  },
];
let replyIndex = 0;

function addUserMsg(text) {
  const now = new Date();
  const time = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const div = document.createElement("div");
  div.className = "msg user";
  div.innerHTML = `
      <div class="msg-avatar msg-av-user">S</div>
      <div class="msg-body">
        <div class="msg-bubble">${text}</div>
        <div class="msg-time">${time}</div>
      </div>`;
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function addAiMsg(text, feedback) {
  const now = new Date();
  const time = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const div = document.createElement("div");
  div.className = "msg";
  div.style.opacity = "0";
  div.style.transform = "translateY(10px)";
  div.style.transition = "all .3s ease";
  div.innerHTML = `
      <div class="msg-avatar msg-av-ai">AI</div>
      <div class="msg-body">
        <div class="msg-bubble">${text}</div>
        <div class="feedback-chip">${feedback}</div>
        <div class="msg-time">${time}</div>
      </div>`;
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  requestAnimationFrame(() => {
    div.style.opacity = "1";
    div.style.transform = "translateY(0)";
  });
}

function sendMessage() {
  const text = demoInput.value.trim();
  if (!text) return;
  addUserMsg(text);
  demoInput.value = "";
  const typing = document.createElement("div");
  typing.className = "msg";
  typing.innerHTML = `<div class="msg-avatar msg-av-ai">AI</div><div class="msg-body"><div class="msg-bubble" style="color:var(--ink-muted)">Analyzing your response...</div></div>`;
  chatMessages.appendChild(typing);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  setTimeout(() => {
    chatMessages.removeChild(typing);
    const reply = aiReplies[replyIndex % aiReplies.length];
    addAiMsg(reply.msg, reply.feedback);
    replyIndex++;
  }, 1200);
}

demoInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") sendMessage();
});
micBtn.addEventListener("click", () => {
  const prompts = [
    "In my last role, I led a team of six engineers through a major product redesign.",
    "I believe my strongest skill is cross-functional collaboration and stakeholder management.",
    "My goal is to become a senior PM within the next two years by focusing on data-driven decisions.",
  ];
  const text = prompts[Math.floor(Math.random() * prompts.length)];
  demoInput.value = text;
  setTimeout(sendMessage, 200);
});

// Animate score bars on scroll
const scoreFills = document.querySelectorAll(".score-fill");
const barObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        const target = e.target;
        const width = target.style.width;
        target.style.width = "0%";
        setTimeout(() => {
          target.style.width = width;
        }, 100);
        barObserver.unobserve(target);
      }
    });
  },
  { threshold: 0.5 },
);
scoreFills.forEach((el) => barObserver.observe(el));
