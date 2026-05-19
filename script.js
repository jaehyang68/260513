const posts = [
  {
    title: "전세보증금이 안 돌아올 때, 첫날 해야 할 일",
    category: "housing",
    date: "2026.05.20",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80",
    excerpt: "내용증명부터 임차권등기명령까지, 당황한 임차인이 순서대로 챙겨야 할 대응을 이야기처럼 풀어봅니다."
  },
  {
    title: "월급이 밀렸다면 사장님 말보다 먼저 볼 것",
    category: "work",
    date: "2026.05.18",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",
    excerpt: "체불임금 확인서, 진정 절차, 지연이자까지. 임금 체불 상황에서 놓치기 쉬운 포인트를 정리합니다."
  },
  {
    title: "계약금 걸었는데 마음이 바뀌면 돌려받을 수 있을까",
    category: "contract",
    date: "2026.05.16",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80",
    excerpt: "계약금, 해약금, 위약금이 어떻게 다른지 실제 거래 장면으로 쉽게 구분해봅니다."
  },
  {
    title: "상속 포기와 한정승인, 이름은 어렵지만 선택은 현실적이다",
    category: "family",
    date: "2026.05.14",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=900&q=80",
    excerpt: "빚이 많은 상속을 마주했을 때 3개월 안에 결정해야 하는 두 가지 선택지를 비교합니다."
  },
  {
    title: "중고거래 사기, 경찰서 가기 전 캡처해야 할 것들",
    category: "consumer",
    date: "2026.05.12",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    excerpt: "대화방, 계좌번호, 게시글, 송금 내역. 증거가 흩어지기 전에 안전하게 모으는 방법입니다."
  },
  {
    title: "임신한 직원의 근로시간 단축, 회사가 거절할 수 있을까",
    category: "work",
    date: "2026.05.10",
    image: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=900&q=80",
    excerpt: "임신기 근로시간 단축의 요건, 신청서, 임금 삭감 금지까지 실무자가 알아야 할 내용을 풀어봅니다."
  },
  {
    title: "관리비가 갑자기 올랐다면 어디까지 따져볼 수 있을까",
    category: "housing",
    date: "2026.05.08",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
    excerpt: "아파트와 오피스텔 관리비 내역을 볼 때 확인해야 할 항목과 자료 요청 방법을 살펴봅니다."
  },
  {
    title: "프리랜서 계약서에서 제일 무서운 한 줄",
    category: "contract",
    date: "2026.05.06",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80",
    excerpt: "성과물 소유권, 수정 범위, 대금 지급일을 놓치면 좋은 일도 분쟁이 됩니다."
  },
  {
    title: "이혼 이야기가 나왔을 때 재산부터 정리해야 하는 이유",
    category: "family",
    date: "2026.05.04",
    image: "https://images.unsplash.com/photo-1493836512294-502baa1986e2?auto=format&fit=crop&w=900&q=80",
    excerpt: "감정과 별개로 통장, 대출, 부동산, 보험 자료를 먼저 정리해야 협의가 쉬워집니다."
  },
  {
    title: "헬스장 환불 거절, 규정표만 보고 포기하지 마세요",
    category: "consumer",
    date: "2026.05.02",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80",
    excerpt: "소비자분쟁해결기준과 약관의 관계를 알면 환불 협상에서 말문이 트입니다."
  },
  {
    title: "해고 통보를 문자로 받았다면 바로 답장하지 마세요",
    category: "work",
    date: "2026.04.30",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80",
    excerpt: "해고예고, 서면 통지, 부당해고 구제신청까지 차분히 확인해야 할 순서가 있습니다."
  },
  {
    title: "친구에게 빌려준 돈, 민망해도 차용증이 필요한 이유",
    category: "contract",
    date: "2026.04.28",
    image: "https://images.unsplash.com/photo-1554224154-26032fced8bd?auto=format&fit=crop&w=900&q=80",
    excerpt: "가까운 사이일수록 금액, 변제일, 이자를 짧게라도 남겨야 나중에 감정싸움을 줄일 수 있습니다."
  }
];

const categoryLabels = {
  housing: "집과 임대차",
  work: "일터와 임금",
  contract: "계약과 돈",
  family: "가족과 상속",
  consumer: "소비자 분쟁"
};

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
    const haystack = `${post.title} ${categoryLabels[post.category]} ${post.excerpt}`.toLowerCase();
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
          <span class="post-tag">${categoryLabels[post.category]}</span>
          <span>${post.date}</span>
        </div>
        <h3>${post.title}</h3>
        <p>${post.excerpt}</p>
        <a class="read-link" href="#" aria-label="${post.title} 읽기">쉽게 읽기</a>
      </div>
    </article>
  `).join("");

  if (pagePosts.length === 0) {
    postGrid.innerHTML = `<p class="empty-state">검색 결과가 없습니다. 다른 생활법률 키워드로 찾아보세요.</p>`;
  }

  renderPagination(pageCount);
}

function renderPagination(pageCount) {
  prevPage.disabled = currentPage === 1;
  nextPage.disabled = currentPage === pageCount;

  pageNumbers.innerHTML = Array.from({ length: pageCount }, (_, index) => {
    const page = index + 1;
    const active = page === currentPage ? " active" : "";
    return `<button class="page-number${active}" type="button" data-page="${page}" aria-label="${page}페이지">${page}</button>`;
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
