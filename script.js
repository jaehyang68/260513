const posts = [
  {
    title: "임신기 근로시간 단축, 회사가 꼭 알아야 할 것",
    category: "law",
    date: "May 20, 2026",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80",
    excerpt: "근로기준법상 임신기 근로시간 단축의 요건, 신청 절차, 회사의 대응 원칙을 실무 중심으로 정리합니다."
  },
  {
    title: "AI로 법률 리서치를 시작할 때 확인할 세 가지",
    category: "ai",
    date: "May 18, 2026",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    excerpt: "AI 답변을 그대로 믿기 전, 조문 검증과 출처 확인, 적용 시점 확인이 왜 중요한지 살펴봅니다."
  },
  {
    title: "작은 사업자가 계약서를 읽는 순서",
    category: "business",
    date: "May 16, 2026",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",
    excerpt: "대금, 해지, 손해배상, 비밀유지 조항을 빠르게 훑는 계약서 체크 방식을 소개합니다."
  },
  {
    title: "하루를 덜 복잡하게 만드는 기록 습관",
    category: "life",
    date: "May 14, 2026",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=900&q=80",
    excerpt: "메모가 쌓일수록 찾기 어려워지는 문제를 줄이는 태그와 주간 리뷰 방식."
  },
  {
    title: "법령 개정 이력을 볼 때 놓치기 쉬운 시행일",
    category: "law",
    date: "May 11, 2026",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=900&q=80",
    excerpt: "공포일과 시행일은 다릅니다. 실제 사건에 어떤 시점의 법이 적용되는지 확인하는 방법입니다."
  },
  {
    title: "업무 자동화 전에 먼저 정리할 질문",
    category: "ai",
    date: "May 9, 2026",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=900&q=80",
    excerpt: "자동화할 업무, 남겨야 할 판단, 사람이 최종 확인해야 할 지점을 나누는 간단한 프레임입니다."
  },
  {
    title: "고객 문의를 지식 자산으로 바꾸는 법",
    category: "business",
    date: "May 6, 2026",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80",
    excerpt: "반복 질문을 FAQ, 체크리스트, 온보딩 문서로 전환하는 운영 루틴."
  },
  {
    title: "판례를 읽을 때 사실관계부터 보는 이유",
    category: "law",
    date: "May 2, 2026",
    image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=900&q=80",
    excerpt: "결론만 복사하면 위험합니다. 사실관계, 쟁점, 법원의 판단 구조를 함께 읽어야 합니다."
  },
  {
    title: "나만의 AI 프롬프트 저장소 만들기",
    category: "ai",
    date: "Apr 29, 2026",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    excerpt: "자주 쓰는 프롬프트를 역할, 입력, 출력, 검증 기준으로 나누어 재사용하는 방법."
  },
  {
    title: "집중을 되찾는 오후 20분 정리",
    category: "life",
    date: "Apr 25, 2026",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    excerpt: "업무 전환이 많은 날에도 흐름을 되찾는 짧은 정리 루틴."
  },
  {
    title: "사업 초기 문서의 최소 세트",
    category: "business",
    date: "Apr 21, 2026",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80",
    excerpt: "제안서, 견적서, 계약서, 세금계산서 흐름을 처음부터 깔끔하게 잡는 법."
  },
  {
    title: "법률 문서에서 인용 오류를 줄이는 습관",
    category: "law",
    date: "Apr 18, 2026",
    image: "https://images.unsplash.com/photo-1453945619913-79ec89a82c51?auto=format&fit=crop&w=900&q=80",
    excerpt: "조문번호, 항호목, 개정 시점, 법령명 약칭을 확인하는 기본 체크리스트."
  }
];

const pageSize = 6;
let activeTopic = "all";
let currentPage = 1;
let searchTerm = "";

const postGrid = document.querySelector("#postGrid");
const pageNumbers = document.querySelector("#pageNumbers");
const prevPage = document.querySelector("#prevPage");
const nextPage = document.querySelector("#nextPage");
const searchInput = document.querySelector("#searchInput");
const topicButtons = document.querySelectorAll(".topic");

function filteredPosts() {
  return posts.filter((post) => {
    const matchesTopic = activeTopic === "all" || post.category === activeTopic;
    const haystack = `${post.title} ${post.category} ${post.excerpt}`.toLowerCase();
    return matchesTopic && haystack.includes(searchTerm.toLowerCase());
  });
}

function renderPosts() {
  const visiblePosts = filteredPosts();
  const pageCount = Math.max(1, Math.ceil(visiblePosts.length / pageSize));
  currentPage = Math.min(currentPage, pageCount);
  const start = (currentPage - 1) * pageSize;
  const pagePosts = visiblePosts.slice(start, start + pageSize);

  postGrid.innerHTML = pagePosts.map((post) => `
    <article class="post-card">
      <div class="post-image" style="background-image: url('${post.image}')" aria-hidden="true"></div>
      <div class="post-body">
        <div class="post-meta">
          <span class="post-tag">${post.category}</span>
          <span>${post.date}</span>
        </div>
        <h3>${post.title}</h3>
        <p>${post.excerpt}</p>
        <a class="read-link" href="#" aria-label="${post.title} 읽기">Read article</a>
      </div>
    </article>
  `).join("");

  if (pagePosts.length === 0) {
    postGrid.innerHTML = `<p class="empty-state">검색 결과가 없습니다.</p>`;
  }

  renderPagination(pageCount);
}

function renderPagination(pageCount) {
  prevPage.disabled = currentPage === 1;
  nextPage.disabled = currentPage === pageCount;

  pageNumbers.innerHTML = Array.from({ length: pageCount }, (_, index) => {
    const page = index + 1;
    const active = page === currentPage ? " active" : "";
    return `<button class="page-number${active}" type="button" data-page="${page}" aria-label="Page ${page}">${page}</button>`;
  }).join("");
}

topicButtons.forEach((button) => {
  button.addEventListener("click", () => {
    topicButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    activeTopic = button.dataset.topic;
    currentPage = 1;
    renderPosts();
  });
});

searchInput.addEventListener("input", (event) => {
  searchTerm = event.target.value.trim();
  currentPage = 1;
  renderPosts();
});

pageNumbers.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-page]");
  if (!button) return;
  currentPage = Number(button.dataset.page);
  renderPosts();
  document.querySelector("#posts").scrollIntoView({ behavior: "smooth", block: "start" });
});

prevPage.addEventListener("click", () => {
  currentPage -= 1;
  renderPosts();
});

nextPage.addEventListener("click", () => {
  currentPage += 1;
  renderPosts();
});

renderPosts();
